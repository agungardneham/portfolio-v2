/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      lineHeight: {
        "normal-line": "normal",
      },
      colors: {
        first: "#F2F5F9",
        second: "#FF9C1A",
        third: "#EC1B09",
        secondaryDark: "#C97B14",
        tertiaryDark: "#C91808",
        bgDark: "#636363",
        bgDark2: "#505050",
        textDark: "#FFF",
        textDark2: "#A0A0A0",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
      boxShadow: {
        custom: "0px 0px 0px 0px rgba(0, 0, 0, 0.25)",
        custom2: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        custom3: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        custom: "0rem 0rem 0.5rem 0.5rem",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".filter": {
          filter: "var(--tw-filter)",
        },
        ".drop-shadow-0-0-1-rgba-0": {
          "--tw-filter": "drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.00))",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
