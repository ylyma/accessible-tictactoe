import { Box } from "@mui/material";
import React from "react";
import CurrentGamesTable from "../components/CurrentGamesTable";
import "./styles.css";

const JoinGameScreen = () => {
  return (
    <Box className="main">
      <CurrentGamesTable />
    </Box>
  );
};

export default JoinGameScreen;
