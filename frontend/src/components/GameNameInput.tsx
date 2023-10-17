import React, { useContext, useEffect, useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import "./GameNameInput.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext, UserDispatchContext } from "../context/UserContext";

// type Props = {
//   playerName: string;
// };
const GameNameInput = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [gameName, setGameName] = useState<string>("");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGameName(event.target.value);
  };
  const playerName = useContext(UserContext).playerName;
  const setUser = useContext(UserDispatchContext);
  const handleSubmit = () => {
    console.log(playerName);
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
        setUser({ playerName: playerName, uuid: res.data.newGame._id });
        console.log(res);
      });
    navigate("/matching");
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
        onSubmit={() => {
          handleSubmit();
        }}
      >
        enter
      </Button>
    </form>
  );
};

export default GameNameInput;
