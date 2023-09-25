import Anchor from "../Anchor";
import Img from "../Img";
import PopupTemplate from "../Popup/PopupTemplate";
import Popup from "reactjs-popup";
import ProjectPopup from "../Popup/ProjectPopup";

const ProjectCard = ({
  type,
  time,
  title,
  desc,
  link,
  repo,
  linkClass,
  repoClass,
  image,
  task,
  tool,
}) => {
  // const [isPopUpOpen, setIsPopUpOpen] = useState();

  // const openPopup = () => {
  //   setIsPopUpOpen(true);
  // };

  // const closePopup = () => {
  //   setIsPopUpOpen(false);
  // };
  return (
    <div
      className={`flex flex-col items-center w-full h-auto rounded-[1.25rem] my-3 xl:flex-row ${
        type === 1
          ? "bg-[#FFEBD1] hover:bg-[#DECDB6] dark:bg-[#DECDB6] dark:hover:bg-[#FFEBD1]"
          : "bg-[#F2F7FC] hover:bg-[#D5D9DE] dark:bg-[#D5D9DE] dark:hover:bg-[#F2F7FC]"
      }`}
    >
      <div className="px-3 pt-3 pb-3 w-full xl:w-[85%]">
        <p className="eduexp-card__time mb-1">{time}</p>
        <p className="eduexp-card__title mb-1">{title}</p>
        <p className="eduexp-card__subtitle mb-2">{desc}</p>
        <Popup
          trigger={
            <a className="font-raleway text-black underline cursor-pointer">
              See more details...
            </a>
          }
          modal
          nested
        >
          {(close) => (
            <PopupTemplate onPopUpClose={close}>
              <ProjectPopup
                projectImg={image}
                title={title}
                time={time}
                desc={desc}
                task={task}
                tool={tool}
              />
            </PopupTemplate>
          )}
        </Popup>
      </div>
      <div className="flex flex-row pl-5 pb-5 gap-3 w-full xl:w-[15%] xl:gap-5 xl:p-0">
        <Anchor href={link} classname={linkClass}>
          <Img src="/resources/link.svg" alt="link" classname="w-6 h-6" />
        </Anchor>
        <Anchor href={repo} classname={repoClass}>
          <Img src="/resources/Github.svg" alt="github" classname="w-6 h-6" />
        </Anchor>
      </div>
    </div>
  );
};

export default ProjectCard;
