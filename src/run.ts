import * as core from '@actions/core'
import { promises as fs } from 'fs'
type Inputs = {
  name: string
}

// eslint-disable-next-line @typescript-eslint/require-await
export const run = async (): Promise<void> => {
  try {
    const files = await fs.readdir('./')
    core.setOutput('files', files.join(', '))
  } catch (err) {
    console.error(err)
  }
}
