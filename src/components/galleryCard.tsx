import { TAILWIND_CLASS } from "../constants/tailwind.class"

interface Props {
  thumbnailImage: string
  link: string
  data: {
    name: string
    date: string
  }
}

export const GalleryCard = (props: Props) => {
  return (
    <a className={`${TAILWIND_CLASS.HOVER_SCALE} min-w-[18rem] max-w-[22rem] w-full h-auto bg-whitesmoke inline-block`} style={{cursor: 'pointer'}} href={props.link}>
      <div className="!bg-center !bg-cover !bg-no-repeat w-full min-h-[13rem]" style={{background: `url(${props.thumbnailImage})`}}></div>
      <div className="w-full p-2">
        <h1 className={`${TAILWIND_CLASS.HEADING.XXL} text-pastel-black  !py-1`}>
          {props.data.name}
        </h1>
        <p className={`${TAILWIND_CLASS.HEADING.L} text-[#7d7f7f] !py-1`}>
          Image Taken date: {props.data.date}
        </p>
      </div>
    </a>
  )
}