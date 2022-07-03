import { exec } from 'child_process';
import * as core from '@actions/core'
import fs from 'fs';
const mergeVideo = async (filePath: string, imagePath: string, audioSrc: string): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        let result = exec(`ffmpeg -i ${filePath} -i ${imagePath} -filter_complex "overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2" -codec:a copy ${filePath}-yanad.mp4`, (err) => {
            if (err) {
                reject(err);
            }
            exec(`ffmpeg -i ${filePath}-yanad.mp4 -i ${audioSrc} -filter_complex "[0][1]amerge=inputs=2,pan=stereo|FL<c0+c1|FR<c2+c3[a]" -map "[a]" ${audioSrc}-yanfinish.mp4`, (err, stdout, stderr) => {
                if (err) {
                    core.error(`Error: ${err}`)
                    reject(err)
                } else {
                    core.info(`stdout: ${stdout}`)
                    //delete old and rename new file
                    fs.unlinkSync(`${filePath}-yanad.mp4`);
                    fs.unlink(filePath, (err) => {
                        if (err) {
                            core.error(`Error: ${err}`)
                            reject(err)
                        } else {
                            fs.rename(`${filePath}-yanfinish.mp4`, filePath, (err) => {
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
    });
}
export default mergeVideo;