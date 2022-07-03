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
    assci: path.resolve(__dirname, '..', 'assets', 'ascii.txt'),
    image: path.resolve(__dirname, '..', 'assets', 'image.png'),
    audio: path.resolve(__dirname, '..', 'assets', 'audio.mp3'),
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
        if (!fs.existsSync(loc.assci)) loc.assci = defaultAssetURL.assci;
        //Check if image file not exist download it
        if (!fs.existsSync(loc.image)) loc.image = defaultAssetURL.image;
        //Check if audio file not exist download it
        if (!fs.existsSync(loc.audio)) loc.audio = defaultAssetURL.audio;
        resolve(loc);
    });
}
export default loadDefaultAsset;