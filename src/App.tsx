import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { EmailRounded, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { useEffect, useState } from "react";
import WelcomeText from "./components/welcome/welcome";
import Coursel from "./components/Coursel/Coursel";
import TypeWriter from "./components/Typewritter/TypeWriter";
import Loading from "./components/loading/loading";
import "./App.css";
import Background from "./components/background/background";
import Navbar from "./components/navbar/navbar";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#010205",
      },
    },
  });
  return (
    <>
      <Background />
      {!loaded && <Loading />}
      {loaded && (
        <>
          <div
            className="cover"
            style={{ backgroundColor: theme.palette.background.default }}
          ></div>
          <ThemeProvider theme={theme}>
            <Navbar />
            <Box
              id="home"
              sx={{
                width: "100vw",
                height: "100vh",
              }}
            >
              <WelcomeText />
              <Stack
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  padding: theme.spacing(5),
                  paddingRight: theme.spacing(15) + " !important",
                  paddingLeft: theme.spacing(15) + " !important",
                }}
                direction="row"
                spacing={theme.spacing(3)}
              >
                <IconButton
                  title="Github"
                  onClick={() => {
                    window.open("https://github.com/NishLy");
                  }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  title="Github 2"
                  onClick={() => {
                    window.open("https://github.com/adhipaw");
                  }}
                >
                  <GitHub sx={{ color: "purple" }} />
                </IconButton>
                <IconButton
                  title="Linkedin"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/adhi-pamungkas-wijayadi-7362a9283/"
                    );
                  }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  title="Instagram"
                  onClick={() => {
                    window.open("https://www.instagram.com/adhipaaw_/");
                  }}
                >
                  <Instagram />
                </IconButton>
              </Stack>
            </Box>
            <Box
              id="about"
              style={{
                width: "100vw",
                color: theme.palette.text.primary,
                borderBottom: "1px solid #80008050",
              }}
            >
              <Grid container width="100%" height="100%" direction="row">
                <Grid item xs={12} md={6}>
                  <img
                    src="./images/me.jpg"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100vh",
                      flexShrink: 0,
                    }}
                    alt="me"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack
                    padding={15}
                    justifyContent="center"
                    spacing={5}
                    boxSizing="border-box"
                    height="100%"
                    flexBasis="1/2"
                  >
                    <Container
                      sx={{
                        width: "fit-content",
                        borderRadius: "1rem",
                        border: "1px solid purple",
                        padding: ".3rem .5rem",
                        backgroundColor: "#80008030",
                      }}
                    >
                      About
                    </Container>
                    <Typography
                      fontWeight={800}
                      variant="h2"
                      sx={{ height: "2rem" }}
                    >
                      <TypeWriter
                        sequence={[
                          { text: "Hello, I'am Adhi", waitTime: 5000 },
                          { text: "Web Developer", waitTime: 5000 },
                          { text: "Flutter Developer", waitTime: 5000 },
                          { text: "Problem Solver", waitTime: 5000 },
                        ]}
                        speed={100}
                        repeat={Infinity}
                      />
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                      }}
                    >
                      Enthusiastic and driven undergraduate student at STIMIK
                      Widya Pratama with a passion for full-stack website
                      development.
                      <b style={{ color: theme.palette.text.primary }}>
                        {" "}
                        Possesses a strong foundation in JavaScript and its
                        ecosystem, including front-end frameworks like React and
                        back-end technologies like Node.js.
                      </b>{" "}
                      Eager to contribute technical expertise and
                      problem-solving skills to dynamic and innovative projects.
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            <Box
              id="experiences"
              sx={{
                width: "100vw",
                color: theme.palette.text.primary,
              }}
            >
              <Stack
                justifyContent="center"
                alignItems="center"
                spacing={2}
                padding={theme.spacing(5)}
                paddingTop={theme.spacing(12)}
                height="100%"
              >
                <Container
                  sx={{
                    width: "fit-content",
                    borderRadius: "1rem",
                    border: "1px solid purple",
                    padding: ".3rem .5rem",
                    backgroundColor: "#80008030",
                  }}
                >
                  Experiences
                </Container>
                <Typography fontWeight={800} variant="h5">
                  My Experiences
                </Typography>

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
            <Box
              id="contact"
              sx={{
                width: "100vw",
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
              }}
            >
              <Grid
                container
                padding={theme.spacing(15)}
                boxSizing="border-box"
                width="100%"
                height="100%"
                justifyContent="center"
                alignContent="center"
                alignItems="center"
                direction="row"
                minHeight={"100vh"}
              >
                <Grid item xs={12} md={6}>
                  <Stack
                    spacing={2}
                    width="50%"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <Container
                      sx={{
                        width: "fit-content",
                        borderRadius: "1rem",
                        border: "1px solid purple",
                        padding: ".3rem .5rem",
                        backgroundColor: "#80008030",
                      }}
                    >
                      Contact
                    </Container>
                    <Typography variant="h2" fontWeight={800}>
                      Get problem to solve?
                    </Typography>
                    <Typography color={theme.palette.text.secondary}>
                      I'd love to hear from you! Please feel free to reach out
                      using the form below or by sending an email to
                      <b
                        style={{
                          color: theme.palette.text.primary,
                        }}
                      >
                        {" "}
                        adhipamungkaswijayadi@gmail.com.
                      </b>
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <form
                    style={{
                      width: "100%",
                    }}
                    action="mailto:adhipamungkaswijayadi@gmail.com"
                    method="post"
                    encType="text/plain"
                  >
                    <Stack spacing={5}>
                      <TextField name="name" label="Name" fullWidth />
                      <TextField name="email" label="Email" fullWidth />
                      <TextField
                        name="message"
                        label="Message"
                        fullWidth
                        multiline
                        rows={2}
                      />
                      <Stack direction="row" justifyContent="space-between">
                        <Stack direction="row" gap={1}>
                          <EmailRounded /> adhipamungkaswijayadi@gmail.com
                        </Stack>
                        <Button
                          type="submit"
                          sx={{
                            padding: theme.spacing(1),
                            backgroundColor: "purple",
                            color: "white",
                          }}
                          variant="contained"
                        >
                          Contact me
                        </Button>
                      </Stack>
                    </Stack>
                  </form>
                </Grid>
              </Grid>
            </Box>
          </ThemeProvider>
        </>
      )}
    </>
  );
}
