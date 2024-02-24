import { Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/Index";
import NotFound from "../pages/NotFound";
import Employees from "../pages/Employees";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
