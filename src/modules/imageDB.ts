export interface galleryInterface {
  id: number
  name: string
  imageLink: string
  pageSlug: string
  gallerySize: number
  thumbnailID: number
}

export const LINK_BASE = (linkInput: string, imageNo: number) => {
  let imageNumber = (imageNo + 1).toString()
  
  switch (imageNumber.length) {
    case 1:
      imageNumber = '00' + imageNumber
      break

    case 2:
      imageNumber = '0' + imageNumber
      break

    default:
      break
  }

  return `https://ik.imagekit.io/dethzGallery/${linkInput}/dethz-${imageNumber}_marked.jpeg`
}

export const GALLERY: galleryInterface[] = [
  {
    id: 0,
    name: '23/24/05 | Central Sriracha',
    imageLink: '230524-CentralSriracha',
    pageSlug: '1684886400000',
    gallerySize: 44,
    thumbnailID: 0,
  },
]
