import * as core from '@actions/core'
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
const audioconcat = require('audioconcat')
import fs from 'fs';
export const concatYanAudio = (audioSrc: string, yarnSrc: string) => {
return new Promise<void>((resolve, reject) => {
  audioconcat([yarnSrc, audioSrc])
    .concat(`${audioSrc}.yan`)
    .on('start', function (command: unknown) {
      core.info(`ffmpeg process started: ${command as string}`)
    })
    .on('error', function (err: unknown, stdout: unknown, stderr: unknown) {
      core.error(`Error: ${err as string}`)
      core.error(`ffmpeg stderr: ${stderr as string}`)
      reject(err)
    })
    .on('end', function (output: unknown) {
      core.error(`Audio created in: ${output as string}`)
      //delete old and rename new file
      fs.unlink(audioSrc, (err) => {
        if (err) throw err
        fs.rename(`${audioSrc}.yan`, audioSrc, (err) => {
          if (err) throw err
          resolve();
        }
        )
      });
    })
});
}
