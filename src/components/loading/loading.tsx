import { Stack, LinearProgress } from "@mui/material";
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
    >
      <LinearProgress value={progress.progress} />
    </Stack>
  );
};

export default Loading;
