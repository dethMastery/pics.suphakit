import { Helmet } from "react-helmet"

import { TAILWIND_CLASS } from "../../../constants/tailwind.class"
import { GalleryCard } from "../../../components/galleryCard"
import { GALLERY, LINK_BASE } from "../../../modules/imageDB"

export const GalleryListing = () => {
  return (
    <>
    <Helmet>
      <title>
        Gallery | dethzGallery
      </title>
    </Helmet>
      <div className={TAILWIND_CLASS.ROUTER_BASE}>
        <div className={`${TAILWIND_CLASS.CONTAINER} h-auto flex flex-row flex-wrap gap-4 justify-center`}>
          {GALLERY.map((album) => {
            const data = {
              name: album.name.split(' | ')[1],
              date: album.name.split(' | ')[0]
            }
            
            return (
              <GalleryCard thumbnailImage={LINK_BASE(album.imageLink, album.thumbnailID)} link={`/gallery/${album.pageSlug}`} data={data} key={album.id} />
            )
          })}
        </div>
      </div>
    </>
  )
}