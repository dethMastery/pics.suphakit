import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { WEBSITE_PATH } from "./constants/route";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/Errors/NotFound";
import { GalleryListing } from "./pages/Gallery/Listing";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={WEBSITE_PATH.HOME} element={<Home />} />

        <Route path={WEBSITE_PATH.GALLERY} element={<GalleryListing />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};