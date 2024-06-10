import TitleDivider from "../../../common/TitleDivider/TitleDivider";
import img from "../../../../assets/main/dummy-img.png";

export default function MainServices() {
  const serviceConponentsList = [
    {
      title: "Humans are much more smarter than AI",
      subTitle:
        "Lorem ipsum dolar sit amet consectetur. Lorem ipsum dolar sit amet consectetur.",
      img: img,
    },
    {
      title: "Humans are much more smarter than AI",
      subTitle:
        "Lorem ipsum dolar sit amet consectetur. Lorem ipsum dolar sit amet consectetur.",
      img: img,
    },
    {
      title: "Humans are much more smarter than AI",
      subTitle:
        "Lorem ipsum dolar sit amet consectetur. Lorem ipsum dolar sit amet consectetur.",
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
