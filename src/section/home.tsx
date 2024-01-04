import { Box, useTheme } from "@mui/material";
import WelcomeText from "../components/welcome/welcome";

export default function Home() {
  const theme = useTheme();
  return (
    <Box
      id="home"
      component="section"
      alignItems="center"
      justifyContent="center"
      padding={2}
      sx={{
        width: "100vw",
        height: "100vh",
        padding: theme.spacing(2),
      }}
    >
      <WelcomeText />
    </Box>
  );
}
