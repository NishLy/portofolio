import { Stack, Typography, useTheme } from "@mui/material";
// import style from "./welcome.module.css";

const WelcomeText = () => {
  const theme = useTheme();
  return (
    <>
      <Stack
        // position="fixed"
        // top={0}
        // left={0}
        // zIndex={-100}
        // margin={0}
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        // className={style["welcome"]}
      >
        <Typography
          sx={{
            display: "inline-block",
            fontSize: {
              xs: "52px",
              lg: "100px",
            },
          }}
          variant="h1"
          textAlign="center"
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
