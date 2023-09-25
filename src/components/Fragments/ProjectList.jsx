import ProjectCard from "../Elements/Project/ProjectCard";
import projectData from "../../services/ProjectData";

const ProjectList = () => {
  return (
    <div className="h-[90%] overflow-y-auto">
      {projectData.map((item) => (
        <ProjectCard
          type={item.id % 2}
          key={item.id}
          time={item.time}
          title={item.name}
          desc={item.shortDesc}
          link={item.link}
          repo={item.repo}
          linkClass={item.linkClass}
          repoClass={item.repoClass}
          image={item.image}
          task={item.task}
          tool={item.tool}
        />
      ))}
    </div>
  );
};

export default ProjectList;
