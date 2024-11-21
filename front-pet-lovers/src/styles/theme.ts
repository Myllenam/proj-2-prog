import { createTheme } from "@mui/material";

let theme = createTheme({
  typography:{
    fontFamily: "Montserrat, sans-serif",
  }
});

theme = createTheme(theme, {
  palette: {
    primary: {
      main: "#F47B7A",
    },
    secondary: {
      main:"#F47B7A",
    },
  },
  typography: {
    h1: {
      fontSize: "20px",
      fontStyle: "normal",
      lineHeight: "48px",
      fontWeight: 400,
      [theme.breakpoints.up("sm")]: {
        fontSize: "28px",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "40px",
      },
    },
    h2: {
      fontSize: "30px",
      fontStyle: "normal",
      lineHeight: "48px",
      fontWeight: 400,
      [theme.breakpoints.up("sm")]: {
        fontSize: "24px",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "30px",
      },
    },
    h3: {
      fontSize: "16px",
      fontStyle: "normal",
      lineHeight: "29px",
      fontWeight: 400,
      [theme.breakpoints.up("sm")]: {
        fontSize: "20px",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "22px",
      },
    },
    h4: {
      fontSize: "14px",
      fontStyle: "normal",
      lineHeight: "24px",
      fontWeight: 400,
      [theme.breakpoints.up("sm")]: {
        fontSize: "16px",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "20px",
      },
    },
    button: {
      fontSize: "13px",
      fontStyle: "normal",
      lineHeight: "normal",
      fontWeight: 500,
    },
    body1: {
      fontSize: "12px",
      fontStyle: "normal",
      lineHeight: "22px",
      fontWeight: 400,
      [theme.breakpoints.up("sm")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "18px",
      },
    },
  },
});

export default theme;
