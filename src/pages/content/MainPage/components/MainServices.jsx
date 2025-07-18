import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useGetImage } from "../hooks/useGetImage";

import serviceImage1 from "../../../../assets/service/service-image-1.jpeg";
import serviceImage2 from "../../../../assets/service/service-image-2.jpg";
import serviceImage3 from "../../../../assets/service/service-image-3.jpeg";

export default function MainServices() {
  // const [imageList, setImageList] = useState(["", "", ""]);

  // useEffect(() => {
  //   const getImageHandle = async () => {
  //     setImageList(useGetImage());
  //   };

  //   getImageHandle();
  // }, []);

  const imageList = [serviceImage1, serviceImage2, serviceImage3];

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
        {/* <p className="learn-more">Learn more</p> */}
      </div>
    </li>
  );
};
