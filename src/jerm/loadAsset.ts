import path from 'path';
import fs from 'fs';
import * as core from '@actions/core'
import { AssetLocation } from './interfaces/assetLocation.interface';
const defaultAssetURL = {
    assci: path.resolve(__dirname, '..', 'assets', 'ascii.txt'),
    image: path.resolve(__dirname, '..', 'assets', 'image.png'),
    audio: path.resolve(__dirname, '..', 'assets', 'audio.mp3'),
}
const loadDefaultAsset = async (): Promise<AssetLocation> => {
    return new Promise((resolve) => {
        core.info('Start loading monk assets...');
        const base = (process.env.GITHUB_WORKSPACE  || path.resolve(__dirname, '..')) + '/.monk/';
        const loc: AssetLocation = {
            assci: base + 'ascii.txt',
            image: base + 'image.png',
            audio: base + 'audio.mp3',
        };
        //Check if base folder not exist use all default asset
        if (!fs.existsSync(base)) resolve(defaultAssetURL);
        //Check if assets file not exist use default
        if (!fs.existsSync(loc.assci)) loc.assci = defaultAssetURL.assci;
        if (!fs.existsSync(loc.image)) loc.image = defaultAssetURL.image;
        if (!fs.existsSync(loc.audio)) loc.audio = defaultAssetURL.audio;
        resolve(loc);
    });
};
export default loadDefaultAsset;