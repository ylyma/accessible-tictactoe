import { Box, useTheme } from "@mui/material";
import React from "react";
import CurrentGamesTable from "../components/CurrentGamesTable";
import "./styles.css";
import { useLocation } from "react-router";

const JoinGameScreen = () => {
  const theme = useTheme();
  const { state } = useLocation();
  return (
    <Box className="main" bgcolor={theme.palette.secondary.dark}>
      <CurrentGamesTable playerName={state.playerName} />
    </Box>
  );
};

export default JoinGameScreen;
