import Carousel from "react-bootstrap/Carousel";
import Img from "../Img";
import WorkSKillDetail from "./WorkSkillDetail";
import Line2 from "../Line2";

const ProjectPopup = ({ projectImg, title, time, desc, task, tool }) => {
  return (
    <div>
      {/* {projectData.map((item) => (
        <ProjectType
          projectImg={item.image}
          title={item.name}
          time={item.time}
          desc={item.shortDesc}
          task={item.task}
          tool={item.tools}
          key={item.id}
        />
      ))} */}
      <div className="w-full flex flex-col xl:flex-row gap-5">
        <Carousel className="w-full xl:w-1/2">
          {projectImg.map((item, index) => (
            <Carousel.Item key={index}>
              <Img src={item} classname="w-full h-auto" />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="w-full xl:w-1/2">
          <div className="text-[#000] dark:text-textDark">
            <h1 className="font-poppins  text-[2.5rem] font-medium">{title}</h1>
            <Line2 />
            <p className="font-raleway italic mb-2">{time}</p>
            <p className="font-raleway text-[1.5rem] mb-5">{desc}</p>
            <p className="font-raleway text-[1.5rem]">Responsibilities : </p>
            <ul className="font-raleway text-[1rem] list-disc ml-5 mb-3">
              {task.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <div>
              <div className="font-raleway text-[1.5rem]">Tools Used :</div>
              <div className="flex flex-wrap gap-3 xl:gap-5">
                {tool.map((item, index) => {
                  return <WorkSKillDetail key={index} title={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
