import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import checkImg from "../../../../assets/about/check-img.png";
import { useTranslation } from "react-i18next";

export default function MainAbout() {
  const { t } = useTranslation();

  return (
    <>
      <TitleDivider title="About Aidenteti ?" number="01" />
      <p className="title">
        <pre>{t(`MainAbout.title`)}</pre>
      </p>
      <div className="container">
        <div className="img-box"></div>
        <div className="description-box">
          <ul>
            <li>
              <img src={checkImg} alt="check-img" />
              <p className="description">{t(`MainAbout.description.1`)}</p>
            </li>
            <li>
              <img src={checkImg} alt="check-img" />
              <p className="description">{t(`MainAbout.description.2`)}</p>
            </li>
            <li>
              <img src={checkImg} alt="check-img" />
              <p className="description">{t(`MainAbout.description.3`)}</p>
            </li>
            <li>
              <img src={checkImg} alt="check-img" />
              <p className="description">{t(`MainAbout.description.4`)}</p>
            </li>
          </ul>
          <a
            href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=dulgi8655@gmail.com"
            target="_blank"
          >
            CONTACT
          </a>
        </div>
      </div>
    </>
  );
}
