const NAVStyle = {
  BUTTON: 'w-auto inline-block p-4 duration-300 hover:opacity-60 hover:bg-pastel-black'
}

export const NavBar = () => {
  return (
    <div className="w-full flex flex-row bg-[#3e3e3e] fixed top-0">
      <div className="w-full justify-start text-left">
        <a href="/" className={NAVStyle.BUTTON}>dethzGallery</a>
      </div>
      <div className="w-full justify-end text-right">
        <a href="/about" className={NAVStyle.BUTTON}>About</a>
      </div>
    </div>
  )
}