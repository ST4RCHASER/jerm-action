import * as core from '@actions/core'
import fs from 'fs';
import { exec } from 'child_process';
export const concatYanAudio = (audioSrc: string, yarnSrc: string) => {
  return new Promise<void>((resolve, reject) => {
    core.info(`Jerming audio: ${audioSrc}`);
    //Run ffmpeg command
    exec(`ffmpeg -i "${audioSrc}" -i "${yarnSrc}" -filter_complex "[0][1]amerge=inputs=2,pan=stereo|FL<c0+c1|FR<c2+c3[a]" -map "[a]" "${audioSrc}-yan.mp3"`, (err, stdout) => {
      if (err) reject(err);
      core.info(`stdout: ${stdout}`)
      //delete old and rename new file
      fs.unlink(audioSrc, (err) => {
        if (err) reject(err);
        fs.rename(`${audioSrc}-yan.mp3`, audioSrc, (err) => {
          if (err) reject(err);
          resolve();
        })
      });
    });
  });
}
