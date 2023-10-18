import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { io } from "socket.io-client";
import { UserContext } from "../context/UserContext";
import { CircularProgress } from "@mui/material/";

const MatchingScreen = () => {
  const navigate = useNavigate();
  const playerName = useContext(UserContext).playerName;
  const uuid = useContext(UserContext).uuid;

  const socket = io(`${process.env.REACT_APP_API_URL}`, {
    transports: ["websocket"],
  });

  socket.on("friendJoined", (friendName) => {
    axios.put(`${process.env.REACT_APP_API_URL}/game/${uuid}/${playerName}`, {
      playersInvolved: [playerName, friendName],
      boardState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      finished: false,
    });
    navigate("/tictactoe");
  });

  useEffect(() => {
    socket.emit("matching", uuid);
  }, []);
  return (
    <div>
      <p className="matching__text">FINDING PLAYERS...</p>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress color="success" />
      </Box>
    </div>
  );
};

export default MatchingScreen;
