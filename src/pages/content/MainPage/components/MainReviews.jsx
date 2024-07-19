import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import dummyProfile from "../../../../assets/profile/profile.png";
import minusImg from "../../../../assets/faq/minus.png";
import plusImg from "../../../../assets/faq/plus.png";
import dummyImg from "../../../../assets/main/dummy-img.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function MainReviews() {
  const faqArr = ["false", "false", "false"];
  const [focusFaq, setFocusFaq] = useState(["true", "false", "false"]);

  const portpolioList = [
    {
      link: "https://celestial-wizard-cf1.notion.site/Design-Portfolio-2df26a3c46154f3481d1a07c5d6a9917?pvs=4",
      img: dummyProfile,
    },
    {
      link: "https://www.notion.so/yongdangs/YOUNGDAE-KIM-5534bfe1dc9b41c186ebf9f42cf15f21?pvs=4",
      img: dummyProfile,
    },
    {
      link: "https://www.notion.so/642faa99395f4c36996c10de9b124894?pvs=4",
      img: dummyProfile,
    },
    {
      link: "https://wood-chevre-2ce.notion.site/Taewoo-s-Homepage-04a73cf9a548466889e19a00dd36f0ec",
      img: dummyProfile,
    },
    {
      link: "https://www.linkedin.com/in/seo-hyeon-kim-94a2542b0",
      img: dummyProfile,
    },
    {
      link: "https://clean-van-205.notion.site/Dam-s-Portfolio-f69372b927104e11840d865c9da90c4e?pvs=4",
      img: dummyProfile,
    },
  ];

  const faqList = [{}, {}, {}];

  const { t } = useTranslation();

  const setFocusHandle = (index) => {
    let newFaq = faqArr;

    if (focusFaq[index] == "false") newFaq[index] = "true";

    setFocusFaq(newFaq);
  };

  return (
    <>
      <TitleDivider title="Our Portfolio" number="05" />
      <div className="portpolio-container">
        <ul className="wrapper">
          {portpolioList.map((value, index) => (
            <li key={index}>
              <a href={value.link}>{value.link}</a>
              <div className="profile-container">
                <img src={value.img} alt="profile" />
                <div>
                  <p className="name">{t(`MainTeam.${index + 1}.name`)}</p>
                  <p className="level">{t(`MainTeam.${index + 1}.level`)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="faq-container">
        <img src={dummyImg} alt="faq-image" className="faq-image" />
        <div>
          <p className="title">Frequently asked questions</p>
          <ul className="wrapper">
            {faqList.map((value, index) => (
              <li
                onClick={() => setFocusHandle(index)}
                active={focusFaq[index]}
                key={index}
              >
                <div className="que-container">
                  <p className="que">Q. {t(`MainReviews.${index + 1}.que`)}</p>
                  <img
                    src={focusFaq[index] == "true" ? minusImg : plusImg}
                    alt="plusnminus-image"
                  />
                </div>
                <p className="ans">
                  A.{" "}
                  {focusFaq[index] == "true"
                    ? t(`MainReviews.${index + 1}.ans`)
                    : t(`MainReviews.more`)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
