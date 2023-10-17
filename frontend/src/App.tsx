import React from "react";
import "./App.css";
import TitleScreen from "./screens/TitleScreen";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./assets/theme";
import { Route, Routes } from "react-router-dom";
import MenuScreen from "./screens/MenuScreen";
import CreateGameScreen from "./screens/CreateGameScreen";
import JoinGameScreen from "./screens/JoinGameScreen";
import PastGameScreen from "./screens/PastGameScreen";
import MatchingScreen from "./screens/MatchingScreen";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Routes>
          <Route path="/" element={<TitleScreen />} />
          <Route path="/menu" element={<MenuScreen />} />
          <Route path="/creategame" element={<CreateGameScreen />} />
          <Route path="/joingame" element={<JoinGameScreen />} />
          <Route path="/pastgames" element={<PastGameScreen />} />
          <Route path="/matching" element={<MatchingScreen />} />
          <Route path="/tictactoe" element={<MatchingScreen />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
