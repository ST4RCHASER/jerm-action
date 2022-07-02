import fs from 'fs'
export const writeText = async (path: string) => {
    //Add text to first of line
    const text = "==========TEST=========="
    const content = await fs.readFileSync(path, 'utf8');
    const lines = content.split('\n');
    const firstLine = lines[0];
    const newContent = `${text}\n${firstLine}`;
    return await fs.writeFileSync(path, newContent, 'utf8');
}
