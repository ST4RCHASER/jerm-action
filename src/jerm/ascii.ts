import fs from 'fs'
export const writeText = async (path: string, textFilePath: string) => {
    //Add text to first of line
    const text = fs.readFileSync(textFilePath, 'utf8');
    const content = await fs.readFileSync(path, 'utf8');
    const lines = content.split('\n');
    const firstLine = lines[0];
    let newContent = `${text}\n${firstLine}`;
    newContent += lines.slice(1).join('\n');
    newContent = newContent.replace(/\n/g, '\n//');
    return await fs.writeFileSync(path, newContent, 'utf8');
}
