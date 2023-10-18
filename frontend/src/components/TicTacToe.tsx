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
    {props.squares.map((rows: string[], r: number) => {
      return rows.map((col: string, c: number) => {
        const idx = 3 * r + c;
        return (
          <Square key={idx} value={col} onClick={() => props.onClick(idx)} />
        );
      });
    })}
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
    axios.put(`http://localhost:3001/game/${uuid}/${playerName}`, {
      boardState: boardState,
      finished: false,
    });
  };
  const socket = io("http://localhost:3001", {
    transports: ["websocket"],
  });

  const handleClick = (i: string | number) => {
    const index = typeof i == "string" ? parseInt(i) : i;
    const col = index % 3;
    const row = Math.floor(index / 3);
    const newBoardState = [...boardState];
    if (boardState[row][col] !== "") return;
    newBoardState[row][col] = symbol;
    setBoardState(newBoardState);
    socket.emit("move", {
      boardState: newBoardState,
      roomId: uuid,
    });
    // updateBoard();
  };

  socket.on("moved", (boardState) => {
    console.log(boardState);
    setBoardState(boardState);
  });

  useEffect(() => {
    socket.emit("matching", uuid);
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
