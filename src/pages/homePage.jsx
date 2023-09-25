// import GoUpButton from "../components/Elements/GoUpButton";
import AboutMe from "../components/Layouts/AboutMe";
import Header from "../components/Layouts/Header";
import Navbar from "../components/Layouts/Navbar";
import Profile from "../components/Layouts/Profile";

const HomePage = () => {
  return (
    <div className="body__container min-w-screen">
      {/* <GoUpButton /> */}
      <Header />
      <div className="xl:grid xl:grid-cols-[25rem 52.5rem] xl:grid-rows-[8.87rem 44.39rem]">
        <Profile />
        <Navbar
          typeHome="active"
          typeResume="not-active"
          typeProject="not-active"
        />
        <AboutMe />
      </div>
    </div>
  );
};

export default HomePage;
