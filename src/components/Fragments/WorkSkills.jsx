import SkillsTitle from "../Elements/Skills/title";
import workSkillList from "../../services/WorkSkillList";
import { useState } from "react";
import Popup from "../Elements/Popup/Popup";
import WorkSkillPopup from "../Elements/Popup/workSkillPopup";

const WorkSkills = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState();

  const openPopup = () => {
    setIsPopUpOpen(true);
  };

  const closePopup = () => {
    setIsPopUpOpen(false);
  };

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
      <a
        className="text-black font-raleway underline dark:text-primary cursor-pointer mb-3 xl:mb-0"
        onClick={openPopup}
      >
        See more...
      </a>
      <Popup open={isPopUpOpen} onPopUpClose={closePopup}>
        <WorkSkillPopup />
      </Popup>
    </div>
  );
};

export default WorkSkills;
