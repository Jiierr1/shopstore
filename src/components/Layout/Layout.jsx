import { Outlet } from "react-router-dom";
import Navbar from "../nav/Navbar";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
