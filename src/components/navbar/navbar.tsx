import { Stack, Link, Typography, useTheme } from "@mui/material";

const Navbar = () => {
  const theme = useTheme();

  return (
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
  );
};

export default Navbar;
