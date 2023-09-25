import EduExpContainer from "../Elements/EduExp/Container";
import EduExpCard from "../Elements/EduExp/EduExpCard";
import ExperiencePopup from "../Elements/Popup/ExperiencePopup";
import EducationPopup from "../Elements/Popup/EducationPopup";
import Popup from "reactjs-popup";
import PopupTemplate from "../Elements/Popup/PopupTemplate";

const EduExperience = () => {
  // const [isPopUpOpen, setIsPopUpOpen] = useState();
  // const [isPopUpOpen2, setIsPopUpOpen2] = useState();

  // const openPopup = () => {
  //   setIsPopUpOpen(true);
  // };
  // const closePopup = () => {
  //   setIsPopUpOpen(false);
  // };

  // const openPopup2 = () => {
  //   setIsPopUpOpen2(true);
  // };
  // const closePopup2 = () => {
  //   setIsPopUpOpen2(false);
  // };
  return (
    <div className="edu-exp mb-7">
      <div className="edu-exp__container">
        <EduExpContainer img="edu" title="Education">
          <EduExpCard
            type={1}
            time="2023"
            title="Full Stack Web Development"
            subtitle="Harisenin.com"
          />
          <EduExpCard
            type={2}
            time="2018-2022"
            title="Bachelor of Metallurgical Engineering"
            subtitle="Bandung Institute of Technology"
          />
          <div className="z-50">
            <Popup
              trigger={
                <a className="font-raleway text-[#333] underline dark:text-first cursor-pointer hover:animate-pulse">
                  See detailed education...
                </a>
              }
              modal
              nested
            >
              {(close) => (
                <PopupTemplate onPopUpClose={close}>
                  <EducationPopup />
                </PopupTemplate>
              )}
            </Popup>
            {/* <a
              className="text-black underline dark:text-primary cursor-pointer"
              onClick={openPopup}
            >
              See detailed education...
            </a> */}
            {/* <Popup open={isPopUpOpen} onPopUpClose={closePopup}>
              <EducationPopup />
            </Popup> */}
          </div>
        </EduExpContainer>
        <EduExpContainer img="exp" title="Experience">
          <EduExpCard
            type={2}
            time="2021-2022"
            title="Head of IT Department (Front-End)"
            subtitle="metalfestitb.com"
          />
          <div>
            <Popup
              trigger={
                <a className="font-raleway text-[#333] underline dark:text-first cursor-pointer hover:animate-pulse">
                  See other experiences...
                </a>
              }
              modal
              nested
            >
              {(close) => (
                <PopupTemplate onPopUpClose={close}>
                  <ExperiencePopup />
                </PopupTemplate>
              )}
            </Popup>
            {/* <a
              className="text-black underline dark:text-primary cursor-pointer"
              onClick={openPopup2}
            >
              See other experiences...
            </a> */}
            {/* <Popup open={isPopUpOpen2} onPopUpClose={closePopup2}>
              <ExperiencePopup />
            </Popup> */}
          </div>
        </EduExpContainer>
      </div>
    </div>
  );
};

export default EduExperience;
