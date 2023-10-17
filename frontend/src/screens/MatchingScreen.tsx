import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { io } from "socket.io-client";

const MatchingScreen = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isFull, setIsFull] = useState<boolean>(false);
  const [friendName, setFriendName] = useState<string>("");

  const socket = io("http://localhost:3001", {
    transports: ["websocket"],
    query: {
      roomId: state.uuid,
    },
  });

  const onRoomFull = () => {
    axios.put("http://localhost:3001", {
      playersInvolved: [state.playerName, friendName],
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
