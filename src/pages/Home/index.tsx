import { Helmet } from 'react-helmet'

import { TAILWIND_CLASS } from '../../constants/tailwind.class'
import './index.css'

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | dethzGallery</title>
      </Helmet>
      <div
        className={`${TAILWIND_CLASS.ROUTER_BASE} !pt-0 !bg-center !bg-no-repeat !bg-cover body-bg`}
      >
        <div
          className={`mx-auto w-full min-h-screen ${TAILWIND_CLASS.MID_FLEX}`}
        >
          <h1 className={TAILWIND_CLASS.HEADING.XXXL}>
            Hiya! This is{' '}
            <a href="/" className={TAILWIND_CLASS.LINK}>
              dethzGallery
            </a>
          </h1>

          <p className={TAILWIND_CLASS.HEADING.XL}>
            Please feel free and enjoy my image
          </p>
        </div>
      </div>
    </>
  )
}
