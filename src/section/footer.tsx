import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import {
  Stack,
  Divider,
  Link,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";

export default function Footer() {
  const theme = useTheme();
  return (
    <Stack
      id="footer"
      sx={{
        width: "100%",
        backgroundColor: "var(--background-color)",
        color: theme.palette.text.primary,
      }}
      justifyContent={"center"}
      alignItems={"center"}
      padding={theme.spacing(5)}
      boxSizing={"border-box"}
      gap={2}
    >
      <img
        src="/vite.svg"
        alt=""
        style={{
          width: "5rem",
          height: "auto",
        }}
      />

      <Divider
        sx={{
          width: "90%",
          marginY: "1rem !important",
        }}
      />
      <Stack
        justifyContent="center"
        direction={"row"}
        flexWrap="wrap"
        height="100%"
        width="100%"
        padding={2}
        gap={4}
        margin="0 !important"
      >
        <Link
          href="/#home"
          padding={0}
          margin="0 !important"
          sx={{
            textDecoration: "none",
          }}
          color={theme.palette.text.primary}
        >
          HOME
        </Link>
        <Link
          margin="0 !important"
          sx={{
            textDecoration: "none",
          }}
          href="/#about"
          color={theme.palette.text.primary}
        >
          ABOUT
        </Link>
        <Link
          margin="0 !important"
          sx={{
            textDecoration: "none",
          }}
          href="/#experiences"
          color={theme.palette.text.primary}
        >
          EXPERIENCES
        </Link>
        <Link
          margin="0 !important"
          sx={{
            textDecoration: "none",
          }}
          href="/#contact"
          color={theme.palette.text.primary}
        >
          CONTACT
        </Link>
      </Stack>
      <Divider
        sx={{
          width: "90%",
          marginY: "1rem !important",
        }}
      />
      <Typography variant="overline">Social Media</Typography>
      <Stack
        sx={{
          width: "100%",
        }}
        justifyContent="center"
        direction="row"
        gap={1}
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
      <Typography variant="overline">
        {" "}
        &copy; {new Date().getFullYear()} Adhi Pamungkas Wijayadi
      </Typography>
    </Stack>
  );
}
