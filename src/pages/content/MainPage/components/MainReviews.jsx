import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import minusImg from "../../../../assets/faq/minus.png";
import plusImg from "../../../../assets/faq/plus.png";
import linkImg from "../../../../assets/profile/link.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import hyeongjunImg from "../../../../assets/profile/hyeongjun-profile.png";
import youngdaeImg from "../../../../assets/profile/youngdae-profile.png";
import hyeongjinImg from "../../../../assets/profile/hyeongjin-profile.png";
import taewooImg from "../../../../assets/profile/taewoo-profile.png";
import seohyeonImg from "../../../../assets/profile/seohyeon-profile.png";
import daninImg from "../../../../assets/profile/danin-profile.png";

import faqImg from "../../../../assets/faq/faq-image.png";

export default function MainReviews() {
  const faqArr = ["false", "false", "false"];
  const [focusFaq, setFocusFaq] = useState(["true", "false", "false"]);

  const portpolioList = [
    {
      link: "https://celestial-wizard-cf1.notion.site/Design-Portfolio-2df26a3c46154f3481d1a07c5d6a9917?pvs=4",
      img: hyeongjunImg,
    },
    {
      link: "https://www.notion.so/yongdangs/YOUNGDAE-KIM-5534bfe1dc9b41c186ebf9f42cf15f21?pvs=4",
      img: youngdaeImg,
    },
    {
      link: "https://boggy-kilogram-830.notion.site/642faa99395f4c36996c10de9b124894",
      img: hyeongjinImg,
    },
    {
      link: "https://clean-van-205.notion.site/Dam-s-Portfolio-f69372b927104e11840d865c9da90c4e?pvs=4",
      img: daninImg,
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
              <a className="profile-container" href={value.link}>
                <p className="title">
                  Link to Portfolio <img src={linkImg} alt="logo" />
                </p>
                <div className="wrapper-p">
                  <div className="profile">
                    <img src={value.img} alt="profile" />
                  </div>
                  <div>
                    <p className="name">{t(`MainTeam.${index + 1}.name`)}</p>
                    <p className="level">{t(`MainTeam.${index + 1}.level`)}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="faq-container">
        <div className="image">
          <img src={faqImg} alt="faq-image" className="faq-image" />
        </div>
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
