import Img from "../Img";

const WorkSKillDetail = ({ title, classname }) => {
  return (
    <div className="flex flex-row gap-3 items-center border border-solid border-bgDark2 rounded-full px-2 py-1 overflow-hidden dark:bg-bgDark dark:border-primary hover:bg-[#DCDFE3] dark:hover:bg-bgDark2 group">
      <div className="bg-primary dark:bg-bgDark group-hover:bg-[#DCDFE3] dark:group-hover:bg-bgDark2">
        <Img
          src={`/resources/${title}.svg`}
          alt={title}
          classname={`w-10 h-10 z-0 ${classname}`}
        />
      </div>
      <div className="skill-list__text text-md">{title}</div>
    </div>
  );
};

export default WorkSKillDetail;
