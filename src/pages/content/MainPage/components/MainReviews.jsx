import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import dummyProfile from "../../../../assets/profile/profile.png";
import minusImg from "../../../../assets/faq/minus.png";
import plusImg from "../../../../assets/faq/plus.png";
import dummyImg from "../../../../assets/main/dummy-img.png";
import { useState } from "react";

export default function MainReviews() {
  const faqArr = ["false", "false", "false"];
  const [focusFaq, setFocusFaq] = useState(["true", "false", "false"]);

  const portpolioList = [
    {
      link: "https://celestial-wizard-cf1.notion.site/Design-Portfolio-2df26a3c46154f3481d1a07c5d6a9917?pvs=4",
      img: dummyProfile,
      name: "HYEONG JUN IM",
      level: "CEO / DESIGNER",
    },
    {
      link: "https://www.notion.so/yongdangs/YOUNGDAE-KIM-5534bfe1dc9b41c186ebf9f42cf15f21?pvs=4",
      img: dummyProfile,
      name: "YOUNG DAE KIM",
      level: "COO / Product Manger",
    },
    {
      link: "https://www.notion.so/642faa99395f4c36996c10de9b124894?pvs=4",
      img: dummyProfile,
      name: "HYEONG JIN LEE",
      level: "CTO / DEVELOPER",
    },
    {
      link: "https://wood-chevre-2ce.notion.site/Taewoo-s-Homepage-04a73cf9a548466889e19a00dd36f0ec",
      img: dummyProfile,
      name: "TAE WOO AN",
      level: "CDO / DEVELOPER",
    },
    {
      link: "https://www.linkedin.com/in/seo-hyeon-kim-94a2542b0",
      img: dummyProfile,
      name: "SEO HYEON KIM",
      level: "CDO / DEVELOPER",
    },
    {
      link: "https://clean-van-205.notion.site/Dam-s-Portfolio-f69372b927104e11840d865c9da90c4e?pvs=4",
      img: dummyProfile,
      name: "DAM IN KOO",
      level: "CDO / DEVELOPER",
    },
  ];

  const faqList = [
    {
      que: "아이덴티티는 어떤 회사인가요?",
      ans: "웹사이트 , 어플리케이션 , AI , BlockChain 등 각종 개발에 대한 에이전시 및 포토부스 판매, web3 대중화를 위해 다양한 마케팅 플랫폼을 운영하고 있습니다.",
    },
    {
      que: "개발 외주 관련 이용료는 어떻게 되나요?",
      ans: "클라이언트 요구사항에 최적화하여 솔직하고 투명한 비용으로 원하시는 결과물을 받을 수 있도록 상담 후 측정됩니다. ",
    },
    {
      que: "포토부스?",
      ans: "답변 예정입니다.",
    },
  ];

  const setFocusHandle = (index) => {
    let newFaq = faqArr;

    if (focusFaq[index] == "false") newFaq[index] = "true";

    setFocusFaq(newFaq);
  };

  return (
    <>
      <TitleDivider title="Our Portpolio" number="05" />
      <div className="portpolio-container">
        <ul className="wrapper">
          {portpolioList.map((value, index) => (
            <li key={index}>
              <a href={value.link}>{value.link}</a>
              <div className="profile-container">
                <img src={value.img} alt="profile" />
                <div>
                  <p className="name">{value.name}</p>
                  <p className="level">{value.level}</p>
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
                  <p className="que">Q. {value.que}</p>
                  <img
                    src={focusFaq[index] == "true" ? minusImg : plusImg}
                    alt="plusnminus-image"
                  />
                </div>
                <p className="ans">
                  A. {focusFaq[index] == "true" ? value.ans : "더보기"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
