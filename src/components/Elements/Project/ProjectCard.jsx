import { useState } from "react";
import Anchor from "../Anchor";
import Img from "../Img";
import Popup from "../Popup/Popup";

const ProjectCard = ({
  type,
  year,
  title,
  desc,
  link,
  repo,
  linkClass,
  repoClass,
}) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState();

  const openPopup = () => {
    setIsPopUpOpen(true);
  };

  const closePopup = () => {
    setIsPopUpOpen(false);
  };
  return (
    <div
      className={`flex flex-col items-center w-full h-auto rounded-[1.25rem] my-5 xl:flex-row ${
        type === 1
          ? "bg-[#FFEBD1] hover:bg-[#DECDB6] dark:bg-[#DECDB6] dark:hover:bg-[#FFEBD1]"
          : "bg-[#F2F7FC] hover:bg-[#D5D9DE] dark:bg-[#D5D9DE] dark:hover:bg-[#F2F7FC]"
      }`}
    >
      <div className="px-5 pt-5 pb-3 w-full xl:w-[85%]">
        <p className="eduexp-card__time mb-1">{year}</p>
        <p className="eduexp-card__title mb-1">{title}</p>
        <p className="eduexp-card__subtitle mb-2">{desc}</p>
        <a onClick={openPopup}>
          <p className="eduexp-card__subtitle underline cursor-pointer">
            See More Details...
          </p>
        </a>
        <Popup open={isPopUpOpen} onPopUpClose={closePopup}>
          {desc}
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
