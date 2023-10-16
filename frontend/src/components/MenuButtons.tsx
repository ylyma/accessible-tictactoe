import React from "react";
import { Box, Button, ButtonProps, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./MenuButtons.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LoginIcon from "@mui/icons-material/Login";
import FolderIcon from "@mui/icons-material/Folder";

const MenuButtons = () => {
  const theme = useTheme();

  const CreateButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    backgroundColor: theme.palette.secondary.main,
    marginBottom: 20,
    fontSize: 20,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  }));

  const JoinButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(theme.palette.success.main),
    backgroundColor: theme.palette.success.main,
    marginBottom: 20,
    fontSize: 20,
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
    },
  }));

  const PastButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(theme.palette.warning.main),
    backgroundColor: theme.palette.warning.main,
    marginBottom: 20,
    fontSize: 20,
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  }));
  return (
    <Box className="menu-buttons__container">
      <CreateButton startIcon={<AddBoxIcon />} variant="contained">
        create new game session
      </CreateButton>
      <JoinButton startIcon={<LoginIcon />} variant="contained">
        join existing game session
      </JoinButton>
      <PastButton startIcon={<FolderIcon />} variant="contained">
        view past games
      </PastButton>
    </Box>
  );
};

export default MenuButtons;
