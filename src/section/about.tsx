import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import TypeWriter from "../components/Typewritter/TypeWriter";
import Tag from "../components/tag";

export default function About() {
  const theme = useTheme();

  return (
    <Box
      component="section"
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
            padding={5}
            justifyContent="center"
            spacing={5}
            boxSizing="border-box"
            height="100%"
            flexBasis="1/2"
          >
            <Tag>ABOUT</Tag>
            <Typography fontWeight={800} variant="h3" height="2rem">
              <TypeWriter
                sequence={[
                  { text: "Hello, I'am Adhi", waitTime: 5000 },
                  { text: "Web Dev", waitTime: 5000 },
                  { text: "Flutter Dev", waitTime: 5000 },
                  { text: "Fullstack Dev", waitTime: 5000 },
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
              Enthusiastic and driven undergraduate student at STIMIK Widya
              Pratama with a passion for full-stack website development.
              <b style={{ color: theme.palette.text.primary }}>
                {" "}
                Possesses a strong foundation in JavaScript and its ecosystem,
                including front-end frameworks like React and back-end
                technologies like Node.js.
              </b>{" "}
              Eager to contribute technical expertise and problem-solving skills
              to dynamic and innovative projects.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
