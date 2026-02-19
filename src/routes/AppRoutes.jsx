import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BoudhVihar from "../pages/BoudhVihar";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Boudhvihar" element={<BoudhVihar />} />

      {/* 404 */}
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
