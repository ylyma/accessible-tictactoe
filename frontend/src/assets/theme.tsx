import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#fafaeb",
    },
    secondary: {
      main: "#40559b",
    },
  },
  typography: {
    fontFamily: ["Arial", "Helvetica Neue", "Roboto"].join(","),
    fontSize: 18,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
});
theme.typography.h3 = {
  fontSize: "2.0rem",
  "@media (min-width:600px)": {
    fontSize: "2.4rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.0rem",
  },
};

export default theme;
