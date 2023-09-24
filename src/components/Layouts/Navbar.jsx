import NavCards from "../Fragments/NavCards";

const Navbar = ({ typeHome, typeResume, typeProject }) => {
  return (
    <nav className="navbar" id="home">
      <div className="navbar__container"></div>
      <NavCards
        typeHome={typeHome}
        typeResume={typeResume}
        typeProject={typeProject}
      />
    </nav>
  );
};

export default Navbar;
