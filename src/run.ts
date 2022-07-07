import * as core from '@actions/core'
import { promises as fs } from 'fs'
import walk from 'ignore-walk'
import path from 'path'
import loadAsset from './jerm/loadAsset'
import loadConfig from './jerm/loadConfig'
import { JermConfig } from './jerm/interfaces/jermConfig.interface'
import doJerm from './jerm/doJerm'
import { Inputs } from './jerm/interfaces/inputs.interface'

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
    //Summoning monk by print it
    try {
      const text = await fs.readFile(loc.assci, 'utf8')
      core.info(text)
    } catch (e) {
      if (e instanceof Error)
        core.info(`Failed to summon monk: ${e.name} ${e.message} ${e.stack || 'No stack available'}`)
      else core.info(`Failed to summon monk: ${JSON.stringify(e)}`)
      core.info("Don't worry about it, you can jerm it by yourself.")
    }
    await Promise.all(
      lists.map(async (i) => {
        //Check if file size not zero and less than 40MB
        const stats = await fs.stat(i)
        if (stats.size > 0 && stats.size < 40 * 1024 * 1024) {
          try {
            await doJerm(i, loc, config)
            core.info(`Jerm success: ${i}`)
          } catch (e) {
            if (e instanceof Error) core.info(`Jerm error: ${e.name} ${e.message} ${e.stack || 'No stack available'}`)
            else core.info(`Jerm error: ${JSON.stringify(e)}`)
            core.info('Failed to jerm file: ' + i)
            if (config.veryHoly) {
              core.info('But veryHoly is true, so we will continue with force!')
              try {
                await doJerm(i, loc, config, config.veryHoly)
                core.info(`Jerm with force success: ${i}`)
              } catch (e) {
                if (e instanceof Error)
                  core.warning(`Jerm with force error: ${e.name} ${e.message} ${e.stack || 'No stack available'}`)
                else core.warning(`Jerm with force error: ${JSON.stringify(e)}`)
                core.warning(
                  'Monk said that we can not force to jerm file may it be a bug (or holy than this monk!), so we skip it: ' +
                    i
                )
              }
            }
          }
        }
      })
    )
    core.info(`Results: ${JSON.stringify(lists)}`)
  } catch (err) {
    if (err instanceof Error)
      core.error(`sumting wrong with something: ${err.name} ${err.message} ${err.stack || 'No stack available'}`)
    else core.error(`sumting wrong with something: ${JSON.stringify(err)}`)
    console.error(`sumting wrong with something:`, err)
    core.setFailed(err instanceof Error ? err.message : JSON.stringify(err))
  }
}
