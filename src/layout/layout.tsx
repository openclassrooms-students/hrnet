import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col justify-between items-center">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
