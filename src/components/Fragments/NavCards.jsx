import NavItem from "../Elements/NavItem";

const NavCards = ({ typeHome, typeResume, typeProject }) => {
  return (
    <div className="navcard">
      <NavItem href="/" type={typeHome} img="Home" />
      <NavItem href="/resume" type={typeResume} img="Resume" />
      <NavItem href="/project" type={typeProject} img="Project" />
    </div>
  );
};

export default NavCards;
