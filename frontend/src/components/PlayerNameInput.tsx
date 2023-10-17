import React, { useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import "./PlayerNameInput.css";
import { useNavigate } from "react-router-dom";

const PlayerNameInput = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [playerName, setPlayerName] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  return (
    <form
      className="player-name-input__container"
      onSubmit={() => navigate("/menu", { state: { playerName } })}
    >
      <Typography className="instruction" variant="h5" gutterBottom>
        Enter your player name below:
      </Typography>
      <TextField
        className="textinput"
        required
        id="filled-required"
        label="Required"
        variant="filled"
        color="secondary"
        value={playerName}
        onChange={handleInput}
      />
      <Button
        className="enter-button"
        variant="contained"
        color="secondary"
        type="submit"
        sx={{ fontSize: 30 }}
        onSubmit={() => navigate("/menu", { state: { playerName } })}
      >
        enter
      </Button>
    </form>
  );
};

export default PlayerNameInput;
