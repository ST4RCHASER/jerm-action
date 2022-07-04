import fs from 'fs'
import * as core from '@actions/core'
export const writeText = (path: string, textFilePath: string, thaiLover: boolean, commentPrefix = '//', commentSuffix = '') => {
    core.info(`Jerming file: ${path}`);
    let text = fs.readFileSync(textFilePath, 'utf8');
    const content = fs.readFileSync(path, 'utf8');
    const lines = content.split('\n');
    //Add comment prefix and suffix to text per line
    text = text.split('\n').map(line => {
        return commentPrefix + line + commentSuffix;
    }
    ).join('\n');
    let newContent = `${commentPrefix}${text}${commentSuffix}\n`;
    newContent += lines.join('\n');
    if (thaiLover) newContent = newContent.replaceAll('1', '๑').replaceAll('2', '๒').replaceAll('3', '๓').replaceAll('4', '๔').replaceAll('5', '๕').replaceAll('6', '๖').replaceAll('7', '๗').replaceAll('8', '๘').replaceAll('9', '๙').replaceAll('0', '๐');
    return fs.writeFileSync(path, newContent, 'utf8');
}
