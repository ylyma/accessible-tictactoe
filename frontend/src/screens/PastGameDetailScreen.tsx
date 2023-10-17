import { Typography } from "@mui/material";
import React, { useState } from "react";
import GameBoard from "../components/GameBoard";
import "./styles.css";

const PastGameDetailScreen = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const handleClick = (i: string | number) => {
    const boardCopy = [...board];
    const index = typeof i == "string" ? parseInt(i) : i;
    // If user click an occupied square or if game is won, return
    if (boardCopy[index]) return;
    // Put an X or an O in the clicked square
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };
  return (
    <div className="main">
      <Typography variant="h2">Moves Taken</Typography>
      <GameBoard squares={board} onClick={handleClick} />
    </div>
  );
};

export default PastGameDetailScreen;
