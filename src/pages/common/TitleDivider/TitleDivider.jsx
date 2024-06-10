import "./TitleDivider.css";

export default function TitleDivider({ title, number }) {
  return (
    <div id="title-divider">
      <p className="index-title-divider">{number}</p>
      <p className="title-title-divider">{title}</p>
    </div>
  );
}
