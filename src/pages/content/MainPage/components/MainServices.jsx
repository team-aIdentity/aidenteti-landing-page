import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import img from "../../../../assets/main/dummy-img.png";

export default function MainServices() {
  const serviceConponentsList = [
    {
      title: "Aidenteti Crew",
      subTitle:
        "To popularize Web3 Operate SNS marketing platforms such as YouTube / Instagram",
      img: img,
    },
    {
      title: "Product Development Agencies",
      subTitle:
        "We are an agency for website, application, AI, blockchain, etc. development.",
      img: img,
    },
    {
      title: "Sell and rent photobooths",
      subTitle:
        "Customize the software with your own photobooth to sell and rent.",
      img: img,
    },
  ];
  return (
    <>
      <TitleDivider title="Services" number="02" />
      <ul className="service-components">
        {serviceConponentsList.map((value, index) => (
          <ServiceConponents
            title={value.title}
            subTitle={value.subTitle}
            img={img}
            key={index}
          />
        ))}
      </ul>
    </>
  );
}

const ServiceConponents = ({ title, subTitle, img }) => {
  return (
    <li>
      <img src={img} alt="img" />
      <div className="components">
        <div className="title-box">
          <p className="title">{title}</p>
          <p className="sub-title">{subTitle}</p>
        </div>
        <p className="learn-more">Learn more</p>
      </div>
    </li>
  );
};
