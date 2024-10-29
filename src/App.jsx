import "./App.css";
import MainPage from "./Pages/MainPage/MainPage.jsx";
import GalleryPage from "./Pages/GalleryPage/GalleryPage.jsx";
import {Route, Routes, useLocation} from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/gallery" && <MainPage />}
      <Routes>
        <Route path="gallery" element={<GalleryPage />} />
      </Routes>
    </div>
  );
}

export default App;
