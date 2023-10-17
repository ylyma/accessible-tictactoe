import { Box, useTheme } from "@mui/material";
import React, { useContext } from "react";
import PastGamesTable from "../components/PastGamesTable";
import { UserContext } from "../context/UserContext";

const PastGameScreen = () => {
  const theme = useTheme();
  const playerName = useContext(UserContext).playerName;
  return (
    <Box className="main" bgcolor={theme.palette.secondary.dark}>
      <PastGamesTable playerName={playerName} />
    </Box>
  );
};

export default PastGameScreen;
