import path from 'path';
import fs from 'fs';
import * as core from '@actions/core'
import { JermConfig } from './interfaces/jermConfig.interface';
import loadCustomConfig from './loadCustomConfig';
const defaultConfig: JermConfig = {
    thaiLover: false,
    veryHoly: false,
    ignore: [
        /^\.monk/,
        /^.gitingore/,
        /^readme.md'/,
        /^.prettierignore/
    ]
}
const loadConfig = (): JermConfig => {
    //Try load config from .monk/config.js
    core.info('Start loading monk config...');
    const configFile = (process.env.GITHUB_WORKSPACE || path.resolve(__dirname, '..')) + '/.monk/config.js';
    if (fs.existsSync(configFile)) {
        return loadCustomConfig as JermConfig;
    }
    return defaultConfig;
}
export default loadConfig;