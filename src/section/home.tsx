import { Box, useTheme } from "@mui/material";
import WelcomeText from "../components/welcome/welcome";

import style from "./home.module.css";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <div className={style["slider-thumb"]}></div>
      <Box
       
        component="section"
        alignItems="center"
        justifyContent="center"
        padding={2}
        sx={{
          width: "100vw",
          height: "100vh",
          padding: theme.spacing(2),
          position: "fixed",
          top: 0,
          left: 0,

          zIndex: -10,
        }}
      >
        <WelcomeText />
      </Box>
    </>
  );
}
