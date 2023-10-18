import { Box, useTheme } from "@mui/material";
import React, { useContext } from "react";
import PastGamesTable from "../components/PastGamesTable";
import { UserContext } from "../context/UserContext";

const PastGameScreen = () => {
  const theme = useTheme();
  return (
    <Box className="main" bgcolor={theme.palette.secondary.dark}>
      <PastGamesTable />
    </Box>
  );
};

export default PastGameScreen;
