import { TAILWIND_CLASS } from '../../constants/tailwind.class'

export const NotFound = () => {
  return (
    <div className={`${TAILWIND_CLASS.ROUTER_BASE} ${TAILWIND_CLASS.MID_FLEX} !pt-0`}>
      <div>
        <h1 className={TAILWIND_CLASS.HEADING.XXXL}>ERROR 404</h1>
        <p className={TAILWIND_CLASS.HEADING.XL}>FILE NOT FOUND</p>
      </div>
    </div>
  )
}
