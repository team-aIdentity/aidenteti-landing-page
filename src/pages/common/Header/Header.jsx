import { useContext, useState } from "react";
import logo from "../../../assets/logo.png";
import MainContext from "../../../components/context/MainContext";
import "./Header.css";

import krImage from "../../../assets/language/kr-image.png";
import enImage from "../../../assets/language/us-image.png";

import globeImage from "../../../assets/language/globe.png";

import i18n from "../../../lang/i18n";

export default function Header() {
  const refList = ["About", "Services", "Team", "Partners", "Reviews"];
  const handleScrollView = useContext(MainContext).handleScrollView;
  const [isModalOn, setIsModalOn] = useState(false);

  const onModal = () => {
    setIsModalOn(!isModalOn);
  };

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setIsModalOn(false);
  };

  return (
    <div id="header-components">
      <button onClick={() => handleScrollView(0)} className="img-box">
        <img src={logo} alt="logo" />
      </button>
      <div className="ref-box">
        {refList.map((title, index) => (
          <button key={index} onClick={() => handleScrollView(index + 1)}>
            {title}
          </button>
        ))}
        <div className="lang-container">
          <button onClick={() => onModal()} className="lang-button">
            <img src={globeImage} alt="logo" />
          </button>
          {isModalOn && (
            <div className="modal">
              <button onClick={() => changeLang("kr")}>
                <img src={krImage} alt="logo" />
                <p>Korean</p>
              </button>
              <button onClick={() => changeLang("en")}>
                <img src={enImage} alt="logo" />
                <p>English</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
