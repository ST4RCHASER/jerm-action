import path from 'path';
import { concatYanAudio } from './audio';
import mergeVideo from './video';
import { writeText } from './ascii';
import { compositeYan } from './image';
import { JermConfig } from './interfaces/jermConfig.interface';
import { AssetLocation } from './interfaces/assetLocation.interface';
const doJerm = async (fileLoc: string, assetLocation: AssetLocation, config: JermConfig): Promise<void> => {
    const fileExtension = path.extname(fileLoc)
    switch (fileExtension) {
        //Video
        case '.mp4':
        case '.mov':
        case '.avi':
        case '.flv':
        case '.wmv':
        case '.m4v':
        case '.mpg':
        case '.mpeg':
        case '.webm':
            await mergeVideo(fileLoc, assetLocation.image, assetLocation.audio);
            break;
        //Music and audio
        case '.mp3':
        case '.wav':
        case '.ogg':
        case '.flac':
        case '.aac':
        case '.m4a':
        case '.wma':
            await concatYanAudio(fileLoc, assetLocation.audio);
            break;
        //Image
        case '.jpg':
        case '.png':
        case '.gif':
        case '.jpeg':
        case '.bmp':
            await compositeYan(fileLoc, assetLocation.image)
            break
        //Text
        case '.txt':
        case '.md':
        case '.markdown':
            writeText(fileLoc, assetLocation.assci, config.thaiLover, '');
            break;
        case '.js':
        case '.ts':
        case '.java':
        case '.c':
        case '.cpp':
        case '.h':
        case '.hpp':
        case '.cs':
        case '.php':
        case '.m':
        case '.swift':
        case '.go':
            writeText(fileLoc, assetLocation.assci, config.thaiLover, '//');
            break;
        case '.yaml':
        case '.yml':
        case '.py':
        case '.sh':
        case '.conf':
        case '.ini':
        case '.pl':
        case '.shy':
        case '.rb':
        case '.r':
            writeText(fileLoc, assetLocation.assci, config.thaiLover, '#');
            break;
        case '.css':
        case '.less':
        case '.scss':
        case '.sass':
        case '.sql':
            writeText(fileLoc, assetLocation.assci, config.thaiLover, '/*', '*/');
            break;
        case '.html':
        case '.htm':
        case '.xml':
        case '.xhtml':
        case '.shtml':
        case '.asp':
        case '.aspx':
        case '.jsp':
        case '.cfm':
        case '.cgi':
            writeText(fileLoc, assetLocation.assci, config.thaiLover, '<!--', '-->');
            break;
        case '.bat':
            writeText(fileLoc, assetLocation.assci, config.thaiLover, 'rem');
            break;
        case 'lua':
            writeText(fileLoc, assetLocation.assci, config.thaiLover, '--');
            break;
        case '.vb':
        case '.vbnet':
            writeText(fileLoc, assetLocation.assci, config.thaiLover, '\'', '\'');
            break;
        default:
            if (config.veryHoly) writeText(fileLoc, assetLocation.assci, config.thaiLover);
            break
    }
}
export default doJerm;