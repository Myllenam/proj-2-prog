
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { max: "809px" },
      md: { min: "810px", max: "1499px" },
      lg: { min: "1500px" },
    },
    extend: {
      fontWeight: {
        semiBold: 600,
        extraBold: 800,
      },
      colors: {
        rosa1:"#F7C6C7",
        rosa2:"#F47B7A",
        laranja:"#FA8C01",
        azul:"#7BB9FA",
        cinza:"#A9A9A9",
        preto:"#282828",
        begeClaro:"#F9F9F9CC",
        black: "#000000",
        white: "#FFFFFF",
        primary: { 
          700: "#9E2E41",
          600: "#D22D49",
          500: "#E54D66",
          400: "#F47187",
          300: "#FC9CAC",
          200: "#FFCCD4",
          100: "#FFF5F6",
        },
        secondary: {
          700: "#745D2A",
          600: "#A47F2D",
          500: "#D6A22E",
          400: "#E8B84E",
          300: "#F5CD75",
          200: "#FEE0A0",
          100: "#FFF1D1",
        },
        neutral: {
          700: "#8A8A8A",
          600: "#A3A3A3",
          500: "#494949",
          400: "#D6D6D6",
          300: "#E3E3E3",
          200: "#F0F0F0",
          100: "#FCFCFC",
        },
        main: {
          primary: "#F37187",
          secondary: "#E5BC5D",
          neutral: "#D6D6D6",
          black: "#000000",
          white: "#FFFFFF",
          lightBg: "#FCF8F8",
          darkBg: "#442228",
        },
      },
    },
  },
  plugins: [],
};

