import fs from 'fs';
import ffmpeg from 'ffmpeg';
import Jimp from 'jimp';
export const compositeYan = async (imgSrc: string, yanSrc: string) => {
  const image = await Jimp.read(imgSrc);
  const yan = await Jimp.read(yanSrc);
  
  const xMargin = (image.bitmap.width * 5) / 100;
  const yMargin = (image.bitmap.width * 5) / 100;

  const X = image.bitmap.width - yan.bitmap.width - xMargin;
  const Y = image.bitmap.height - yan.bitmap.height - yMargin;

  const img =  await image.composite(yan, X, Y);
  await img.write(imgSrc);
  return img;
}
