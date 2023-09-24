const EduExpCard = ({ type, time, title, subtitle }) => {
  return (
    <div className="eduexp-card">
      <div
        className={`eduexp-card__container ${
          type === 1
            ? "bg-[#FFE3BF] hover:bg-[#E0C8A8] dark:bg-[#E0C8A8] dark:hover:bg-[#FFE3BF]"
            : "bg-[#FFEED9] hover:bg-[#E0D1BF] dark:bg-[#E0D1BF] dark:hover:bg-[#FFEED9]"
        }`}
      >
        <div className="eduexp-card__text-container">
          <p className="eduexp-card__time">{time}</p>
          <p className="eduexp-card__title">{title}</p>
          <p className="eduexp-card__subtitle">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default EduExpCard;
