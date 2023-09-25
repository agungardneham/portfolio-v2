import { useContext } from "react";
import { PopupContext } from "../context/PopupContext";

export const usePopupContext = () => {
  const popupContext = useContext(PopupContext);
  if (!popupContext) {
    throw new Error("usePopupContext must be used within a PopupProvider");
  }

  return popupContext;
};
