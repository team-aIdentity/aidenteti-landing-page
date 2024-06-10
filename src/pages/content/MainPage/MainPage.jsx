import { useContext } from "react";
import MainAbout from "./components/MainAbout";
import MainImage from "./components/MainImage";
import MainPartners from "./components/MainPartners";
import MainReviews from "./components/MainReviews";
import MainServices from "./components/MainServices";
import MainTeam from "./components/MainTeam";

import "./MainPage.css";
import MainContext from "../../../components/context/MainContext";

export default function MainPage() {
  const context = useContext(MainContext);

  const ElementList = [
    { element: <MainImage />, id: "main-image" },
    { element: <MainAbout />, id: "main-about" },
    { element: <MainServices />, id: "main-services" },
    { element: <MainTeam />, id: "main-team" },
    { element: <MainPartners />, id: "main-partners" },
    { element: <MainReviews />, id: "main-reviews" },
  ];

  return (
    <div id="main-page">
      {ElementList.map((value, index) => (
        <div
          ref={(e) => (context.scrollRef.current[index] = e)}
          key={index}
          id={value.id}
        >
          {value.element}
        </div>
      ))}
    </div>
  );
}
