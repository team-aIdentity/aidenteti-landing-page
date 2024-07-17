import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import checkImg from "../../../../assets/about/check-img.png";

export default function MainAbout() {
  const descriptionList = [
    "Reach new heights quickly with teamwork forged through competitions and hackathons.",
    "Provide product services that meet the needs of your customers.",
    "We use our youthful enthusiasm to grow with you.",
    "With tons of networking experience, we build a variety of infrastructures.",
  ];

  const onContact = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <TitleDivider title="About Aidenteti ?" number="01" />
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
          <button className="contact" onClick={(e) => onContact(e)}>
            contact
          </button>
        </div>
      </div>
    </>
  );
}
