import { Outlet } from "react-router-dom";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
