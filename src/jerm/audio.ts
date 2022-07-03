import * as core from '@actions/core'
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
const audioconcat = require('audioconcat')
import fs from 'fs';
import { exec } from 'child_process';
export const concatYanAudio = (audioSrc: string, yarnSrc: string) => {
  return new Promise<void>((resolve, reject) => {
    //Run ffmpeg command
    // exec(`ffmpeg -i "concat:${audioSrc}|${yarnSrc}" -acodec copy ${audioSrc}-yan.mp3`, (err, stdout, stderr) => {
      // exec(`ffmpeg -i ${audioSrc} -i ${yarnSrc} -filter_complex "[1]adelay=Ns|Ns[a1];[0:a][a1]amix=inputs=2[a]" -map "[a]" ${audioSrc}-yan.mp3`, (err, stdout, stderr) => {
      exec(`ffmpeg -i ${audioSrc} -i ${yarnSrc} -filter_complex "[0][1]amerge=inputs=2,pan=stereo|FL<c0+c1|FR<c2+c3[a]" -map "[a]" ${audioSrc}-yan.mp3`, (err, stdout, stderr) => {
      if (err) {
        core.error(`Error: ${err}`)
        reject(err)
      } else {
        core.info(`stdout: ${stdout}`)
        //delete old and rename new file
        fs.unlink(audioSrc, (err) => {
          if (err) {
            core.error(`Error: ${err}`)
            reject(err)
          } else {
            fs.rename(`${audioSrc}-yan.mp3`, audioSrc, (err) => {
              if (err) {
                core.error(`Error: ${err}`)
                reject(err)
              }
              resolve();
            })
          }
        });
      }
    });
  });
}
