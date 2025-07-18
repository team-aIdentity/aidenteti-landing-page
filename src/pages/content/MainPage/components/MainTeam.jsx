import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import youngdaeImg from "../../../../assets/profile/youngdae-profile.png";
import hyeongjinImg from "../../../../assets/profile/hyeongjin-profile.png";
import taewooImg from "../../../../assets/profile/taewoo-profile.png";
import seohyeonImg from "../../../../assets/profile/seohyeon-profile.png";
import hyeongjunImg from "../../../../assets/profile/hyeongjun-profile.png";
import daninImg from "../../../../assets/profile/danin-profile.png";

import { useTranslation } from "react-i18next";

export default function MainTeam() {
  const teamContainerList = [
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
    // {
    //   link: "https://wood-chevre-2ce.notion.site/Taewoo-s-Homepage-04a73cf9a548466889e19a00dd36f0ec",
    //   img: taewooImg,
    // },
    // {
    //   link: "https://www.linkedin.com/in/seo-hyeon-kim-94a2542b0",
    //   img: seohyeonImg,
    // },
    {
      link: "https://clean-van-205.notion.site/Dam-s-Portfolio-f69372b927104e11840d865c9da90c4e?pvs=4",
      img: daninImg,
    },
  ];
  return (
    <>
      <TitleDivider title="Our Team" number="03" />
      <div className="team-container">
        {teamContainerList.map((value, index) => (
          <TeamContainer
            index={index}
            img={value.img}
            key={index}
            link={value.link}
          />
        ))}
      </div>
    </>
  );
}

const TeamContainer = ({ index, img, link }) => {
  const { t } = useTranslation();
  return (
    <li className="team-sub-container">
      {/* <a href={link}> */}
      <a>
        <img src={img} alt="img" />
        <p className="name">{t(`MainTeam.${index + 1}.name`)}</p>
        <p className="level">{t(`MainTeam.${index + 1}.level`)}</p>
        <ul className="carrer-list">
          <li className="carrer">{t(`MainTeam.${index + 1}.carrer.1`)}</li>
          <li className="carrer">{t(`MainTeam.${index + 1}.carrer.2`)}</li>
          <li className="carrer">{t(`MainTeam.${index + 1}.carrer.3`)}</li>
          <li className="carrer">{t(`MainTeam.${index + 1}.carrer.4`)}</li>
        </ul>
      </a>
    </li>
  );
};
