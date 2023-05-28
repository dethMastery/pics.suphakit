import { TAILWIND_CLASS } from "../../../constants/tailwind.class"
import { galleryInterface } from "../../../modules/imageDB"

interface Props {
  itemData: galleryInterface
}

export const GalleryPreview = (props: Props) => {
  return (
    <div className={TAILWIND_CLASS.ROUTER_BASE}>
      {props.itemData.imageLink}
    </div>
  )
}