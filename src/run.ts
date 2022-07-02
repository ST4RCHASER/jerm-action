import * as core from '@actions/core'
import walk from 'ignore-walk'
import path from 'path'
type Inputs = {
  path: string
}

// eslint-disable-next-line @typescript-eslint/require-await
export const run = async (input: Inputs): Promise<void> => {
  const filePath = path.resolve(input.path)
  const files = await walk({
    path: filePath,
    includeEmpty: false,
    ignoreFiles: ['.gitignore', '.prettierignore'],
  })
  const filteredFiles = files.filter((i) => i.indexOf('.git/') === -1).filter((i) => i.indexOf('.github/') === -1)
  core.info(`Results: ${JSON.stringify(filteredFiles.map((i) => path.join(filePath, i)))}`)
}
