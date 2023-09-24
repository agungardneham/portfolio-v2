const AboutMeCard = ({ type, img, title, children }) => {
  return (
    <div className="about-me__card">
      <div
        className={`about-me__card-container ${
          type === 1 &&
          "bg-[#FFEBD1] hover:bg-[#DECDB6] dark:bg-[#DECDB6] dark:hover:bg-[#FFEBD1]"
        }
          ${
            type === 2 &&
            "bg-[#F2F7FC] p-2 hover:bg-[#D5D9DE] dark:bg-[#D5D9DE] dark:hover:bg-[#F2F7FC]"
          }
          ${
            type === 3 &&
            "bg-[#FFEBD1] p-2 hover:bg-[#DECDB6] xl:bg-[#F2F7FC] xl:hover:bg-[#D5D9DE] dark:bg-[#DECDB6] dark:hover:bg-[#FFEBD1] xl:dark:bg-[#D5D9DE] xl:hover:dark:bg-[#F2F7FC]"
          }
          ${
            type === 4 &&
            "bg-[#F2F7FC] p-2 hover:bg-[#D5D9DE] xl:bg-[#FFEBD1] xl:hover:bg-[#DECDB6] dark:bg-[#D5D9DE] dark:hover:bg-[#F2F7FC] xl:dark:bg-[#DECDB6] xl:dark:hover:bg-[#FFEBD1]"
          }
        `}
      >
        <div className="flex p-[0.625rem] flex-col items-start justify-center">
          <div className="flex items-center gap-[0.625rem]">
            <img
              src={`resources/${img}.svg`}
              alt={img}
              className="w-[1.5rem] h-[1.5rem] mt-[-0.6rem]"
            />
            <h2 className="about-me__card-title">{title}</h2>
          </div>
          <p className="about-me__card-desc">{children}</p>
        </div>
      </div>
    </div>
  );
};
export default AboutMeCard;
