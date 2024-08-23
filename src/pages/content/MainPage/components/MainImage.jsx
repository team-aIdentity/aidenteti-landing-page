import { useTranslation } from "react-i18next";
import mainImg from "../../../../assets/main/aidenteti_logo.png";
import i18next from "i18next";

export default function MainImage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="left-box">
        <div className="title-box">
          <p className="title">{t(`MainImage.title`)}</p>
          <p className="sub-title">
            {t(`MainImage.subTitle`)}
            {i18next.language == "kr" ? (
              <span className="sub-title-active">
                {t(`MainImage.subTitleSpan`)}
              </span>
            ) : (
              <p className="sub-title-active">{t(`MainImage.subTitleSpan`)}</p>
            )}
          </p>
        </div>
      </div>
      <img src={mainImg} alt="dummy" />
    </>
  );
}
