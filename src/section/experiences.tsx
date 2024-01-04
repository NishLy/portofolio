import { Box, Stack, Container, useTheme } from "@mui/material";
import Coursel from "../components/Coursel/Coursel";

export default function Experiences() {
  const theme = useTheme();
  return (
    <Box
      id="experiences"
      sx={{
        width: "100vw",
        minHeight: "100vh",
        color: theme.palette.text.primary,
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
        padding={theme.spacing(5)}
        paddingTop={theme.spacing(15)}
        height="100%"
      >
        <Container
          sx={{
            width: "fit-content",
            borderRadius: "1rem",
            border: "2px solid var(--accent-color)",
            padding: ".2rem .5rem",
            backgroundColor: "#80008030",
          }}
        >
          Experiences
        </Container>
        {/* <Typography fontWeight={800} variant="h5">
                  My Experiences
                </Typography> */}

        <Coursel
          data={[
            {
              category: [
                "website",
                "next",
                "backend",
                "frontend",
                "react",
                "trpc",
              ],
              date: "2023-05-06T08:21:04+00:00",
              thumbnail: "./images/pskuy.png",
              title: "Pskuy",
              url: "https://github.com/NishLy/pskuy",
            },
            {
              category: ["website", "frontend", "react"],
              date: "2022-06-06T08:21:04+0000",
              thumbnail: "./images/quizz.png",
              title: "Quizz",
              url: "https://github.com/NishLy/quizz",
            },
            {
              category: ["website", "frontend"],
              date: "2022-06-06T08:21:04+0000",
              thumbnail: "./images/periodicTable.png",
              title: "Periodic Table",
              url: "https://github.com/NishLy/periodicTable",
            },
            {
              category: ["backend", "nestjs"],
              date: "2023-09-06T08:21:04+0000",
              thumbnail: "./images/discord.png",
              title: "Discord Clone Backend",
              url: "https://github.com/NishLy/discord-clone-backend",
            },
            {
              category: ["front", "tailwind", "backend", "express"],
              date: "2023-07-06T08:21:04+0000",
              thumbnail: "./images/uploader.png",
              title: "Uploader",
              url: "https://github.com/NishLy/uploader_test",
            },
            {
              category: ["backend", "express"],
              date: "2023-07-06T08:21:04+0000",
              thumbnail: "./images/byu.png",
              title: "Walkwise Backend",
              url: "https://github.com/adhipaw/backend-byu",
            },
            {
              category: ["frontend", "react"],
              date: "2023-07-06T08:21:04+0000",
              thumbnail: "./images/byu.png",
              title: "Note App",
              url: "https://github.com/adhipaw/react-note",
            },
          ]}
        />
      </Stack>
    </Box>
  );
}
