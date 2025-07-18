import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Footer.css";

// import youtubeLogo from "../../../assets/footer/youtube-logo.png";
// import instagramLogo from "../../../assets/footer/instagram-logo.png";
import notionLogo from "../../../assets/footer/notion-logo.png";
import telegramLogo from "../../../assets/footer/telegram-logo.webp";
import xLogo from "../../../assets/footer/x-logo.png";
import logo from "../../../assets/logo-type2.png";

import krImage from "../../../assets/language/kr-image.png";
import enImage from "../../../assets/language/us-image.png";

import i18n from "../../../lang/i18n";
import { useState } from "react";

export default function Footer() {
  const { t } = useTranslation();

  const informationList = [
    "Aidenteti Company",
    "Business Lisence : 554-07-02595",
    "Email : dulgi8655@gmail.com",
    "Call : 82+ 10-2785-8133",
  ];

  const linkList = [
    {
      to: "https://www.notion.so/kingyoungdae/a-dent-ti-Overview-KR-20942b28236580adb8e1e69c3338c978",
      img: notionLogo,
    },
    { to: "https://t.me/aidenteticrew_kr/142", img: telegramLogo },
    { to: "https://x.com/Aidenteti_", img: xLogo },
  ];

  const [isModalOn, setIsModalOn] = useState(false);

  const onModal = () => {
    setIsModalOn(!isModalOn);
  };

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setIsModalOn(false);
  };

  return (
    <div id="footer-components">
      <div className="contact-container">
        <div className="wrapper">
          <p className="title">{t(`Footer.title`)}</p>
          <p className="sub-title">{t(`Footer.subTitle`)} </p>
        </div>

        <a href="mailto:dulgi8655@gmail.com" target="_blank">
          CONTACT
        </a>
      </div>
      <div className="footer-container">
        <div className="information">
          <img src={logo} alt="logo" />
          <p className="moto">Must Change & Not Change</p>
          <ul>
            {informationList.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
        <div className="connect">
          <p className="title">Connect with us</p>
          <div className="link">
            {linkList.map((value, index) => (
              <Link to={value.to} key={index}>
                <img src={value.img} alt="logo" />
              </Link>
            ))}
          </div>
          <div className="lang-container">
            <button onClick={() => onModal()} className="lang-button">
              {i18n.language == "kr" && "Korean"}
              {i18n.language == "en" && "English"}
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
    </div>
  );
}
