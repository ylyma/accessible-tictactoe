import { Box, useTheme } from "@mui/material";
import React, { useContext } from "react";
import CurrentGamesTable from "../components/CurrentGamesTable";
import "./styles.css";
import { useLocation } from "react-router";
import { UserContext } from "../context/UserContext";

const JoinGameScreen = () => {
  const theme = useTheme();
  return (
    <Box className="main" bgcolor={theme.palette.secondary.dark}>
      <CurrentGamesTable />
    </Box>
  );
};

export default JoinGameScreen;
