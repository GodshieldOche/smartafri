/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryOne: "#4082E6",
        primaryTwo: "#F95F09",
        primaryThree: "#F7CE6C",
        primaryFour: "#63BF92",
        grayOne: "#848383",
        grayTwo: "#B0BABF",
        grayThree: "#FAFAFA",
        grayFour: "#ABB3B7",
        secondaryOne: "#F76659",
        secondaryTwo: "#DDE2E4",
        secondaryThree: "#0A142F",
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
      },
    },
  },
  plugins: [],
};
