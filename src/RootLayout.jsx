import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const RootLayout = () => (
  <div className="root-layout">
    <Navbar />
    <Outlet />
  </div>
);

export default RootLayout;
