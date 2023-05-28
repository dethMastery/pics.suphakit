interface imageInterface {
  id: number
  link: string
}

interface Props {
  imageLink: imageInterface
}

export const ImageBox = (props: Props) => {
  return (
    <div className="min-w-[18rem] max-w-[22rem] min-h-[11rem] max-h-[15rem] bg-whitesmoke cursor-pointer p-1 duration-300 hover:opacity-60 hover:scale-95">
      <div className="w-full h-full !bg-center !bg-no-repeat !bg-cover" style={{background: `url(${props.imageLink.link})`}}></div>
    </div>
  )
}