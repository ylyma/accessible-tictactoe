import React, { useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import "./GameNameInput.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const GameNameInput = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [gameName, setGameName] = useState<string>("");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGameName(event.target.value);
  };
  const [uuid, setUuid] = useState<string>("");
  const playerName = state.playerName;
  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/game/post", {
        gameName: gameName,
        playersInvolved: [playerName],
        boardState: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        finished: false,
      })
      .then((res) => {
        setUuid(res.data.newGame);
      });
    navigate("/matching", { state: { gameName, uuid, playerName } });
  };

  return (
    <form className="game-name-input__container" onSubmit={handleSubmit}>
      <Typography
        className="game-name-input__instruction"
        variant="h5"
        gutterBottom
      >
        Enter the game name below:
      </Typography>
      <TextField
        className="game-name-input__textinput"
        required
        id="filled-required"
        label="Required"
        variant="filled"
        color="secondary"
        value={gameName}
        onChange={handleInput}
      />
      <Button
        className="game-name-input__enter-button"
        variant="contained"
        color="secondary"
        type="submit"
        sx={{ fontSize: 30 }}
        onSubmit={handleSubmit}
      >
        enter
      </Button>
    </form>
  );
};

export default GameNameInput;
