import { useContext } from "react";
import { PopupContext } from "../context/PopupContext";

export const usePopupContext = () => {
  return useContext(PopupContext);
};
