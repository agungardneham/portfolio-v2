import { createContext, useState } from "react";

export const PopupContext = createContext();

const PopupProvider = ({ children }) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopup = () => {
    setIsPopUpOpen(true);
  };

  const closePopup = () => {
    setIsPopUpOpen(false);
  };

  return (
    <PopupContext.Provider value={{ isPopUpOpen, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupProvider;
