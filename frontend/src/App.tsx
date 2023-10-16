import React from "react";
import "./App.css";
import TitleScreen from "./screens/TitleScreen";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./assets/theme";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Routes>
          <Route path="/" element={<TitleScreen />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
