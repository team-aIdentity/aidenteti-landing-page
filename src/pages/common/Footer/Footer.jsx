import "./Footer.css";
import youtubeLogo from "../../../assets/footer/youtube-logo.png";
import instagramLogo from "../../../assets/footer/instagram-logo.png";
import xLogo from "../../../assets/footer/x-logo.png";
import logo from "../../../assets/logo-type2.png";
import { Link } from "react-router-dom";
// import { useSendMail } from "../../../hooks/useSendMail";

export default function Footer() {
  const onContact = (e) => {
    e.preventDefault();
    useSendMail("atw13730@gamil.com", "Welcome to our shop!", "<p>hi!</p>");
  };

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

  //850325094825-sg4pqi7aq6bfcq0qrnrsl96gugabkuk8.apps.googleusercontent.com

  return (
    <div id="footer-components">
      <div className="contact-container">
        <div className="wrapper">
          <p className="title">Need more information?</p>
          <p className="sub-title">
            Write your concern to us and our specialist will get back to you.
          </p>
        </div>
        <button onClick={(e) => onContact(e)}>CONTACT</button>
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
        </div>
      </div>
    </div>
  );
}
