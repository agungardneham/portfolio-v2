import Img from "../Img";
import courseList from "../../../services/CourseList";
import CourseDetail from "./CourseDetail";

const EducationPopup = () => {
  return (
    <div className="mx-3 my-5 xl:mx-7">
      <div className="flex flex-row mb-5 gap-3">
        <Img src="/resources/edu.svg" alt="experience" classname="w-10" />
        <h1 className="font-raleway text-4xl">Education</h1>
      </div>
      <div className="exp-popup mb-3">
        <div className="exp-popup__container bg-[#FFE3BF] hover:bg-[#E0C8A8] dark:bg-[#E0C8A8] dark:hover:bg-[#FFE3BF] mb-2">
          <div className="eduexp-card__text-container mb-5">
            <h2 className="exp-popup__title">
              Bandung Institute of Technology (ITB)
            </h2>
            <p className="exp-popup__time">Bandung, 2018 - 2022</p>
            <p className="exp-popup__desc">
              Bachelor of Metallurgical Engineering
            </p>
            <p className="exp-popup__desc">
              GPA : 3.49 (Dean&apos;s List of FTTM ITB 2020)
            </p>
            <p className="exp-popup__desc">
              Thesis : <i>Nephelium Lappaceum</i> (Rambutan) Peel Extract as
              Organic Inhibitor for <b>Corrosion Control</b> of ASTM A36 Steel
              in HCl 1 M Solution
            </p>
          </div>
        </div>
        <div className="exp-popup__container bg-[#FFEED9] hover:bg-[#E0D1BF] dark:bg-[#E0D1BF] dark:hover:bg-[#FFEED9]">
          <div className="eduexp-card__text-container mb-5">
            <h2 className="exp-popup__title">
              Senior High School 3 Malang (SMAN 3 Malang)
            </h2>
            <p className="exp-popup__time">Malang, 2016 - 2018</p>
            <p className="exp-popup__desc">Accelerated Program</p>
            <p className="exp-popup__desc">Report Card Average Score : 91</p>
            <p className="exp-popup__desc">
              National Exam Score : 359 (Average : 89.75)
            </p>
            <p className="exp-popup__desc">Highest Score #5 in the School</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row my-5 gap-3">
        <Img
          src="/resources/edu.svg"
          alt="experience"
          classname="min-w-[2.5rem]"
        />
        <h1 className="font-raleway text-4xl">
          Courses, Training, and Sertifications
        </h1>
      </div>
      {courseList.map((item) => (
        <CourseDetail
          key={item.id}
          type={item.id % 2}
          title={item.name}
          place={item.place}
          time={item.time}
          desc={item.desc}
          task={item.task}
          skills={item.skills}
        />
      ))}
    </div>
  );
};

export default EducationPopup;
