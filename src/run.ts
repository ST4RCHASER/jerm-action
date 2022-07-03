import * as core from '@actions/core'
import { promises as fs } from 'fs'
import walk from 'ignore-walk'
import path from 'path'
import { writeText } from './jerm/ascii'
import { compositeYan } from './jerm/image'
import { exec } from 'child_process'
import loadDefaultAsset from './jerm/loadDefaultAsset'
import { concatYanAudio } from './jerm/audio'
import mergeVideo from './jerm/video'
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
      ignoreFiles: ['.gitignore', '.prettierignore'],
    })
    const filteredFiles = files
      .filter((i) => i.indexOf('.git/') === -1)
      .filter((i) => i.indexOf('.monk/') === -1)
      .filter((i) => i.indexOf('.github/') === -1)
    const lists = filteredFiles.map((i) => path.join(filePath, i))
    const loc = await loadDefaultAsset()
    const promises = Promise.all(
      lists.map(async (i) => {
        //Check if file size not zero and less than 40MB
        const stats = await fs.stat(i)
        if (stats.size > 0 && stats.size < 40 * 1024 * 1024) {
          const fileExtension = path.extname(i)
          switch (fileExtension) {
            //Video
            case '.mp4':
            case '.mov':
            case '.avi':
            case '.flv':
            case '.wmv':
            case '.m4v':
            case '.mpg':
            case '.mpeg':
            case '.webm':
              await mergeVideo(i, loc.image, loc.audio)
              break
            //Music and audio
            case '.mp3':
            case '.wav':
            case '.ogg':
            case '.flac':
            case '.aac':
            case '.m4a':
            case '.wma':
              await concatYanAudio(i, loc.audio)
              break
            //Image
            case '.jpg':
            case '.png':
            case '.gif':
            case '.jpeg':
            case '.bmp':
              await compositeYan(i, loc.image)
              break
            default:
              await writeText(i, loc.assci)
              break
          }
        }
      })
    )
    core.info(`Results: ${JSON.stringify(lists)}`)
  } catch (err: unknown) {
    core.error(`sumting wrong with something: ${err}`)
  }
}
