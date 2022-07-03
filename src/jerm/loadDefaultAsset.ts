import path from 'path';
import fs from 'fs';
import axios from 'axios';
import * as core from '@actions/core'
interface AssetLocation {
    assci: string;
    image: string;
    audio: string;
}
const defaultAssetURL = {
    assci: 'https://raw.githubusercontent.com/ST4RCHASER/monk-action/main/assets/ascii.txt',
    image: 'https://raw.githubusercontent.com/ST4RCHASER/monk-action/main/assets/image.png',
    audio: 'https://raw.githubusercontent.com/ST4RCHASER/monk-action/main/assets/audio.mp3',
}
const loadDefaultAsset = async (): Promise<AssetLocation> => {
    return new Promise(async (resolve) => {
        const base = path.resolve(__dirname, '../../.monk');
        core.info(`base: ${base}`);
        const loc: AssetLocation = {
            assci: path.join(base, 'ascii.txt'),
            image: path.join(base, 'image.png'),
            audio: path.join(base, 'audio.mp3'),
        };
        //Check if base folder not exist create it
        if (!fs.existsSync(base)) {
            fs.mkdirSync(base);
        }
        //Check if assci file not exist download it
        if (!fs.existsSync(loc.assci)) {
            const response = await axios.get(defaultAssetURL.assci);
            fs.writeFileSync(loc.assci, response.data);
        }
        //Check if image file not exist download it
        if (!fs.existsSync(loc.image)) {
            const response = await axios.get(defaultAssetURL.image);
            fs.writeFileSync(loc.image, response.data);
        }
        //Check if audio file not exist download it
        if (!fs.existsSync(loc.audio)) {
            const response = await axios.get(defaultAssetURL.audio);
            fs.writeFileSync(loc.audio, response.data);
        }
        resolve(loc);
    });
}
export default loadDefaultAsset;