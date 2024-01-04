import { Stack, Container, Typography, Button, useTheme } from "@mui/material";
import { Matrix } from "../components/matrix/matrix";

export default function SourceCode() {
  const theme = useTheme();
  return (
    <Matrix
      style={{
        width: "100vw",
        height: "100vh",
        borderBottom: "1px solid #80008050",
      }}
      color="#800080"
      background="#06091810"
      fontSize={20}
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
        <Container
          sx={{
            width: "fit-content",
            borderRadius: "1rem",
            border: "2px solid var(--accent-color)",
            padding: ".2rem .5rem",
            backgroundColor: "#80008030",
            color: theme.palette.text.primary,
            textTransform: "uppercase",
          }}
        >
          SOURCE CODE
        </Container>
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
          onClick={() => {}}
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
