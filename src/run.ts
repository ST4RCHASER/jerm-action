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
    // core.setOutput('files', files.join(', '))
  } catch (err) {
    console.error(err)
  }
}
