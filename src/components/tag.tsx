import { Button, useTheme } from "@mui/material";

export default function Tag(props: { children?: React.ReactNode }) {
  const theme = useTheme();
  return (
    <Button
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
      {props.children}
    </Button>
  );
}
