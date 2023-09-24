import Img from "../Img";

const ContactImg = ({ imgClass, src, alt }) => {
  return (
    <div className="contact-img__container">
      <div className={`contact-img__container2`}>
        <Img src={`resources/${src}.svg`} alt={alt} classname={imgClass} />
      </div>
    </div>
  );
};
export default ContactImg;
