import MainIcon from "../Fragments/MainIcon";
import ToggleDarkMode from "../Fragments/ToggleDarkMode";

const Header = () => {
  return (
    <header className="header__container min-w-xl flex-end" id="top">
      <MainIcon />
      <ToggleDarkMode />
    </header>
  );
};

export default Header;
