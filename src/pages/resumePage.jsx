// import GoUpButton from "../components/Elements/GoUpButton";
import Header from "../components/Layouts/Header";
import Navbar from "../components/Layouts/Navbar";
import Profile from "../components/Layouts/Profile";
import Resume from "../components/Layouts/Resume";

const ResumePage = () => {
  return (
    <div className="body__container min-w-screen">
      {/* <GoUpButton /> */}
      <Header />
      <div className="xl:grid xl:grid-cols-[25rem 52.5rem] xl:grid-rows-[8.87rem 44.39rem]">
        <Profile />
        <Navbar
          typeHome="not-active"
          typeResume="active"
          typeProject="not-active"
        />
        <Resume />
      </div>
    </div>
  );
};
export default ResumePage;
