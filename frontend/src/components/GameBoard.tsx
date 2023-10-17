import React, { ReactNode } from "react";
import "./GameBoard.css";

const Square = (props: { value: ReactNode; onClick: () => void }) => (
  <button className="game-board__square" onClick={props.onClick}>
    {props.value}
  </button>
);

const GameBoard = (props: {
  squares: any[];
  onClick: (i: string | number) => void;
}) => (
  <div className="game-board__board">
    {props.squares.map((square: any, i: string | number) => (
      <Square key={i} value={square} onClick={() => props.onClick(i)} />
    ))}
  </div>
);

export default GameBoard;
