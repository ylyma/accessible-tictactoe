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
import axios from "axios";

const PastGamesTable = () => {
  const [games, setGames] = useState<any>();

  useEffect(() => {
    axios.get("http://localhost:3001/game/get").then((res) => {
      setGames(res.data.games);
    });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Past games</TableCell>
            <TableCell align="right">Players</TableCell>
            <TableCell align="right">Winner</TableCell>
            <TableCell align="right">Time started</TableCell>
            <TableCell align="right">Time ended</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!games
            ? "loading"
            : games.map((game: any) => (
                <TableRow
                  key={game.gameName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {game.gameName}
                  </TableCell>
                  <TableCell align="right">
                    {game.playersInvolved[0] + ", " + game.playersInvolved[1]}
                  </TableCell>
                  <TableCell align="right">{game.winner}</TableCell>
                  <TableCell align="right">{game.createdAt}</TableCell>
                  <TableCell align="right">{game.finishedAt}</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PastGamesTable;
