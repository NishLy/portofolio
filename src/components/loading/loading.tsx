import { Stack } from "@mui/material";
import style from "./loading.module.css";
const Loading = () => {
  return (
    <Stack
      width="100vw"
      height="100vh"
      sx={{
        backgroundColor: "var(--background-color)",
      }}
      alignItems={"center"}
      justifyContent={"center"}
      color={"white"}
      spacing={2}
    >
      <div className={style["big"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={style["tri"]}></div>
    </Stack>
  );
};

export default Loading;
