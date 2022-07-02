import sharp from 'sharp'
import fs from 'fs'
export const writeText = async (path: string) => {
    //Add text to first of line
    let text = "==========TEST=========="
    const content = await fs.readFileSync(path, 'utf8');
    const lines = content.split('\n');
    const firstLine = lines[0];
    const newContent = `${text} ${firstLine}`;
    return await fs.writeFileSync(path, newContent, 'utf8');
}
