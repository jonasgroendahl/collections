import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#8bf1da",
      main: "#36dcb6",
      dark: "#4ead91",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#3c3c3b",
      dark: "#ba000d",
      contrastText: "#000"
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Montserrat"],
    body1: {
      fontWeight: 700
    },
    button: {
      fontWeight: 700
    },
    h4: {
      // headline
      fontWeight: 900,
      fontStyle: "italic",
      textTransform: "uppercase"
    },
    h5: {
      fontWeight: 900,
      textTransform: "uppercase",
      color: "#3c3c3b",
      fontStyle: "italic"
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0
      },
      contained: {
        boxShadow: "none"
      }
    },
    MuiCard: {
      root: {
        borderRadius: 10
      }
    }
  }
});

export default theme;
