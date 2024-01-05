import { EmailRounded } from "@mui/icons-material";
import {
  Box,
  Grid,
  Stack,
  Typography,
  TextField,
  Button,
  useTheme,
} from "@mui/material";
import Tag from "../components/tag";

export default function Contact() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        width: "100vw",
        // backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Grid
        container
        padding={theme.spacing(5)}
        paddingTop={theme.spacing(15)}
        boxSizing="border-box"
        alignItems="center"
        justifyContent="center"
        direction="row"
        gap={4}
        minHeight={"100vh"}
      >
        <Grid item xs={12} lg={5}>
          <Stack
            spacing={2}
            width="100%"
            height="fit-content"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Tag>CONTACT</Tag>
            <Typography variant="h2" fontWeight={800}>
              Get problem to solve?
            </Typography>
            <Typography color={theme.palette.text.secondary}>
              I'd love to hear from you! Please feel free to reach out using the
              form below or by sending an email to
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
        <Grid item xs={12} lg={6}>
          <form
            style={{
              width: "100%",
            }}
            action="mailto:adhipamungkaswijayadi@gmail.com"
            method="post"
            encType="text/plain"
          >
            <Stack spacing={5} width="100%">
              <TextField name="name" label="Name" fullWidth />
              <TextField name="email" label="Email" fullWidth />
              <TextField
                name="message"
                label="Message"
                fullWidth
                multiline
                rows={2}
              />
              <Stack
                flexWrap="wrap"
                direction="row"
                gap={2}
                justifyContent="space-between"
              >
                <Stack direction="row" gap={1}>
                  <EmailRounded /> adhipamungkaswijayadi@gmail.com
                </Stack>
                <Button
                  type="submit"
                  sx={{
                    padding: theme.spacing(1),
                    backgroundColor: "var(--accent-color)",
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
  );
}
