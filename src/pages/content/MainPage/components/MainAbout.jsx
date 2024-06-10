import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import checkImg from "../../../../assets/about/check-img.png";

export default function MainAbout() {
  const descriptionList = [
    "Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.",
    "Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.",
    "Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.",
    "Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.",
  ];

  const onContact = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <TitleDivider title="Why our clients trust us" number="01" />
      <p className="title">
        Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.
        Suspendisse lobortis vitae quis vehicula
        <br />
        pellentesque sit id. Urna posuere consequat velit vulputate faucibus
        pretium arcu accumsan sit. Vel venenatis sapien.
      </p>
      <div className="container">
        <div className="img-box"></div>
        <div className="description-box">
          <ul>
            {descriptionList.map((value, index) => (
              <li key={index}>
                <img src={checkImg} alt="check-img" />
                <p className="description">{value}</p>
              </li>
            ))}
          </ul>
          <button className="contact" onClick={onContact}>
            contact
          </button>
        </div>
      </div>
    </>
  );
}
