import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BuddhVihar from "../pages/BuddhVihar";
import About from "../pages/About";
import Careers from "../pages/Career";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/BuddhVihar" element={<BuddhVihar />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />

      {/* 404 */}
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
