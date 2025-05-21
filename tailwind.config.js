/** @type {import('tailwindcss').Config} */

const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px0_500 = { ...Array.from(Array(501)).map((_, i) => `${i}px`) };
const px0_1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) };
const px0_2000 = { ...Array.from(Array(2001)).map((_, i) => `${i}px`) };

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      borderWidth: px0_10,
      borderRadius: px0_1000,
      lineHeight: px0_100,
      fontSize: px0_200,
      minWidth: px0_1000,
      minHeight: px0_1000,
      spacing: px0_2000,
      gap: px0_2000,
      fontWeight: px0_100,
      colors: {
        primary: {
          50: "#FEFAF6",
          100: "#F9E8D8",
          200: "#FFC8A0",
          300: "#FFB178",
          400: "#FF8933",
          500: "#FF6B00",
          600: "#CC5600",
          700: "#994000",
          800: "#662B00",
          900: "#331500",
        },
        grey: {
          50: "#F8F8F8",
          100: "#EBEBE9",
          200: "#D8D8D5",
          300: "#BFBFBA",
          400: "#8B8B87",
          500: "#6E6E69",
          600: "#585854",
          700: "#42423F",
          800: "#2C2C2A",
          900: "#1D1D1B",
        },
        secondary: {
          blue: "#1B3F80",
          brown: "#614F45",
          brown_bg: "#CBC3BB",
          brown_bg_2: "#EFEDEB",
          error: "#FF0000",
          pink: "#FF91A2",
          success: "#20D698",
        },
        white: {
          solid: "#FFFFFF",
        },
      },
      fontFamily: {
        pretendard: ["Pretendard_regular", "sans-serif"],
      },
    },
  },

  plugins: [],
};
