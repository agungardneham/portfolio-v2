import Line2 from "../Line2";

const ContentHeading = ({ text }) => {
  return (
    <div className="heading">
      <div className="heading__container">
        <h1 className="heading__text">{text}</h1>
      </div>
      <Line2 />
    </div>
  );
};

export default ContentHeading;
