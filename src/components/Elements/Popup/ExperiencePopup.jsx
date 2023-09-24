import experienceList from "../../../services/ExperienceList";
import Img from "../Img";
import ExperienceDetail from "./ExperienceDetail";

const ExperiencePopup = () => {
  return (
    <div className="mx-3 my-5 xl:mx-7">
      <div className="flex flex-row mb-5 gap-3">
        <Img src="/resources/exp.svg" alt="experience" classname="w-10" />
        <h1 className="font-raleway text-4xl">Experience</h1>
      </div>
      {experienceList.map((item) => (
        <ExperienceDetail
          key={item.id}
          type={item.id % 2}
          title={item.name}
          place={item.place}
          time={item.time}
          desc={item.desc}
          task={item.task}
          skills={item.skills}
        />
      ))}
    </div>
  );
};

export default ExperiencePopup;
