import React, { useContext, useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import axios from "axios";
import { Button, ButtonProps, TableHead } from "@mui/material";
import "./CurrentGamesTable.css";
import { io } from "socket.io-client";
import { useNavigate, useNavigation } from "react-router";
import { UserContext, UserDispatchContext } from "../context/UserContext";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const CurrentGamesTable = () => {
  const navigate = useNavigate();
  const setUser = useContext(UserDispatchContext);
  const playerName = useContext(UserContext).playerName;

  const [games, setGames] = useState<any>([]);
  const [paginatedGames, setPaginatedGames] = useState<any>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const socket = io(`${process.env.REACT_APP_API_URL}`, {
    transports: ["websocket"],
  });

  const CellButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(theme.palette.success.main),
    backgroundColor: theme.palette.success.main,
    fontSize: 40,
    borderRadius: 10,
    padding: 10,
    transition: "transform 0.2s",
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
      transform: "translate(0px, -8%)",
    },
  }));

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleCellClick = (e: any) => {
    const uuid = e.target.value;
    setUser({
      playerName: playerName,
      uuid: uuid ? uuid : "",
      symbol: "O",
    });
    socket.connect();
    socket.emit("join", { friendName: playerName, roomId: uuid });

    navigate("/tictactoe");
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/game/get`).then((res) => {
      const unfinishedGames = !res.data.games
        ? []
        : res.data.games.filter(
            (g: any) => g.finished === false && g.playersInvolved.length < 2
          );
      setGames(unfinishedGames);
    });
  }, []);

  useEffect(() => {
    setPaginatedGames(
      games.slice(
        page * rowsPerPage,
        Math.min((page + 1) * rowsPerPage),
        games.length
      )
    );
  }, [games, page, rowsPerPage]);

  return (
    <div className="current-games__main">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="current-games__header">
            <TableRow>
              <TableCell sx={{ fontSize: 40 }}>Current games</TableCell>
              <TableCell sx={{ fontSize: 40 }} align="right">
                Players
              </TableCell>
              <TableCell sx={{ fontSize: 40 }} align="right">
                Time started
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!paginatedGames
              ? "loading"
              : paginatedGames.map((game: any) => (
                  <TableRow
                    key={game._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <CellButton value={game._id} onClick={handleCellClick}>
                        {game.gameName}
                      </CellButton>
                    </TableCell>
                    <TableCell sx={{ fontSize: 30 }} align="right">
                      {game.playersInvolved.length === 2
                        ? game.playersInvolved[0] +
                          ", " +
                          game.playersInvolved[1]
                        : game.playersInvolved[0]}
                    </TableCell>
                    <TableCell sx={{ fontSize: 30 }} align="right">
                      {new Date(game.createdAt).toLocaleString("en-US", {
                        timeZone: "Asia/Shanghai",
                      })}
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={games.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CurrentGamesTable;
