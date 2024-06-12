import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import img from "../../../../assets/main/dummy-img.png";

export default function MainTeam() {
  const teamContainerList = [
    {
      name: "HYEONG JUN IM",
      level: "CTO / DEVELOPER",
      carrer: ["UNESCO DIGITAL LECTUCER", "", "KOREA ABB HACKETON REWARD"],
      img: img,
    },
    {
      name: "YOUNG DAE KIM",
      level: "CTO / DEVELOPER",
      carrer: [
        "LIKE LION Blockchain School 1st",
        "LIKE LION Blockchain School Winning the Hackathon Grand Prize",
        "Completed AnlabSam Academy Data Analysis",
      ],
      img: img,
    },
    {
      name: "HYEONG JIN LEE",
      level: "CTO / DEVELOPER",
      carrer: [
        "Special award for 2021 PaaS-Ta based cloud platform development contest",
        "1st Prize for 2022 UNIST Supercomputing Camp",
        "2nd Prize for 2023 Daegu ABB Hackathon",
      ],
      img: img,
    },
    {
      name: "TAE WOO AN",
      level: "CDO / DEVELOPER",
      carrer: [
        "The Seoul National University of Science and Technology Computer engineering major",
        "2023 ICT Complex Pieda Project Main Contest",
        "2 years of completion of Jinsan Software (2017 ~ 2018)",
      ],
      img: img,
    },
    {
      name: "SEO HYUN KIM",
      level: "CDO / DEVELOPER",
      carrer: [
        "The 7th Kookmin University Algorithm Competition (Honorable Mention)",
        "Participate in the 2022 Supercomputing Youth Camp",
        "2023 ICPC Seoul Regional 2023(52th place)",
      ],
      img: img,
    },
    {
      name: "DAM IN KOO",
      level: "CDO / DEVELOPER",
      carrer: [
        "Majoring in Entrepreneurship / IT Engineering at Sookmyung Women's University.",
        "Completed the Blockchain course at Kyungil Academy.",
        "Developing the Solidity DApp section of the Ludium [Road to Global Stage] educational module",
      ],
      img: img,
    },
  ];
  return (
    <>
      <TitleDivider title="Our Team" number="03" />
      <div className="team-container">
        {teamContainerList.map((value, index) => (
          <TeamContainer
            name={value.name}
            level={value.level}
            carrer={value.carrer}
            img={value.img}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

const TeamContainer = ({ name, level, carrer, img }) => {
  return (
    <li className="team-sub-container">
      <img src={img} alt="img" />
      <p className="name">{name}</p>
      <p className="level">{level}</p>
      <ul>
        {carrer.map((value, index) => (
          <li className="carrer" key={index}>
            <p className="carrer">{value}</p>
          </li>
        ))}
      </ul>
    </li>
  );
};
