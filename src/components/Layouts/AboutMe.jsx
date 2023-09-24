import ContentHeading from "../Elements/Content/ContentHeading";
import AboutMeCard from "../Fragments/AboutMeCard";

const AboutMe = () => {
  return (
    <section className="content">
      <div className="content__container">
        <ContentHeading text="About Me" />
        <div className="inline-flex py-0 px-[0.625rem] justify-center items-center xl:mb-[1rem]">
          <p className="text-[#000] font-raleway text-[1rem] not-italic font-medium leading-[1.875rem] dark:text-textDark">
            A bachelor graduate from Bandung Institute of Technology, who has a
            passion for full-stack web development. Experienced in Javascript,
            especially NodeJS and ReactJS; databases (SQL and NoSQL); and basic
            web security. Enjoy collaborating with teams to create dynamic and
            interactive web applications. Always eager to learn new technologies
            and contribute to innovative projects in the industry.
          </p>
        </div>
        <div className="inline-flex p-[0.625rem] justify-center items-center gap-[0.625rem]">
          <h1 className="text-[#000] font-poppins text-[2rem] not-italic font-medium leading-[2.5rem] tracking-[0.05rem] dark:text-textDark">
            What I do!
          </h1>
        </div>
        <div className="xl:flex xl:flex-row xl:gap-[1.69rem]">
          <AboutMeCard type={1} title="Web Development" img="web">
            As a fullstack developer, I&apos;m skilled in NextJS, ReactJS, and
            TailwindCSS for frontend, proficient in REST API development, and
            adept at backend with NodeJS.
          </AboutMeCard>
          <AboutMeCard type={2} title="Project Collaboration" img="collab">
            I&apos;m a collaborative fullstack web developer who enjoys working
            with teams, leveraging tools like Notion, Slack, and Git for
            seamless communication and version control.
          </AboutMeCard>
        </div>
        <div className="xl:flex xl:flex-row xl:gap-[1.69rem]">
          <AboutMeCard type={3} title="UI/UX Designing" img="ux_icon">
            UI/UX plays a big role in web app. I can design it using Figma and
            Canva. I also excel in typography and color theory, ensuring
            visually appealing and functional websites.
          </AboutMeCard>
          <AboutMeCard type={4} title="Data Analyzing" img="data">
            I enjoys working with databases, proficient in both SQL (MySQL) and
            NoSQL (MongoDB), ensuring robust data solutions for web
            applications.
          </AboutMeCard>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
