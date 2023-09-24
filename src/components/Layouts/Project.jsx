import ContentHeading from "../Elements/Content/ContentHeading";
import ProjectList from "../Fragments/ProjectList";

const Project = () => {
  return (
    <section className="content">
      <div className="content__container">
        <ContentHeading text="Projects" />
        <ProjectList />
      </div>
    </section>
  );
};

export default Project;
