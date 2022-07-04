import * as core from '@actions/core'
import { promises as fs } from 'fs'
import walk from 'ignore-walk'
import path from 'path'
import loadAsset from './jerm/loadAsset'
import loadConfig from './jerm/loadConfig'
import { JermConfig } from './jerm/interfaces/jermConfig.interface'
import doJerm from './jerm/doJerm'
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
    })
    const config: JermConfig = loadConfig()
    const loc = await loadAsset()
    const filteredFiles = files
      .filter((i) => i.indexOf('.git/') === -1)
      .filter((i) => i.indexOf('.monk/') === -1)
      .filter((i) => i.indexOf('.github/') === -1)
      .filter((i) => config.ignore.every((j) => !j.test(i)))
    const lists = filteredFiles.map((i) => path.join(filePath, i))
    await Promise.all(
      lists.map(async (i) => {
        //Check if file size not zero and less than 40MB
        const stats = await fs.stat(i)
        if (stats.size > 0 && stats.size < 40 * 1024 * 1024) {
          await doJerm(i, loc, config)
        }
      })
    )
    core.info(`Results: ${JSON.stringify(lists)}`)
  } catch (err) {
    if (err instanceof Error)
      core.error(`sumting wrong with something: ${err.name} ${err.message} ${err.stack || 'No Stack'}`)
    else core.error(`sumting wrong with something: ${JSON.stringify(err)}`)
    console.error(`sumting wrong with something:`, err)
  }
}
