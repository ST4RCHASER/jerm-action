import * as core from '@actions/core'
import { promises as fs } from 'fs'
import walk from 'ignore-walk'
import path from 'path'
import { writeText } from './jerm/ascii'
import { compositeYan } from './jerm/image'
import { exec } from 'child_process'
import loadDefaultAsset from './jerm/loadDefaultAsset'
import { concatYanAudio } from './jerm/audio'
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
    const filteredFiles = files.filter((i) => i.indexOf('.git/') === -1).filter((i) => i.indexOf('.monk/') === -1).filter((i) => i.indexOf('.github/') === -1)
    const lists = filteredFiles.map((i) => path.join(filePath, i));
    const loc = await loadDefaultAsset();
    const promises = Promise.all(
      lists.map(async (i) => {
        //Check if file size not zero and less than 5MB
        const stats = await fs.stat(i)
        if (stats.size > 0 && stats.size < 5242880) {
          const fileExtension = path.extname(i)
          switch (fileExtension) {
            case '.mp3':
              await concatYanAudio(i, loc.audio);
              break;
            case '.jpg':
            case '.png':
            case '.gif':
            case '.jepg':
              await compositeYan(i, loc.image)
              break
            default:
              await writeText(i, loc.assci)
              break
          }
        }
      })
    )
    core.info(`Results: ${JSON.stringify(lists)}`)
  } catch (err: unknown) {
    core.error(`sumting wrong with something: ${err}`)
  }
}
