import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div className="font-custom">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div></div>
    </div>
  );
};

export default MainLayout;
