import { createTheme } from "@mui/material/styles";

const desertColor = "#e7dfc6";
const desertColorDark = "#E4D6A7";

export const themeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#314049",
    },
    secondary: {
      main: "#ff5",
    },
    desertDark: {
      main: desertColorDark,
    },
    desert: {
      main: desertColor,
    },
    vegetation: {
      main: "#c1d5a4",
    },
    life: {
      main: "#b86f52",
    },
  },
  direction: "rtl",
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "default",
      },
      styleOverrides: {
        colorDefault: {
          backgroundColor: desertColor,
        },
      },
    },
  },
});

export default themeOptions;
