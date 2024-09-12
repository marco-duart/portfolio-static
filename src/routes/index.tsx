import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BaseLayout from "../components/base-layout";
import { Home, Resume } from "../pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route element={<BaseLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/curriculum" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
