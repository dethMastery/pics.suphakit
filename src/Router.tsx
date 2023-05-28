import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { WEBSITE_PATH } from "./constants/route";

import { Home } from "./pages/Home";
import { About } from "./pages/About"
import { GalleryListing } from "./pages/Gallery/Listing";
import { NotFound } from "./pages/Errors/NotFound";

import { GALLERY } from "./modules/imageDB";
import { GalleryPreview } from "./pages/Gallery/Previewing";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={WEBSITE_PATH.HOME} element={<Home />} />
        <Route path={WEBSITE_PATH.GALLERY} element={<GalleryListing />} />
        <Route path={WEBSITE_PATH.ABOUT} element={<About />} />

        {GALLERY.map((route) => {
          return <Route path={`${WEBSITE_PATH.GALLERY}/${route.pageSlug}`} element={<GalleryPreview itemData={route} key={route.id} />} />
        })}

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};