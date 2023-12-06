import { Stack, LinearProgress, Typography } from "@mui/material";
import { useProgress } from "@react-three/drei";

const Loading = () => {
  const progress = useProgress();
  return (
    <Stack
      width="100vw"
      height="100vh"
      sx={{
        backgroundColor: "black",
      }}
      alignItems={"center"}
      justifyContent={"center"}
      color={"white"}
      spacing={2}
    >
      <LinearProgress
        value={(progress.loaded / progress.total) * 100}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "5px",
        }}
      />
      <Typography variant="h1">
        {((progress.loaded / progress.total) * 100).toFixed(1)} %
      </Typography>
      <Typography variant="body1" marginTop="10">
        *this procces might take while depending on your internet connection
      </Typography>
    </Stack>
  );
};

export default Loading;
