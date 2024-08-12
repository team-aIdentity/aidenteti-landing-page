import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useGetImage } from "../hooks/useGetImage";

export default function MainServices() {
  const [imageList, setImageList] = useState(["", "", ""]);

  useEffect(() => {
    const getImageHandle = async () => {
      setImageList(useGetImage());
    };

    getImageHandle();
  }, []);
  return (
    <>
      <TitleDivider title="Services" number="02" />
      {true && (
        <ul className="service-components">
          {imageList.map((img, index) => (
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
      <div className="image">
        <img src={img} alt="img" />
      </div>
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
