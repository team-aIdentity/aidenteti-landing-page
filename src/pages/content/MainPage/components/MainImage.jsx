import { useTranslation } from "react-i18next";
import dummyImg from "../../../../assets/main/dummy-img.png";

export default function MainImage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="left-box">
        <div className="title-box">
          <p className="title">
            <pre>{t(`MainImage.title`)}</pre>
          </p>
          <p className="sub-title">
            <pre>{t(`MainImage.subTitle`)}</pre>
          </p>
        </div>
      </div>
      <img src={dummyImg} alt="dummy" />
    </>
  );
}
