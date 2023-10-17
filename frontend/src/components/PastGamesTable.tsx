import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const PastGamesTable = () => {
  const [games, setGames] = useState<any>();

  const getGames = async () => {
    try {
      const response = await fetch("http://localhost:3001/game/get", {
        method: "GET",
      }).then((res) => res.json());
      console.log("getting data");
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setGames(getGames());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!games ? "Loading..." : games}</p>
      </header>
    </div>
  );
};

export default PastGamesTable;
