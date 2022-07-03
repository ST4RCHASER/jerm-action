import fs from 'fs'
import ffmpeg from 'ffmpeg'
import * as core from '@actions/core'
import Jimp from 'jimp'
export const compositeYan = async (imgSrc: string, yanSrc: string) => {
  const image = await Jimp.read(imgSrc)
  const yan = await Jimp.read(yanSrc)

  const xMargin = (image.bitmap.width * 5) / 100
  const yMargin = (image.bitmap.width * 5) / 100

  const X = image.bitmap.width - yan.bitmap.width - xMargin
  const Y = image.bitmap.height - yan.bitmap.height - yMargin

  core.info(`writing image : ${imgSrc}`)
  const img = image.composite(yan, X, Y)
  img.write(imgSrc)
  return img
}
