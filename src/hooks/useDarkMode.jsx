import { useContext } from "react";
import { DarkMode } from "../context/DarkMode";

export function useDarkMode() {
  return useContext(DarkMode);
}
