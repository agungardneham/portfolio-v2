import ContactDetails from "../Elements/Contact/ContactDetails";
import ContactImg from "../Elements/Contact/ContactImg";
import contactCardData from "../../services/ContactCardData";
import Line from "../Elements/Line";

const Contact = ({ type }) => {
  return (
    <div className="copy-item__phone cursor-pointer">
      <div className="copy-item__phone__children">
        <div className="contact__container">
          <ContactImg
            src={contactCardData[type].name}
            alt={contactCardData[type].name}
            imgClass={contactCardData[type].img}
          />
          <ContactDetails type={contactCardData[type].type} />
        </div>
      </div>
      <Line />
    </div>
  );
};

export default Contact;
