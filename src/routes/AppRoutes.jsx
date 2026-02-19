import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BuddhVihar from "../pages/BuddhVihar";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/BuddhVihar" element={<BuddhVihar />} />

      {/* 404 */}
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
