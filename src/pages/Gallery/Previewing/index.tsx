import { TAILWIND_CLASS } from '../../../constants/tailwind.class'
import { LINK_BASE, galleryInterface } from '../../../modules/imageDB'
import { Helmet } from 'react-helmet'
import { ImageBox } from '../../../components/imageBox'

interface Props {
  itemData: galleryInterface
}

interface imageInterface {
  id: number
  link: string
}

export const GalleryPreview = (props: Props) => {
  const dataLink: imageInterface[] = []

  for (let i = 0; i < props.itemData.id; i++) {
    const data: imageInterface = {
      id: i,
      link: LINK_BASE(props.itemData.imageLink, i)
    }

    console.log(data);

    dataLink.push(data)
  }

  console.log(dataLink);

  return (
    <>
      <Helmet>
        <title>{props.itemData.name} | dethzGallery</title>
      </Helmet>
      <div className={TAILWIND_CLASS.ROUTER_BASE}>
        <div className="w-full h-full mx-auto md:w-[80%]">
          <h1 className={TAILWIND_CLASS.HEADING.XXL}>{props.itemData.name}</h1>
          <div className="flex flex-row flex-wrap justify-center text-center gap-4">
            {/* {image?.image.map((link: imageInterface) => {
              return <ImageBox imageLink={link} />
            })} */}
            {dataLink.map((link) => {
              return <ImageBox imageLink={link} key={link.id} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}
