import { createContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDarkMode)) {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDarkMode)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const html = document.querySelector("html");
    const sunIcon = document.querySelector("#sun");
    const sunDarkIcon = document.querySelector("#sunDark");
    const moonIcon = document.querySelector("#moon");
    const moonDarkIcon = document.querySelector("#moonDark");

    if (isDarkMode) {
      html.classList.add("dark");
      sunIcon.classList.add("hidden");
      sunDarkIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
      moonDarkIcon.classList.remove("hidden");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      sunIcon.classList.remove("hidden");
      sunDarkIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
      moonDarkIcon.classList.add("hidden");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const DarkMode = DarkModeContext;
export default DarkModeProvider;
