import { Box, useTheme } from "@mui/material";
import "./styles.css";
import GameNameInput from "../components/GameNameInput";

const CreateGameScreen = () => {
  const theme = useTheme();
  return (
    <Box className="main" bgcolor={theme.palette.primary.main}>
      <GameNameInput />
    </Box>
  );
};

export default CreateGameScreen;
