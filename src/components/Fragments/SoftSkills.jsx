import SkillsTitle from "../Elements/Skills/title";
import softSkillList from "../../services/SoftSkillList";
// import { useState } from "react";
// import Popup from "../Elements/Popup/Popup";

const SoftSkills = () => {
  // const [isPopUpOpen, setIsPopUpOpen] = useState();

  // const openPopup = () => {
  //   setIsPopUpOpen(true);
  // };

  // const closePopup = () => {
  //   setIsPopUpOpen(false);
  // };

  return (
    <div className="skills__container2">
      <SkillsTitle title="Soft Skills" />
      <div className="w-full">
        {softSkillList.map((item) => (
          <div className="skill-list__container" key={item.id}>
            <p className="skill-list__text">{item.skill}</p>
          </div>
        ))}
      </div>
      {/* <a
        className="text-black underline dark:text-primary cursor-pointer"
        onClick={openPopup}
      >
        See more...
      </a>
      <Popup open={isPopUpOpen} onPopUpClose={closePopup}>
        <div>
          <h1>This is soft skills</h1>
          <p>soft skills content</p>
        </div>
      </Popup> */}
    </div>
  );
};

export default SoftSkills;
