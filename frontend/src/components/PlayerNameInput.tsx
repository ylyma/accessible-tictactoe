import React, { useContext, useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import "./PlayerNameInput.css";
import { useNavigate } from "react-router-dom";
import { UserContext, UserDispatchContext } from "../context/UserContext";

const PlayerNameInput = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const setUser = useContext(UserDispatchContext);
  const playerName = useContext(UserContext).playerName;

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ playerName: event.target.value, uuid: "", symbol: "" });
  };

  return (
    <form
      className="player-name-input__container"
      onSubmit={() => navigate("/menu")}
    >
      <Typography
        className="player-name-input__instruction"
        variant="h5"
        gutterBottom
      >
        Enter your player name below:
      </Typography>
      <TextField
        className="player-name-input__textinput"
        required
        id="filled-required"
        label="Required"
        variant="filled"
        color="secondary"
        value={playerName}
        onChange={handleInput}
      />
      <Button
        className="player-name-input__enter-button"
        variant="contained"
        color="secondary"
        type="submit"
        sx={{ fontSize: 30 }}
        onSubmit={() => navigate("/menu")}
      >
        enter
      </Button>
    </form>
  );
};

export default PlayerNameInput;
