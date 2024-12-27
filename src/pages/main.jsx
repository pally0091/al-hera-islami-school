import { Outlet } from "react-router-dom";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
