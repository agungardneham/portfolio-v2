import workSkillList from "../../../services/WorkSkillList";
import WorkSkillType from "./WorkSkillType";

const WorkSkillPopup = () => {
  return (
    <div className="mx-3 my-3 xl:mx-7">
      <div>
        <h1 className="font-raleway text-4xl font-semibold">Work Skills</h1>
      </div>
      <WorkSkillType
        type={workSkillList.frontEnd}
        title="Frontend Development"
      />
      <WorkSkillType type={workSkillList.backEnd} title="Backend Development" />
      <WorkSkillType type={workSkillList.others} title="Other Skills" />
    </div>
  );
};

export default WorkSkillPopup;
