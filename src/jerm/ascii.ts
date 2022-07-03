import fs from 'fs'
export const writeText = async (path: string, textFilePath: string) => {
    //Add text to first of line
    let text = fs.readFileSync(textFilePath, 'utf8');
    const content = await fs.readFileSync(path, 'utf8');
    const lines = content.split('\n');
    const firstLine = lines[0];
    text = text.replace(/\n/g, '\n//');
    let newContent = `//${text}\n${firstLine}`;
    newContent += lines.slice(1).join('\n');
    newContent.replaceAll('1', '๑').replaceAll('2', '๒').replaceAll('3', '๓').replaceAll('4', '๔').replaceAll('5', '๕').replaceAll('6', '๖').replaceAll('7', '๗').replaceAll('8', '๘').replaceAll('9', '๙').replaceAll('0', '๐');
    return await fs.writeFileSync(path, newContent, 'utf8');
}
