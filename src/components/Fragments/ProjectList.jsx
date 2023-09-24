import ProjectCard from "../Elements/Project/ProjectCard";
import projectData from "../../services/ProjectData";

const ProjectList = () => {
  return (
    <div className="h-[90%] overflow-y-auto my-5">
      {projectData.map((item) => (
        <ProjectCard
          type={item.id % 2}
          key={item.id}
          year={item.year}
          title={item.name}
          desc={item.shortDesc}
          link={item.link}
          repo={item.repo}
          linkClass={item.linkClass}
          repoClass={item.repoClass}
        />
      ))}
    </div>
  );
};

export default ProjectList;
