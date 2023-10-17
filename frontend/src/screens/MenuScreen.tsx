import React, { useContext } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import "./styles.css";
import MenuButtonContainer from "../components/MenuButtonContainer";
import { UserContext } from "../context/UserContext";

const MenuScreen = () => {
  const theme = useTheme();
  const playerName = useContext(UserContext).playerName;

  return (
    <Box className="main" bgcolor={theme.palette.primary.main}>
      <Typography className="title" variant="h1">
        Hi, {playerName}!
      </Typography>
      <MenuButtonContainer />
    </Box>
  );
};

export default MenuScreen;
