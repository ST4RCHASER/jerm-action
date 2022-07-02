import * as core from '@actions/core'
import { run } from '../src/run'

test('run successfully', async () => {
  await expect(run({ path: core.getInput('path') })).resolves.toBeUndefined()
})
