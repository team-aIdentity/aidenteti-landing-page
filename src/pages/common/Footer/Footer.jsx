import "./Footer.css";
import youtubeLogo from "../../../assets/footer/youtube-logo.png";
import instagramLogo from "../../../assets/footer/instagram-logo.png";
import xLogo from "../../../assets/footer/x-logo.png";
import logo from "../../../assets/logo-type2.png";
import { Link } from "react-router-dom";

import krImage from "../../../assets/language/kr-image.png";
import enImage from "../../../assets/language/us-image.png";

import i18n from "../../../lang/i18n";
import { useState } from "react";

export default function Footer() {
  const informationList = [
    "Aidenteti Company",
    "Business Lisence : 554-07-02595",
    "Email : dulgi8655@aidenteti.com",
    "Call : 82+ 10-3024-8133",
  ];

  const linkList = [
    { to: "https://www.youtube.com/@Aidenteti", img: youtubeLogo },
    { to: "https://www.instagram.com/aidenteti_official/", img: instagramLogo },
    { to: "/", img: xLogo },
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
          <p className="title">Need more information?</p>
          <p className="sub-title">
            Write your concern to us and our specialist will get back to you.
          </p>
        </div>

        <a
          href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=dulgi8655@gmail.com"
          target="_blank"
        >
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
