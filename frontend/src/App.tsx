import React from "react";
import "./App.css";
import TitleScreen from "./screens/TitleScreen";
import { Box, ThemeProvider, useTheme } from "@mui/material";
import theme from "./assets/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <TitleScreen />
      </Box>
    </ThemeProvider>
  );
}

export default App;
