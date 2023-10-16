import React from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import "./PlayerNameInput.css";

type Props = {};

const PlayerNameInput = ({}: Props) => {
  const theme = useTheme();
  return (
    <Box className="box">
      <Typography className="instruction" variant="h6" gutterBottom>
        Enter your player name below:
      </Typography>
      <TextField
        className="textinput"
        required
        id="filled-required"
        label="Required"
        defaultValue="Player1"
        variant="filled"
        color="secondary"
      />
      <Button className="enter-button" variant="contained" color="secondary">
        enter
      </Button>
    </Box>
  );
};

export default PlayerNameInput;
