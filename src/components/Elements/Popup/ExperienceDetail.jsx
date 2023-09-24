const ExperienceDetail = ({ type, title, place, time, desc, task, skills }) => {
  const skillsJoin = skills.join(", ");

  return (
    <div className="exp-popup mb-3">
      <div
        className={`exp-popup__container ${
          type === 1
            ? "bg-[#FFE3BF] hover:bg-[#E0C8A8] dark:bg-[#E0C8A8] dark:hover:bg-[#FFE3BF]"
            : "bg-[#FFEED9] hover:bg-[#E0D1BF] dark:bg-[#E0D1BF] dark:hover:bg-[#FFEED9]"
        }`}
      >
        <div className="eduexp-card__text-container">
          <h2 className="exp-popup__title">{title}</h2>
          <p className="exp-popup__time">
            {place}, {time}
          </p>

          <p className="exp-popup__desc">{desc}</p>
          <ul className="exp-popup__list">
            {task.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <p className="exp-popup__skill">Skills: {skillsJoin}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
