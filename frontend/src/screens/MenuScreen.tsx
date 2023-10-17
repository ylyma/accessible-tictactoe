import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import "./styles.css";
import { useLocation } from "react-router-dom";
import MenuButtonContainer from "../components/MenuButtonContainer";

const MenuScreen = () => {
  const theme = useTheme();
  const { state } = useLocation();

  return (
    <Box className="main" bgcolor={theme.palette.primary.main}>
      <Typography className="title" variant="h1">
        Hi, {state.playerName}!
      </Typography>
      <MenuButtonContainer playerName={state.playerName} />
    </Box>
  );
};

export default MenuScreen;
