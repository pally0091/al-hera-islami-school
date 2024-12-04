import { Outlet } from "react-router-dom";
import Navbar from "../componants/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <p>Footer</p>
    </>
  );
};

export default Main;
