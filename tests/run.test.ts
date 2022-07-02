import { run } from '../src/run'

test('run successfully', async () => {
  await expect(run()).resolves.toBeUndefined()
})
