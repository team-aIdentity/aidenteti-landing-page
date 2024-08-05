import { useTranslation } from "react-i18next";
import dummyImg from "../../../../assets/main/dummy-img.png";

export default function MainImage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="left-box">
        <div className="title-box">
          <p className="title">{t(`MainImage.title`)}</p>
          <p className="sub-title">{t(`MainImage.subTitle`)}</p>
        </div>
      </div>
      <img src={dummyImg} alt="dummy" />
    </>
  );
}
