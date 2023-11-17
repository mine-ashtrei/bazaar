import { createTheme } from "@mui/material/styles";

const primary = "#2A3843";

export const themeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: primary,
    },
    secondary: {
      main: "#ff5",
    },
    info_primary: {
      main: "#D3C5B7",
    },
    info_secondary: {
      main: "#CFE0E2",
    },
    info_ternary: {
      main: "#508980",
    },
    background_secondary: {
      main: "#F2F5F7",
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
          backgroundColor: primary,
        },
      },
    },
  },
});

export default themeOptions;
