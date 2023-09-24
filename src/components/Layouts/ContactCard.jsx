import Contact from "../Fragments/Contact";

const ContactCard = () => {
  return (
    <div className="contact-card__container">
      <Contact type={0} />
      <Contact type={1} />
      <Contact type={2} />
      <div className="button__container">
        <a href="/resources/agung_cv_ats.pdf" download>
          <button className="download-button">
            <img
              src="resources/download_symbol.svg"
              alt="download"
              className="w-[1.5rem] h-[1.5rem]"
            />
            <p className="download-button__text">Download Resume</p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
