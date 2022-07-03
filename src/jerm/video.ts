import { exec } from 'child_process';
import * as core from '@actions/core'
import fs from 'fs';
const mergeVideo = async (filePath: string, imagePath: string, audioSrc: string): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        let result = exec(`ffmpeg -i ${filePath} -i ${imagePath} -filter_complex "overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2" -codec:a copy ${filePath}-video.mp4`, (err) => {
            if (err) {
                reject(err);
            }
            exec(`ffmpeg -i ${filePath}-video.mp4 -i ${audioSrc} -filter_complex "[0][1]amerge=inputs=2,pan=stereo|FL<c0+c1|FR<c2+c3[a]" -map "[a]" ${filePath}-audio.mp3`, (err, stdout, stderr) => {
                if (err) {
                    core.error(`Error: ${err}`)
                    reject(err)
                } else {
                    //Merge video and audio
                    exec(`ffmpeg -i ${filePath}-video.mp4 -i ${filePath}-audio.mp3 -map 0:v:0 -map 1:a:0 -y ${filePath}-final.mp4`, (err, stdout, stderr) => {
                        if (err) {
                            core.error(`Error: ${err}`)
                            reject(err);
                        } else {
                            core.info(`stdout: ${stdout}`)
                            fs.unlink(filePath, (err) => {
                                if (err) {
                                    core.error(`Error: ${err}`)
                                    reject(err)
                                } else {
                                    fs.rename(`${filePath}-final.mp4`, filePath, (err) => {
                                        if (err) {
                                            core.error(`Error: ${err}`)
                                            reject(err)
                                        }
                                        resolve();
                                    });
                                }
                            });
                        }
                    });
                }
            });
        });
    });
}
export default mergeVideo;