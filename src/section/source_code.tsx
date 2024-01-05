import { Stack, Typography, Button, useTheme } from "@mui/material";
import { Matrix } from "../components/matrix/matrix";
import Tag from "../components/tag";

export default function SourceCode() {
  const theme = useTheme();
  return (
    <Matrix
      style={{
        width: "100vw",
        height: "100vh",
      }}
      color="#800080"
      background="#06091810"
      fontSize={20}
      speed={50}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100%"
        spacing={3}
        padding={theme.spacing(5)}
        sx={{
          background:
            "radial-gradient(circle, rgba(6,9,24,.1) 5%, rgba(6,9,24,1) 70%)",
        }}
      >
        <Tag>SOURCE CODE</Tag>
        <Typography
          variant="h3"
          textAlign={"center"}
          fontWeight={800}
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          Behind the Scene
        </Typography>
        <Typography
          variant="body1"
          textAlign={"center"}
          sx={{
            color: theme.palette.text.secondary,
          }}
        >
          This website is built using React and Typescript. The source code is
          available on Github.
        </Typography>
        <Button
          onClick={() => {
            window.open("https://github.com/NishLy/portofolio", "_blank");
          }}
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "var(--accent-color)",
            color: "white",
          }}
        >
          Source Code
        </Button>
      </Stack>
    </Matrix>
  );
}
