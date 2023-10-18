import React, { ReactNode, useContext, useEffect, useState } from "react";
import "./TicTacToe.css";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { io } from "socket.io-client";

const Square = (props: {
  disabled: boolean;
  value: ReactNode;
  onClick: () => void;
}) => (
  <button
    disabled={props.disabled}
    className="ttt__square"
    onClick={props.onClick}
  >
    {props.value}
  </button>
);

const Board = (props: {
  disabled: boolean;
  squares: string[][];
  onClick: (i: number) => void;
}) => (
  <div className="ttt__board">
    {props.squares.map((rows: string[], r: number) => {
      return rows.map((col: string, c: number) => {
        const idx = 3 * r + c;
        return (
          <Square
            disabled={props.disabled}
            key={idx}
            value={col}
            onClick={() => props.onClick(idx)}
          />
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
  const [message, setMessage] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [win, setWin] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>("");

  const updateBoard = () => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/game/${uuid}/${playerName}`, {
        boardState: boardState,
        finished: false,
      })
      .then((res) => {
        console.log(res.data.game.state);
        if (res.data.game.state) {
          setWin(true);
          setWinner(res.data.game.winner);
        }
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
      player: playerName,
    });
    updateBoard();
    setDisabled(true);
    setMessage("Please wait for opponent's move!");
  };

  useEffect(() => {
    socket.on("moved", (boardState, player) => {
      console.log(boardState);
      setBoardState(boardState);
      if (player !== playerName) {
        setDisabled(false);
        setMessage("Your turn!");
      }
    });

    socket.on("game over", (winner) => {
      setDisabled(true);
      if (winner == playerName) {
        setMessage("You win!");
      } else {
        setMessage("You lose!");
      }

      console.log("print");
    });
    socket.emit("matching", uuid);
    if (win) {
      socket.emit("win", { roomId: uuid, winner: playerName });
      console.log("game over");
      return () => {
        socket.disconnect();
      };
    }
  }, [win]);

  return (
    <div className="ttt__main">
      <Board disabled={disabled} squares={boardState} onClick={handleClick} />
      <div>
        <p className="ttt__msg">{message}</p>
      </div>
    </div>
  );
};

export default TicTacToe;
