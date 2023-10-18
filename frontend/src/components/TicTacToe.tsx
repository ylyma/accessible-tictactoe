import React, { ReactNode, useContext, useEffect, useState } from "react";
import "./TicTacToe.css";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { io } from "socket.io-client";

const Square = (props: { value: ReactNode; onClick: () => void }) => (
  <button className="ttt__square" onClick={props.onClick}>
    {props.value}
  </button>
);

const Board = (props: {
  squares: string[][];
  onClick: (i: number) => void;
}) => (
  <div className="ttt__board">
    {props.squares.map((squares) =>
      squares.map((square: string, i: number) => (
        <Square key={i} value={square} onClick={() => props.onClick(i)} />
      ))
    )}
  </div>
);

const TicTacToe = () => {
  const [boardState, setBoardState] = useState<string[][]>(
    Array(3)
      .fill("")
      .map(() => Array(3).fill(""))
  );
  const uuid = useContext(UserContext).uuid;
  const playerName = useContext(UserContext).playerName;
  const symbol = useContext(UserContext).symbol;
  const updateBoard = () => {
    axios.put(`http://localhost:3001/${uuid}/${playerName}`, {
      boardState: boardState,
    });
  };
  const socket = io("http://localhost:3001", {
    transports: ["websocket"],
    autoConnect: false,
    query: {
      roomId: uuid,
    },
  });
  const handleClick = (i: string | number) => {
    const index = typeof i == "string" ? parseInt(i) : i;
    const row = index % 3;
    const col = Math.floor(index / 3);
    const newBoardState = [...boardState];
    if (boardState[row][col] !== "") return;
    newBoardState[row][col] = symbol;
    setBoardState(newBoardState);

    socket.emit("move", {
      boardState: boardState,
      roomId: uuid,
    });
    updateBoard();
  };

  useEffect(() => {
    socket.on("move", (boardState) => {
      setBoardState(boardState);
    });
  });

  return (
    <div className="ttt__main">
      <Board squares={boardState} onClick={handleClick} />
      <div>
        <p>hi</p>
      </div>
    </div>
  );
};

export default TicTacToe;
