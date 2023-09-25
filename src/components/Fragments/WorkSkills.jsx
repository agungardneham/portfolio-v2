import SkillsTitle from "../Elements/Skills/title";
import workSkillList from "../../services/WorkSkillList";
import PopupTemplate from "../Elements/Popup/PopupTemplate";
import WorkSkillPopup from "../Elements/Popup/WorkSkillPopup";
import Popup from "reactjs-popup";

const WorkSkills = () => {
  // const [isPopUpOpen, setIsPopUpOpen] = useState();

  // const openPopup = () => {
  //   setIsPopUpOpen(true);
  // };

  // const closePopup = () => {
  //   setIsPopUpOpen(false);
  // };

  return (
    <div className="skills__container2">
      <SkillsTitle title="Work Skills" />
      <div className="w-full">
        {workSkillList.frontEnd.map((item) => (
          <div className="skill-list__container" key={item.id}>
            <p className="skill-list__text text-[0.75rem]">{item.skill}</p>
          </div>
        ))}
      </div>
      <Popup
        trigger={
          <a className="font-raleway text-[#333] underline dark:text-first cursor-pointer hover:animate-pulse">
            See more...
          </a>
        }
        modal
        nested
      >
        {(close) => (
          <PopupTemplate onPopUpClose={close}>
            <WorkSkillPopup />
          </PopupTemplate>
        )}
      </Popup>
      {/* <a
        className="text-black font-raleway underline dark:text-primary cursor-pointer mb-3 xl:mb-0"
        onClick={openPopup}
      >
        See more...
      </a> */}
      {/* <Popup open={isPopUpOpen} onPopUpClose={closePopup}>
        <WorkSkillPopup />
      </Popup> */}
    </div>
  );
};

export default WorkSkills;
