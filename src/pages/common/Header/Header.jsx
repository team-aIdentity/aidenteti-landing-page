import { useContext } from "react";
import logo from "../../../assets/logo.png";
import MainContext from "../../../components/context/MainContext";
import "./Header.css";

export default function Header() {
  const refList = ["About", "Services", "Team", "Partners"];
  const handleScrollView = useContext(MainContext).handleScrollView;

  return (
    <div id="header-components">
      <button onClick={() => handleScrollView(0)} className="img-box">
        <img src={logo} alt="logo" />
      </button>
      <div className="ref-box">
        {refList.map((title, index) => (
          <div key={index}>
            <button onClick={() => handleScrollView(index + 1)}>{title}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
