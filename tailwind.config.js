const { color } = require("framer-motion");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope"],
        Roboto: ["Roboto"],
        Lato: ["Lato"],
        LibreBaskerville: ["Libre Baskerville"],
        Merriweather: ["Merriweather"],
        OldStandardTT: ["Old Standard TT", "serif"],
        Raleway: ["Raleway", "serif"],
        Montserrat: ["Montserrat", "serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      backgroundImage: {
        blueLogo: "url('./images/logoblue.png')",
      },
      colors: {
        navBarColor: "#162e44",
        bgColorOfNavbar: "#35495B",
      },
    },
  },
  plugins: [],
};
