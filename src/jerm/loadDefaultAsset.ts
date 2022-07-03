import path from 'path';
import fs from 'fs';
import axios from 'axios';
import * as core from '@actions/core'
const fsPromises = fs.promises;
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
        const base = (process.env.GITHUB_WORKSPACE  || path.resolve(__dirname, '..')) + '/.monk/';
        core.info(`base: ${base}`);
        const loc: AssetLocation = {
            assci: base + 'ascii.txt',
            image: base + 'image.png',
            audio: base + 'audio.mp3',
        };
        //Check if base folder not exist create it
        if (!fs.existsSync(base)) {
            await fsPromises.mkdir(base);
        }
        //Check if assci file not exist download it
        if (!fs.existsSync(loc.assci)) {
            const response = await axios.get(defaultAssetURL.assci);
            core.info(`Downloading assci file: ${defaultAssetURL.assci}`);
            await fsPromises.writeFile(loc.assci, response.data);
        }
        //Check if image file not exist download it
        if (!fs.existsSync(loc.image)) {
            const response = await axios.get(defaultAssetURL.image);
            core.info(`Downloading image file: ${defaultAssetURL.image}`);
            await fsPromises.writeFile(loc.image, response.data);
        }
        //Check if audio file not exist download it
        if (!fs.existsSync(loc.audio)) {
            const response = await axios.get(defaultAssetURL.audio);
            core.info(`Downloading audio file: ${defaultAssetURL.audio}`);
            await fsPromises.writeFile(loc.audio, response.data);
        }
        resolve(loc);
    });
}
export default loadDefaultAsset;