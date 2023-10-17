import React, { useState } from "react";
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
import GameScreen from "./screens/GameScreen";
import { UserContext, UserDispatchContext } from "./context/UserContext";
import PastGameDetailScreen from "./screens/PastGameDetailScreen";

function App() {
  const [playerName, setPlayerName] = useState<string>("");
  const [user, setUser] = useState({ playerName: "", uuid: "" });
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={user}>
        <UserDispatchContext.Provider value={setUser}>
          <Box className="App">
            <Routes>
              <Route path="/" element={<TitleScreen />} />
              <Route path="/menu" element={<MenuScreen />} />
              <Route path="/creategame" element={<CreateGameScreen />} />
              <Route path="/joingame" element={<JoinGameScreen />} />
              <Route path="/pastgames" element={<PastGameScreen />} />
              <Route path="/matching" element={<MatchingScreen />} />
              <Route path="/tictactoe" element={<GameScreen />} />
              <Route
                path="/pastgamedetail"
                element={<PastGameDetailScreen />}
              />
            </Routes>
          </Box>
        </UserDispatchContext.Provider>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
