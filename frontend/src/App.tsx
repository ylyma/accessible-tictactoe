import React from "react";
import "./App.css";
import TitleScreen from "./screens/TitleScreen";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./assets/theme";
import { Route, Routes } from "react-router-dom";
import MenuScreen from "./screens/MenuScreen";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Routes>
          <Route path="/" element={<TitleScreen />} />
          <Route path="/menu" element={<MenuScreen />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
