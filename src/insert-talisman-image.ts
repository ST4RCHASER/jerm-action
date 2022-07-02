import sharp from 'sharp'

export const compositeYan = async (
  imgSrc: string,
  yanSrc: string,
  outputFileName = 'yun'
): Promise<sharp.OutputInfo> =>
  sharp(imgSrc)
    .resize(1024)
    .composite([
      {
        input: yanSrc,
        gravity: 'southeast'
      }
    ])
    .jpeg()
    .toFile(`${outputFileName}.jpg`)
