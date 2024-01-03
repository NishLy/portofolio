import {
  Stack,
  Link,
  useTheme,
  Box,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const navbarEl = useRef<HTMLDivElement | null>(null);

  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    document.body.onscroll = (ev) => {
      if (!navbarEl.current) return;
      if ((ev.currentTarget as Window).scrollY === 0) {
        console.log(navbarEl);
        navbarEl.current.style.backgroundColor = "transparent";
        navbarEl.current.style.backdropFilter = "none";
        navbarEl.current.style.border = "none";
      } else {
        navbarEl.current.style.backgroundColor = "#00000080";
        navbarEl.current.style.backdropFilter = "blur(8px)";
        navbarEl.current.style.border = "1px solid var(--accent-color)";
      }
    };
  }, []);

  return (
    <Box
      component="header"
      padding={theme.spacing(5)}
      width="100vw"
      boxSizing="border-box"
      top={0}
      left={0}
      position="fixed"
      zIndex={1000}
    >
      <Stack
        ref={navbarEl}
        width="100%"
        height="fit-content"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        borderRadius=".5rem"
        padding={theme.spacing(1)}
        sx={{
          backgroundColor: "#00000080",
          backdropFilter: "blur(8px)",
          border: "1px solid var(--accent-color)",
        }}
      >
        <IconButton
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            display: {
              xs: "flex",
              lg: "none",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          sx={{
            marginTop: 1,
            left: "-.5rem",
            backgroundColor: "transparent",
            "& .MuiMenu-paper": { backgroundColor: "transparent" },
            "& .MuiMenu-list": {
              // backgroundColor: "transparent",
              padding: 0,
              backgroundColor: "#00000080",
              backdropFilter: "blur(8px)",
              border: "1px solid var(--accent-color)",
            },
            textTransform: "uppercase",
          }}
        >
          <MenuItem
            sx={{
              width: "calc(100vw - 6rem)",
            }}
          >
            <Link
              href="/#home"
              padding={0}
              sx={{
                textDecoration: "none",
              }}
              color={theme.palette.text.primary}
            >
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              sx={{
                textDecoration: "none",
              }}
              href="/#about"
              color={theme.palette.text.primary}
            >
              About
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              sx={{
                textDecoration: "none",
              }}
              href="/#experiences"
              color={theme.palette.text.primary}
            >
              Experiences
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              sx={{
                textDecoration: "none",
              }}
              href="/#contact"
              color={theme.palette.text.primary}
            >
              Contact
            </Link>
          </MenuItem>
        </Menu>
        <Stack
          direction="row"
          spacing={3}
          width="100%"
          sx={{
            display: {
              xs: "none",
              lg: "flex",
            },
          }}
          fontSize="large"
          textTransform="uppercase"
        >
          <MenuItem>
            <Link
              href="/#home"
              padding={0}
              sx={{
                textDecoration: "none",
              }}
              color={theme.palette.text.primary}
            >
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              sx={{
                textDecoration: "none",
              }}
              href="/#about"
              color={theme.palette.text.primary}
            >
              About
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              sx={{
                textDecoration: "none",
              }}
              href="/#experiences"
              color={theme.palette.text.primary}
            >
              Experiences
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              sx={{
                textDecoration: "none",
              }}
              href="/#contact"
              color={theme.palette.text.primary}
            >
              Contact
            </Link>
          </MenuItem>
        </Stack>
        {/* <Typography variant="h6" color={theme.palette.text.primary}>
          ADHI
        </Typography> */}
        {/* <table
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
        </table> */}
      </Stack>
    </Box>
  );
};

export default Navbar;
