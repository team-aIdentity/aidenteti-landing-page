import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import img from "../../../../assets/main/dummy-img.png";
import { useTranslation } from "react-i18next";

export default function MainTeam() {
  const teamContainerList = [img, img, img, img, img, img];
  return (
    <>
      <TitleDivider title="Our Team" number="03" />
      <div className="team-container">
        {teamContainerList.map((value, index) => (
          <TeamContainer index={index} img={value} key={index} />
        ))}
      </div>
    </>
  );
}

const TeamContainer = ({ index, img }) => {
  const { t } = useTranslation();
  return (
    <li className="team-sub-container">
      <img src={img} alt="img" />
      <p className="name">{t(`MainTeam.${index + 1}.name`)}</p>
      <p className="level">{t(`MainTeam.${index + 1}.level`)}</p>
      <ul>
        <li className="carrer">
          <p className="carrer">
            <pre>{t(`MainTeam.${index + 1}.carrer.1`)}</pre>
          </p>
        </li>
        <li className="carrer">
          <p className="carrer">
            <pre>{t(`MainTeam.${index + 1}.carrer.2`)}</pre>
          </p>
        </li>
        <li className="carrer">
          <p className="carrer">
            <pre>{t(`MainTeam.${index + 1}.carrer.3`)}</pre>
          </p>
        </li>
      </ul>
    </li>
  );
};
