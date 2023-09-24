import Img from "../Img";

const EduExpContainer = ({ img, title, children }) => {
  return (
    <div className="eduexp">
      <div className="flex items-center gap-[0.57788rem]">
        <Img
          src={`resources/${img}.svg`}
          alt={img}
          classname="w-[1.73356rem] h-[1.73356rem]"
        />
        <h2 className="eduexp__text">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default EduExpContainer;
