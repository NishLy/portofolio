import { Stack, Typography, useTheme } from "@mui/material";

const WelcomeText = () => {
  const theme = useTheme();
  return (
    <>
      <Stack
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          color={theme.palette.text.primary}
          fontWeight={700}
          padding={theme.spacing(2)}
        >
          Welcome to My Portofolio!
        </Typography>
      </Stack>
    </>
  );
};

export default WelcomeText;
