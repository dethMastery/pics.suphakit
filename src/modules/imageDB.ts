interface galleryInterface {
  id: number
  name: string
  imageLink: string
  pageSlug: string
  gallerySize: number
  thumbnailID: number
}

export const LINK_BASE = (linkInput: string, imageNo: number) => {
  return `https://ik.imagekit.io/dethzGallery/${linkInput}/dethz-${imageNo}_marked.jpeg`
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
