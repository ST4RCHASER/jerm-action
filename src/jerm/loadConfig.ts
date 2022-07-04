import path from 'path';
import fs from 'fs';
import * as core from '@actions/core'
import { CustomJermConfig } from './interfaces/customJermConfig.interface';
import { JermConfig } from './interfaces/jermConfig.interface';
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
    const configFile = (process.env.GITHUB_WORKSPACE || path.resolve(__dirname, '..')) + '/.monk/config.json';
    if (fs.existsSync(configFile)) {
        const rawConfig: string = fs.readFileSync(configFile, 'utf8');
        const config = JSON.parse(rawConfig) as CustomJermConfig;
        //String to regex
        const regex: RegExp[] = config.ignore.map((i: string) => new RegExp(i));
        return {
            ...defaultConfig,
            ...config,
            ignore: regex || defaultConfig.ignore,
        };
    }
    return defaultConfig;
}
export default loadConfig;