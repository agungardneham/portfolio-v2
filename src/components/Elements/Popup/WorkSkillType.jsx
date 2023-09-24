import Line2 from "../Line2";
import WorkSKillDetail from "./WorkSkillDetail";

const WorkSkillType = ({ title, type }) => {
  return (
    <div className="flex flex-col mt-3">
      <div className="my-2">
        <h2 className="font-raleway text-xl">{title}</h2>
      </div>
      <Line2 width="full" />
      <div className="flex flex-wrap gap-3 xl:gap-5">
        {type.map((item) => (
          <WorkSKillDetail
            key={item.id}
            title={item.skill}
            classname={item.style}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkSkillType;
