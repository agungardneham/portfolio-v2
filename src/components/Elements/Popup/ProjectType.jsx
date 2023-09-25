import Carousel from "react-bootstrap/Carousel";
import Img from "../Img";
import WorkSKillDetail from "./WorkSkillDetail";
const ProjectType = ({ projectImg, title, time, desc, task, tool }) => {
  return (
    <div className="w-full flex flex-col xl:flex-row">
      <Carousel className="w-full xl:w-1/2">
        {projectImg.map((item, index) => (
          <Carousel.Item key={index}>
            <Img src={item} classname="w-full" />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="w-full xl:w-1/2">
        <div>
          <h1>{title}</h1>
          <p>{time}</p>
          <p>{desc}</p>
          <ul>
            {task.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <div>
            <div>Tools Used :</div>
            {tool.map((item, index) => {
              <WorkSKillDetail key={index} title={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectType;
