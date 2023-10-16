import React from "react";
import MenuButtons from "../components/MenuButtons";
import { Box, Typography, useTheme } from "@mui/material";
import "./MenuScreen.css";
import { useLocation } from "react-router-dom";

const MenuScreen = () => {
  const theme = useTheme();
  const { state } = useLocation();

  return (
    <Box className="main" bgcolor={theme.palette.primary.main}>
      <Typography className="title" variant="h3">
        Hi, {state.playerName}!
      </Typography>
      <MenuButtons />
    </Box>
  );
};

export default MenuScreen;
