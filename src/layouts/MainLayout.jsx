import { Outlet } from "react-router-dom";
import Header from "../pages/common/Header/Header";
import Footer from "../pages/common/Footer/Footer";

import "./MainLayout.css";

export default function MainLayout() {
  return (
    <>
      <div id="header">
        <Header />
      </div>
      <div id="body">
        <Outlet />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
