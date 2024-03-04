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
      },
      backgroundImage: {
        blueLogo: "url('./images/logoblue.png')",
      },
    },
  },
  plugins: [],
};
