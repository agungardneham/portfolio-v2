/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        "normal-line": "normal",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      pacifico: ["Pacifico", "cursive"],
    },
    colors: {
      primary: "#F2F5F9",
      secondary: "#FF9C1A",
      tertiary: "#EC1B09",
    },
    boxShadow: {
      custom: "0px 0px 0px 0px rgba(0, 0, 0, 0.25)",
      custom2: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
    },
    borderRadius: {
      custom: "0rem 0rem 0.5rem 0.5rem",
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
