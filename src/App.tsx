import {
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import ThreeCanvas from "./components/Earthcanvas";
import { EmailRounded, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { useEffect, useState } from "react";
import WelcomeText from "./components/Title";
import Coursel from "./components/Coursel/Coursel";
import TypeWriter from "./components/Typewritter/TypeWriter";
import { useProgress } from "@react-three/drei";
import Loading from "./components/loading/loading";
import "./App.css";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const progress = useProgress();
  useEffect(() => {
    if (progress.progress === 100) {
      setLoaded(true);
    }
  }, [progress.progress]);

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
      <ThreeCanvas />
      {!loaded && <Loading />}
      {loaded && (
        <>
          <div
            className="cover"
            style={{ backgroundColor: theme.palette.background.default }}
          ></div>
          <ThemeProvider theme={theme}>
            <div
              id="home"
              style={{
                width: "100vw",
                height: "100vh",
              }}
            >
              <Grid
                container
                sx={{
                  width: "100%",
                  position: "relative",
                  padding: theme.spacing(15),
                }}
                gap={theme.spacing(5)}
              >
                <Stack
                  width="100vw"
                  height="4rem"
                  direction="row"
                  component="header"
                  position="fixed"
                  zIndex={1000}
                  padding={theme.spacing(15)}
                  boxSizing={"border-box"}
                  paddingTop={5}
                  top={0}
                  left={0}
                  justifyContent="space-between"
                  sx={{}}
                >
                  <Stack direction="row" spacing={5}>
                    <Link
                      href="/#home"
                      variant="h1"
                      padding={0}
                      sx={{
                        textDecoration: "none",
                      }}
                      color={theme.palette.text.primary}
                    >
                      <Typography variant="h6" padding={".5rem 1rem"}>
                        Home
                      </Typography>
                    </Link>
                    <Link
                      sx={{
                        textDecoration: "none",
                      }}
                      href="/#about"
                      variant="h1"
                      color={theme.palette.text.primary}
                    >
                      <Typography variant="h6" padding={".5rem 1rem"}>
                        About
                      </Typography>
                    </Link>
                    <Link
                      sx={{
                        textDecoration: "none",
                      }}
                      href="/#experiences"
                      variant="h1"
                      color={theme.palette.text.primary}
                    >
                      <Typography variant="h6" padding={".5rem 1rem"}>
                        Experiences
                      </Typography>
                    </Link>
                    <Link
                      sx={{
                        textDecoration: "none",
                      }}
                      href="/#contact"
                      variant="h1"
                      color={theme.palette.text.primary}
                    >
                      <Typography variant="h6" padding={".5rem 1rem"}>
                        Contact
                      </Typography>
                    </Link>
                  </Stack>
                  <table
                    style={{
                      color: theme.palette.text.primary,
                      textDecoration: "none",
                      textTransform: "uppercase",
                      fontSize: "1rem",
                      fontWeight: 700,
                    }}
                  >
                    <tbody>
                      <tr>
                        <td>P</td>
                        <td>o</td>
                        <td>R</td>
                      </tr>
                      <tr>
                        <td>t</td>
                        <td>f</td>
                        <td>o</td>
                      </tr>
                      <tr>
                        <td>l</td>
                        <td>i</td>
                        <td>o</td>
                      </tr>
                    </tbody>
                  </table>
                </Stack>
                <Container
                  sx={{
                    maxWidth: "20rem",
                    margin: "0 !important",
                    padding: "0 !important",
                  }}
                >
                  <WelcomeText />
                </Container>
              </Grid>
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
                <IconButton>
                  <GitHub />
                </IconButton>
                <IconButton>
                  <LinkedIn />
                </IconButton>
                <IconButton>
                  <Instagram />
                </IconButton>
              </Stack>
            </div>
            <div
              id="about"
              style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
                borderBottom: "1px solid #fff",
              }}
            >
              <Stack width="100%" height="100%" direction="row">
                <img
                  src=""
                  style={{
                    flexBasis: "1/2",
                    objectFit: "cover",
                    width: "50vw",
                  }}
                />
                <Stack
                  padding={10}
                  justifyContent="center"
                  spacing={5}
                  boxSizing="border-box"
                  height="100%"
                  width="100%"
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
                    variant="h3"
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
                    Eager to contribute technical expertise and problem-solving
                    skills to dynamic and innovative projects.
                  </Typography>
                </Stack>
              </Stack>
            </div>
            <div
              id="experiences"
              style={{
                width: "100vw",
                height: "100vh",
                color: theme.palette.text.primary,
              }}
            >
              <Stack
                justifyContent="center"
                alignItems="center"
                spacing={2}
                height="100%"
              >
                <Container
                  sx={{
                    width: "fit-content",
                    borderRadius: "1rem",
                    border: "1px solid purple",
                    padding: theme.spacing(1),
                    backgroundColor: "#80008030",
                  }}
                >
                  Experiences
                </Container>
                <Typography fontWeight={800} variant="h3">
                  Dig Deeper Into My Experiences
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
            </div>
            <div
              id="contact"
              style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
              }}
            >
              <Stack
                padding={theme.spacing(15)}
                boxSizing="border-box"
                width="100%"
                height="100%"
                justifyContent="space-around"
                alignItems="center"
                direction="row"
              >
                <Stack
                  padding={theme.spacing(10)}
                  alignItems="flex-start"
                  spacing={2}
                  width="50%"
                >
                  <Container
                    sx={{
                      width: "fit-content",
                      borderRadius: "1rem",
                      border: "1px solid purple",
                      padding: ".3rem .5rem",
                      backgroundColor: "#80008030",
                      margin: ".5rem",
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
                <form
                  style={{
                    width: "50%",
                  }}
                  action="mailto:adhipamungkaswijayadi@gmail.com"
                  method="post"
                  encType="text/plain"
                >
                  <Stack padding={theme.spacing(10)} spacing={5}>
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
              </Stack>
            </div>
          </ThemeProvider>
        </>
      )}
    </>
  );
}
