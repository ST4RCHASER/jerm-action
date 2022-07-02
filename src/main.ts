import * as core from '@actions/core'
import { wait } from './wait'
import { promises as fs } from 'fs'

async function run(): Promise<void> {
  try {
    fs.readdir('./').then(files => {
      core.setOutput('files', files.join('\n'))
    })

  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()

