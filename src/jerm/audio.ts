import * as core from '@actions/core'
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
const audioconcat = require('audioconcat')

export const concatYanAudio = (audioSrc: string, yarnSrc: string, outputFileName = 'yun') => {
  audioconcat([yarnSrc, audioSrc])
    .concat(`${outputFileName}.mp3`)
    .on('start', function (command: unknown) {
      core.info(`ffmpeg process started: ${command as string}`)
    })
    .on('error', function (err: unknown, stdout: unknown, stderr: unknown) {
      core.error(`Error: ${err as string}`)
      core.error(`ffmpeg stderr: ${stderr as string}`)
    })
    .on('end', function (output: unknown) {
      core.error(`Audio created in: ${output as string}`)
    })
}
