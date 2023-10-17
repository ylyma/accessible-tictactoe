import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { io } from "socket.io-client";
import { UserContext } from "../context/UserContext";

const MatchingScreen = () => {
  const navigate = useNavigate();
  const [isFull, setIsFull] = useState<boolean>(false);
  const playerName = useContext(UserContext).playerName;
  const uuid = useContext(UserContext).uuid;
  const [friendName, setFriendName] = useState<string>("");

  const socket = io("http://localhost:3001", {
    transports: ["websocket"],
    query: {
      roomId: uuid,
    },
  });

  const onRoomFull = () => {
    axios.put("http://localhost:3001", {
      playersInvolved: [playerName, friendName],
    });
    navigate("/tictactoe");
  };

  useEffect(() => {
    socket.on("friendJoined", (friendName) => {
      setIsFull(true);
      setFriendName(friendName);
      onRoomFull();
    });
    return function cleanup() {
      socket.off("msg2");
    };
  }, [socket]);

  return <Box></Box>;
};

export default MatchingScreen;
