import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import img from "../../../../assets/main/dummy-img.png";

export default function MainTeam() {
  const teamContainerList = [
    {
      name: "Gil Dong Hong",
      level: "CTO / DEVELOPER",
      carrer: ["ETH SEOUL REWARD", "ETH SEOUL REWARD", "ETH SEOUL REWARD"],
      img: img,
    },
    {
      name: "Gil Dong Hong",
      level: "CTO / DEVELOPER",
      carrer: ["ETH SEOUL REWARD", "ETH SEOUL REWARD", "ETH SEOUL REWARD"],
      img: img,
    },
    {
      name: "Gil Dong Hong",
      level: "CTO / DEVELOPER",
      carrer: ["ETH SEOUL REWARD", "ETH SEOUL REWARD", "ETH SEOUL REWARD"],
      img: img,
    },
    {
      name: "Gil Dong Hong",
      level: "CTO / DEVELOPER",
      carrer: ["ETH SEOUL REWARD", "ETH SEOUL REWARD", "ETH SEOUL REWARD"],
      img: img,
    },
    {
      name: "Gil Dong Hong",
      level: "CTO / DEVELOPER",
      carrer: ["ETH SEOUL REWARD", "ETH SEOUL REWARD", "ETH SEOUL REWARD"],
      img: img,
    },
    {
      name: "Gil Dong Hong",
      level: "CTO / DEVELOPER",
      carrer: ["ETH SEOUL REWARD", "ETH SEOUL REWARD", "ETH SEOUL REWARD"],
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
    <li>
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
