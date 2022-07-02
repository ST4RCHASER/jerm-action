import sharp from 'sharp'
import fs from 'fs';
export const compositeYan = async (imgSrc: string, yanSrc: string): Promise<sharp.OutputInfo> =>
  {
    const fileExtension = imgSrc.split('.').pop();
    const img = sharp(imgSrc)
    .resize(1024)
    .composite([
      {
        input: yanSrc,
        gravity: 'southeast',
      },
    ]);
    switch (fileExtension) {
      case 'jepg':
      case 'jpg':
        img.jpeg();
        break;
      case 'png':
        img.png();
        break;
      case 'gif':
        img.gif();
        break;
    }
    const result = img.toFile(imgSrc+'.yan');
    //Delete old file and rename new file
    fs.unlink(imgSrc, (err) => {
      if (err) throw err;
      fs.rename(imgSrc+'.yan', imgSrc, (err) => {
        if (err) throw err;
      }
      )
    }
    )
    return result;
  }
