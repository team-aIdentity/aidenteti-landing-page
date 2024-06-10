import dummyImg from "../../../../assets/main/dummy-img.png";
import TitleDivider from "../../../common/TitleDivider/TitleDivider";

export default function MainImage() {
  return (
    <>
      <div className="left-box">
        <div className="title-box">
          <p className="title">
            Must Change &<br />
            Not Change
          </p>
          <p className="sub-title">
            BLOCK CHAIN & AI Technology
            <br />
            IT START-UP COMPANY
          </p>
        </div>
      </div>
      <img src={dummyImg} alt="dummy" />
    </>
  );
}
