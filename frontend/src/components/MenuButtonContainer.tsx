import React from "react";
import { Box, Button, ButtonProps, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./MenuButtonContainer.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LoginIcon from "@mui/icons-material/Login";
import FolderIcon from "@mui/icons-material/Folder";
import { useNavigate } from "react-router-dom";

type Props = {
  playerName: string;
};

const MenuButtonContainer = ({ playerName }: Props) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const CreateButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    backgroundColor: theme.palette.secondary.main,
    marginBottom: 20,
    fontSize: 40,
    height: 100,
    borderRadius: 10,
    transition: "transform 0.2s",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
      transform: "translate(0px, -8%)",
    },
  }));

  const JoinButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(theme.palette.success.main),
    backgroundColor: theme.palette.success.main,
    marginBottom: 20,
    fontSize: 40,
    height: 100,
    borderRadius: 10,
    transition: "transform 0.2s",
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
      transform: "translate(0px, -8%)",
    },
  }));

  const PastButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(theme.palette.warning.main),
    backgroundColor: theme.palette.warning.main,
    marginBottom: 20,
    fontSize: 40,
    height: 100,
    borderRadius: 10,
    transition: "transform 0.2s",
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
      transform: "translate(0px, -8%)",
    },
  }));
  return (
    <Box className="menu-buttons__container">
      <CreateButton
        variant="contained"
        onClick={() => navigate("/creategame", { state: playerName })}
      >
        create new game session
      </CreateButton>
      <JoinButton
        variant="contained"
        onClick={() => navigate("/joingame", { state: playerName })}
      >
        join existing game session
      </JoinButton>
      <PastButton variant="contained" onClick={() => navigate("/pastgames")}>
        view past games
      </PastButton>
    </Box>
  );
};

export default MenuButtonContainer;
