import sharp from 'sharp'

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
    return img.toFile(imgSrc);
  }
