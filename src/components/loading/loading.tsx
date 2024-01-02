import { LinearProgress, Stack, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Stack
      width="100vw"
      height="100vh"
      sx={{
        backgroundColor: "var(--background-color)",
      }}
      alignItems={"center"}
      justifyContent={"center"}
      color={"white"}
      spacing={2}
    >
      <LinearProgress color="secondary" />

      <Typography variant="body1" marginTop="10">
        *this page is not optimized for mobile devices
      </Typography>
    </Stack>
  );
};

export default Loading;
