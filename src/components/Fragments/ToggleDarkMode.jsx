import { useDarkMode } from "../../hooks/useDarkMode";
import Input from "../Elements/Input";
import Label from "../Elements/Label";
import ToggleDarkIcon from "./ToggleToDarkIcon";

const ToggleDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <div className="dark-mode__container">
        <ToggleDarkIcon
          classname="mr-2"
          icon="sun"
          iconAlt="sun"
          iconId="sun"
          iconDark="sun-dark"
          iconDarkAlt="sun (dark)"
          iconDarkId="sunDark"
        />
        <Input
          type="checkbox"
          name="toggle"
          id="toggle"
          classname="hidden"
          onChange={toggleDarkMode}
          checked={isDarkMode}
        />
        <Label htmlFor="toggle">
          <div className="dark-mode__toggle">
            <div className="toggle-circle"></div>
          </div>
        </Label>
        <ToggleDarkIcon
          classname="ml-2"
          icon="moon"
          iconAlt="moon"
          iconId="moon"
          iconDark="moon-dark"
          iconDarkAlt="moon (dark)"
          iconDarkId="moonDark"
        />
      </div>
    </>
  );
};

export default ToggleDarkMode;
