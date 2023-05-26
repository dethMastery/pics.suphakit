import { TAILWIND_CLASS } from "../constants/tailwind.class"

export const Footer = () => {
  return (
    <div className="w-full text-center py-4 bg-gradient-to-t from-[black] from-0% to-[transparent] to-120%">
      <p className="pb-1">
        made w/ 🤍 <a href="https://suphakit.net" className={TAILWIND_CLASS.LINK} target="_blank">Suphakit P.</a>
      </p>
      <p className="pt-1">
        &copy; 2023 <a href="https://suphakit.net" className={TAILWIND_CLASS.LINK} target="_blank">Suphakit P.</a> All Right Reserved.
      </p>
    </div>
  )
}