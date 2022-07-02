import * as core from '@actions/core'
import { promises as fs } from 'fs'
export const writeText = async (path: string) => {
  //Add text to first of line
  const text = '==========TEST=========='
  const content = await fs.readFile(path, 'utf8')
  const lines = content.split('\n')
  const firstLine = lines[0]
  const newContent = `${text}\n${firstLine}`
  core.info(`Writing text to first line of file: ${path}`)
  return fs.writeFile(path, newContent, 'utf8')
}
