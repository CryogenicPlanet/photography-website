import * as fs from 'fs'
import path from 'path'
import { getPlaiceholder } from 'plaiceholder'

export const getAllImages = async () => {
  const dirRelativeToPublicFolder = 'images'

  const dir = path.resolve('./public', dirRelativeToPublicFolder)

  const filenames = fs.readdirSync(dir)

  const images = filenames.map((name) =>
    path.join('/', dirRelativeToPublicFolder, name)
  )

  const imageData = await Promise.all(
    images.map((image) => getPlaiceholder(image))
  )

  imageData.sort((a, b) => {
    if (a.img.height === b.img.height) {
      return a.img.width - b.img.width
    }
    return b.img.height - a.img.height
  })

  return imageData
}
