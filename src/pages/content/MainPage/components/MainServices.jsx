import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import img from "../../../../assets/main/dummy-img.png";
import { searchImgByTag } from "../../../../hooks/searchImgByTag";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function MainServices() {
  const [serviceComponentsList, setServiceComponentsList] = useState([
    img,
    img,
    img,
  ]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   searchImgHandle();
  // }, []);

  // const searchImgHandle = async () => {
  //   let newImgList = serviceComponentsList;
  //   newImgList[0] = await searchImgByTag("sns");
  //   newImgList[1] = await searchImgByTag("blockchain");
  //   newImgList[2] = await searchImgByTag("photo");

  //   setServiceComponentsList(newImgList);
  //   setLoading(true);
  // };

  return (
    <>
      <TitleDivider title="Services" number="02" />
      {true && (
        <ul className="service-components">
          {serviceComponentsList.map((img, index) => (
            <ServiceConponents img={img} key={index} index={index} />
          ))}
        </ul>
      )}
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
          <p className="title">{t(`MainServices.${index + 1}.title`)}</p>
          <p className="sub-title">
            {t(`MainServices.${index + 1}.description`)}
          </p>
        </div>
        <p className="learn-more">Learn more</p>
      </div>
    </li>
  );
};
