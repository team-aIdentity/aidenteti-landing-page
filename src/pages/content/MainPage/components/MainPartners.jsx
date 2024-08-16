import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import dummySponserImg from "../../../../assets/sponser/sponser-image.png";

import jigooinSponser from "../../../../assets/sponser/jigooin-sponser.png";
import ludiumSponser from "../../../../assets/sponser/ludium-sponser.png";
import thisdotSponser from "../../../../assets/sponser/thisdot-sponser.png";

export default function MainPartners() {
  const sponserList = [
    {
      img: jigooinSponser,
      isDummy: false,
      to: "https://jigooin.framer.website/",
    },
    { img: ludiumSponser, isDummy: false, to: "https://ludium.oopy.io/" },
    { img: thisdotSponser, isDummy: false, to: "http://www.thisdesign.io/" },
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
            <a href={value.to == undefined ? "" : value.to}>
              <img
                src={value.img}
                alt="sponser-img"
                active={`${value.isDummy}`}
              />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
