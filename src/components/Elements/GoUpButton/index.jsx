import { useEffect, useRef, useState } from "react";

const GoUpButton = () => {
  const goUpButtonRef = useRef(null);
  const [showGoUp, setShowGoUp] = useState(false);
  useEffect(() => {
    if (goUpButtonRef.current) {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setShowGoUp(true);
        } else {
          setShowGoUp(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      {showGoUp && (
        <a
          href="#top"
          className="go-up__container"
          id="go-up"
          ref={goUpButtonRef}
        >
          <span className="go-up__arrow"></span>
        </a>
      )}
    </>
  );
};

export default GoUpButton;
