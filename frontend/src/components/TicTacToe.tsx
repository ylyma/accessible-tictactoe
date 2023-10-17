import React, { ReactNode, useEffect, useState } from "react";
import "./TicTacToe.css";

const Square = (props: { value: ReactNode; onClick: () => void }) => (
  <button className="ttt__square" onClick={props.onClick}>
    {props.value}
  </button>
);

const Board = (props: {
  squares: any[];
  onClick: (i: string | number) => void;
}) => (
  <div className="ttt__board">
    {props.squares.map((square: any, i: string | number) => (
      <Square key={i} value={square} onClick={() => props.onClick(i)} />
    ))}
  </div>
);

const TicTacToe = () => {
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
    <>
      <Board squares={board} onClick={handleClick} />
      <div>
        <p>hi</p>
      </div>
    </>
  );
};

export default TicTacToe;
