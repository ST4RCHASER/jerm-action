/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
const audioconcat = require('audioconcat')

export const concatYanAudio = (audioSrc: string, yarnSrc: string, outputFileName = 'yun') => {
  audioconcat([yarnSrc, audioSrc])
    .concat(`${outputFileName}.mp3`)
    .on('start', function (command: unknown) {
      console.log('ffmpeg process started:', command)
    })
    .on('error', function (err: unknown, stdout: unknown, stderr: unknown) {
      console.error('Error:', err)
      console.error('ffmpeg stderr:', stderr)
    })
    .on('end', function (output: unknown) {
      console.error('Audio created in:', output)
    })
}
