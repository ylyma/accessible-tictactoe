import React from "react";
import PlayerNameInput from "../components/PlayerNameInput";
import { Box, Typography, useTheme } from "@mui/material";
import "./styles.css";

const TitleScreen = () => {
  const theme = useTheme();
  return (
    <Box className="main" bgcolor={theme.palette.primary.main}>
      <Box className="title">
        <Typography variant="h2" component="h2">
          Accessible
        </Typography>
        <Typography variant="h1" component="h1">
          Tic-Tac-Toe
        </Typography>
      </Box>

      <PlayerNameInput />
    </Box>
  );
};

export default TitleScreen;
