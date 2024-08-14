import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import dummySponserImg from "../../../../assets/sponser/sponser-image.png";

import jigooinSponser from "../../../../assets/sponser/jigooin-sponser.png";
import ludiumSponser from "../../../../assets/sponser/ludium-sponser.png";
import thisdotSponser from "../../../../assets/sponser/thisdot-sponser.png";

export default function MainPartners() {
  const sponserList = [
    { img: jigooinSponser, isDummy: false },
    { img: ludiumSponser, isDummy: false },
    { img: thisdotSponser, isDummy: false },
    { img: dummySponserImg, isDummy: true },
    { img: dummySponserImg, isDummy: true },
    { img: dummySponserImg, isDummy: true },
    { img: dummySponserImg, isDummy: true },
    { img: dummySponserImg, isDummy: true },
  ];

  return (
    <>
      <TitleDivider title="Our Partners" number="04" />
      <ul className="partners-container">
        {sponserList.map((value, index) => (
          <li key={index}>
            <img
              src={value.img}
              alt="sponser-img"
              active={`${value.isDummy}`}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
