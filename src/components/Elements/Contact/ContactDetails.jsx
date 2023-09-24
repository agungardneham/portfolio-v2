import { useEffect, useState } from "react";

const ContactDetails = ({ type }) => {
  const [copiedText, setCopiedText] = useState("");
  const [showCopied, setShowCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(copiedText);
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 2500);
  };

  useEffect(() => {
    if (type === "Phone") {
      setCopiedText("+62 859 1067 33311");
    } else if (type === "Email") {
      setCopiedText("agungmahendra1322@gmail.com");
    } else {
      setCopiedText("");
    }
  }, [type]);

  return (
    <div className="contact-details__container">
      <div className="contact-details__container2">
        <h3 className="contact-details__text">{type}</h3>
      </div>
      {type === "Phone" && (
        <>
          {showCopied && (
            <div
              className="absolute top-[55%] left-[50%] font-raleway bg-secondary px-2 py-1 rounded-full text-textDark xl:top-[53%]"
              id="copied"
            >
              Copied!
            </div>
          )}
          <p className="copied-text__phone" onClick={handleCopyClick}>
            +62 859 1067 33311
          </p>
        </>
      )}
      {type === "Email" && (
        <>
          {showCopied && (
            <div
              className="absolute top-[65%] left-[50%] font-raleway bg-secondary px-2 py-1 rounded-full text-textDark xl:top-[61%]"
              id="copied"
            >
              Copied!
            </div>
          )}
          <p className="copied-text__email" onClick={handleCopyClick}>
            agungmahendra1322@gmail.com
          </p>
        </>
      )}
      {type === "Location" && (
        <p className="copied-text__email">Probolinggo, East Java</p>
      )}
    </div>
  );
};

export default ContactDetails;
