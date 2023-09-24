import SoftSkills from "./SoftSkills";
import WorkSkills from "./WorkSkills";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__container">
        <WorkSkills />
        <SoftSkills />
      </div>
    </div>
  );
};

export default Skills;
