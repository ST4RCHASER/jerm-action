import * as core from '@actions/core'
import { promises as fs } from 'fs'
import walk from 'ignore-walk'
import path from 'path'
import { writeText } from './jerm/ascii'
import { compositeYan } from './jerm/image'
type Inputs = {
  path: string
}

// eslint-disable-next-line @typescript-eslint/require-await
export const run = async (input: Inputs): Promise<void> => {
  try {
    const filePath = path.resolve(input.path)
    const files = await walk({
      path: filePath,
      includeEmpty: false,
      ignoreFiles: ['.gitignore', '.prettierignore'],
    })
    let filteredFiles = files.filter((i) => i.indexOf('.git/') === -1).filter((i) => i.indexOf('.github/') === -1)
    let lists = filteredFiles.map((i) => path.join(filePath, i))
    let promises = Promise.all(
      lists.map(async (i) => {
        //Check if file size not zero and less than 5MB
        const stats = await fs.stat(i)
        if (stats.size > 0 && stats.size < 5242880) {
          let fileExtension = path.extname(i)
          switch (fileExtension) {
            case '.jpg':
            case '.png':
            case '.gif':
            case '.jepg':
              await compositeYan(i, i)
              break
            default:
              await writeText(i)
              break
          }
        }
      })
    )
    core.info(`Results: ${JSON.stringify(lists)}`)
  } catch (err) {
    core.error(`sumting wrong with something: ${err}`)
  }
}
