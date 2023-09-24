import ContentHeading from "../Elements/Content/ContentHeading";
import EduExperience from "../Fragments/EduExperience";
import Skills from "../Fragments/Skills";

const Resume = () => {
  return (
    <section className="content">
      <div className="content__container">
        <ContentHeading text="Resume" />
        <EduExperience />
        <Skills />
      </div>
    </section>
  );
};

export default Resume;
