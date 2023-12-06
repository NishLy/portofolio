import { Typography } from "@mui/material";
import MainWrapper from "./Fade";

const WelcomeText = () => {
  return (
    <MainWrapper>
      <Typography
        variant="h1"
        color="white"
        marginTop={10}
        fontWeight={800}
        maxWidth="70rem"
      >
        Welcome to my portfolio.
      </Typography>
    </MainWrapper>
  );
};

export default WelcomeText;
