import { Outlet } from "react-router-dom";
import Header from "../pages/common/Header/Header";
import Footer from "../pages/common/Footer/Footer";

import "./MainLayout.css";
import { useEffect, useState } from "react";

export default function MainLayout() {
  const [scroll, setScroll] = useState("false");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200) setScroll("true");
    else setScroll("false");
  };

  return (
    <>
      <div id="header" active={scroll}>
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
