import Img from "../Elements/Img";

const ToggleDarkIcon = ({
  classname,
  icon,
  iconAlt,
  iconId,
  iconDark,
  iconDarkAlt,
  iconDarkId,
}) => {
  return (
    <span className={classname}>
      <Img
        src={`./resources/${icon}.svg`}
        alt={iconAlt}
        classname="w-6 h-6"
        id={iconId}
      />
      <img
        src={`./resources/${iconDark}.svg`}
        alt={iconDarkAlt}
        className="w-6 h-6 hidden"
        id={iconDarkId}
      />
    </span>
  );
};

export default ToggleDarkIcon;
