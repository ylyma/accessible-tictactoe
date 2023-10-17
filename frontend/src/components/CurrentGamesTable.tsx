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

const CurrentGamesContainer = () => {
  const [games, setGames] = useState<any>();

  useEffect(() => {
    fetch("/game/get")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map((game: any) => (
            <TableRow
              key={game.gameName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {game.gameName}
              </TableCell>
              <TableCell align="right">{game.currentPlayer}</TableCell>
              <TableCell align="right">{game.playersInvolved}</TableCell>
              <TableCell align="right">{game.winner}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CurrentGamesContainer;
