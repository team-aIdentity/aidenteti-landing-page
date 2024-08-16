import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import checkImg from "../../../../assets/about/check-img.png";
import { useTranslation } from "react-i18next";

import mainImage1 from "../../../../assets/main/main-image1.png";
import mainImage2 from "../../../../assets/main/main-image2.png";
import mainImage3 from "../../../../assets/main/main-image3.png";

export default function MainAbout() {
  const { t } = useTranslation();

  return (
    <>
      <TitleDivider title="About Aidenteti ?" number="01" />
      <p className="title">
        <span>{t(`MainAbout.titleSpan`)}</span>
        {t(`MainAbout.title`)}
      </p>
      <div className="container">
        <div className="img-box">
          <div className="img-box-large">
            <img src={mainImage1} alt="img" />
            <img src={mainImage2} alt="img" />
          </div>
          <div className="img-box-small">
            <img src={mainImage3} alt="img" />
          </div>
        </div>
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
            href="mailto:dulgi8655@gmail.com" //https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=dulgi8655@gmail.com
            target="_blank"
          >
            CONTACT
          </a>
        </div>
      </div>
    </>
  );
}
