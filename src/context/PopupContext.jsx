import { createContext, useState } from "react";

export const PopupContext = createContext();

const PopupProvider = ({ children }) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const openPopup = (content) => {
    setPopupContent(content);
    setIsPopUpOpen(true);
  };

  const closePopup = () => {
    setPopupContent(null);
    setIsPopUpOpen(false);
  };

  return (
    <PopupContext.Provider
      value={{ isPopUpOpen, openPopup, closePopup, popupContent }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export default PopupProvider;
