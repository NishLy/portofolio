import { Box, Grid, Stack, Typography, useTheme, Fade } from "@mui/material";
import TypeWriter from "../components/Typewritter/TypeWriter";
import Tag from "../components/tag";

export default function About() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="about"
      sx={{
        width: "100vw",
        color: theme.palette.text.primary,
        borderBottom: "1px solid #80008050",
        // background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 80%, rgba(128, 0, 128, 0.05) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Grid container width="100%" height="100%" direction="row">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              height: "100vh",
              overflow: "hidden",
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(45deg, rgba(128, 0, 128, 0.1) 0%, transparent 50%)",
                pointerEvents: "none",
              },
            }}
          >
            <img
              src="./images/me.jpg"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                transition: "transform 0.3s ease",
              }}
              alt="Adhi - Full Stack Developer"
              onMouseEnter={(e) => {
                (e.target as HTMLImageElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLImageElement).style.transform = "scale(1)";
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack
            padding={{ xs: 3, md: 5 }}
            justifyContent="center"
            spacing={4}
            boxSizing="border-box"
            height="100%"
            sx={{
              animation: "fadeInUp 0.8s ease-out",
              "@keyframes fadeInUp": {
                from: {
                  opacity: 0,
                  transform: "translateY(30px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            <Fade in={true} timeout={1000}>
              <Box>
                <Tag>ABOUT ME</Tag>
              </Box>
            </Fade>

            <Typography
              fontWeight={800}
              variant="h3"
              sx={{
                height: "5rem",
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.text.primary})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 2px 10px rgba(128, 0, 128, 0.2)",
              }}
            >
              <TypeWriter
                sequence={[
                  { text: "Hello, I'm Adhi", waitTime: 3000 },
                  { text: "Web Developer", waitTime: 3000 },
                  { text: "Flutter Developer", waitTime: 3000 },
                  { text: "Full-Stack Engineer", waitTime: 3000 },
                  { text: "Creative Problem Solver", waitTime: 3000 },
                ]}
                speed={80}
                repeat={Infinity}
              />
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.1rem" },
                textAlign: "justify",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: "-20px",
                  top: "0",
                  width: "4px",
                  height: "100%",
                  background: `linear-gradient(to bottom, ${theme.palette.primary.main}, transparent)`,
                  borderRadius: "2px",
                },
              }}
            >
              A passionate and driven recent graduate from{" "}
              <strong style={{ color: theme.palette.primary.main }}>
                Institut Widya Pratama
              </strong>
              , specializing in full-stack web development and mobile
              applications.
              <br />
              <br />
              <strong
                style={{
                  color: theme.palette.text.primary,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}20, transparent)`,
                  padding: "2px 6px",
                  borderRadius: "4px",
                  border: `1px solid ${theme.palette.primary.main}30`,
                }}
              >
                I bring expertise in JavaScript and its modern ecosystem,
                including front-end frameworks like React and Vue, mobile
                development with Flutter, and robust back-end solutions using
                Node.js, Laravel, Fiber, and FastAPI.
              </strong>
              <br />
              <br />
              Committed to delivering innovative solutions and continuously
              expanding my technical horizons to tackle challenging projects
              that make a real impact.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                mt: 2,
              }}
            >
              {[
                "JavaScript",
                "React",
                "Vue",
                "Flutter",
                "Node.js",
                "Laravel",
                "FastAPI",
                "Fiber",
                "Dart",
                "Go",
                "Python",
                "PostgresSQL",
                "Next",
              ].map((tech, index) => (
                <Box
                  key={tech}
                  sx={{
                    px: 2,
                    py: 0.5,
                    borderRadius: "20px",
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
                    border: `1px solid ${theme.palette.primary.main}30`,
                    color: theme.palette.text.primary,
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                    "@keyframes slideIn": {
                      from: {
                        opacity: 0,
                        transform: "translateX(-20px)",
                      },
                      to: {
                        opacity: 1,
                        transform: "translateX(0)",
                      },
                    },
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
                    },
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
