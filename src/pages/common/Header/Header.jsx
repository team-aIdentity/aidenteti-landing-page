import { useContext, useState } from "react";
import logo from "../../../assets/logo.png";
import MainContext from "../../../components/context/MainContext";
import "./Header.css";

import krImage from "../../../assets/language/kr-image.png";
import enImage from "../../../assets/language/us-image.png";

import i18n from "../../../lang/i18n";

export default function Header() {
  const refList = ["About", "Services", "Team", "Partners", "Reviews"];
  const handleScrollView = useContext(MainContext).handleScrollView;
  const [isModalOn, setIsModalOn] = useState(false);

  const onModal = () => {
    setIsModalOn(true);
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
          <button onClick={() => onModal()}>
            <img src={i18n.language == "kr" ? krImage : enImage} />
          </button>
          {isModalOn && (
            <div className="modal">
              <button onClick={() => changeLang("kr")}>
                <img src={krImage} />
              </button>
              <button onClick={() => changeLang("en")}>
                <img src={enImage} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
