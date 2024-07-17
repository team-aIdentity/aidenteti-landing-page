import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import dummySponserImg from "../../../../assets/sponser/sponser-image.png";

export default function MainPartners() {
  const sponserList = [
    dummySponserImg,
    dummySponserImg,
    dummySponserImg,
    dummySponserImg,
    dummySponserImg,
    dummySponserImg,
    dummySponserImg,
    dummySponserImg,
    dummySponserImg,
    dummySponserImg,
    dummySponserImg,
    dummySponserImg,
  ];

  return (
    <>
      <TitleDivider title="Our Partners" number="04" />
      <ul className="partners-container">
        {sponserList.map((value, index) => (
          <li key={index}>
            <img src={value} alt="sponser-img" />
          </li>
        ))}
      </ul>
    </>
  );
}
