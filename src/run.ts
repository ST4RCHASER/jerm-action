import * as core from '@actions/core'
import { promises as fs } from 'fs'
type Inputs = {
  path: string
}

// eslint-disable-next-line @typescript-eslint/require-await
export const run = async (input: Inputs): Promise<void> => {
  try {
    const files = await fs.readdir('./')
    core.info(`Files: ${JSON.stringify(files)}`)
    core.info(`pwd: ${process.cwd()}`)

    //recursively walk the directory
    const walk = async (dir: string): Promise<void> => {
      const files = await fs.readdir(dir)
      for (const file of files) {
        const path = `${dir}/${file}`
        const stat = await fs.stat(path)
        if (stat.isDirectory()) {
          await walk(path)
        } else {
          core.info(`${path}`)
        }
      }
    }
    await walk(input.path)

    // core.setOutput('files', files.join(', '))
  } catch (err) {
    console.error(err)
  }
}
