import React, { useContext, useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import "./styles.css";
import GameNameInput from "../components/GameNameInput";
import { useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const CreateGameScreen = () => {
  const theme = useTheme();
  const { state } = useLocation();
  console.log(state);
  const playerName = useContext(UserContext).playerName;
  return (
    <Box className="main" bgcolor={theme.palette.primary.main}>
      <GameNameInput />
    </Box>
  );
};

export default CreateGameScreen;
