import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import img from "../../../../assets/main/dummy-img.png";
import { useTranslation } from "react-i18next";

export default function MainServices() {
  const serviceConponentsList = [img, img, img];
  return (
    <>
      <TitleDivider title="Services" number="02" />
      <ul className="service-components">
        {serviceConponentsList.map((img, index) => (
          <ServiceConponents img={img} key={index} index={index} />
        ))}
      </ul>
    </>
  );
}

const ServiceConponents = ({ index, img }) => {
  const { t } = useTranslation();

  return (
    <li>
      <img src={img} alt="img" />
      <div className="components">
        <div className="title-box">
          <p className="title">
            <pre>{t(`MainServices.${index + 1}.title`)}</pre>
          </p>
          <p className="sub-title">
            <pre>{t(`MainServices.${index + 1}.description`)}</pre>
          </p>
        </div>
        <p className="learn-more">Learn more</p>
      </div>
    </li>
  );
};
