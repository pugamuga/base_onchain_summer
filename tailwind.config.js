/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      kufiM: ["Reem Kufi Fun", "sans-serif"],
      nablaPixel: ["Nabla", "cursive"],
      strongItalik: ["Ms Madi", "cursive"],
      lobster: ["Lobster", "cursive"],
    },
  },
  plugins: [],
};
