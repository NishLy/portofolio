import style from "./style.module.css";

const Background = (props: { children?: React.ReactNode }) => {
  return (
    <div
      style={{
        height: "fit-content",
      }}
    >
      <div className={style["hero"]}>
        <div className={style["cube"]}></div>
        <div className={style["cube"]}></div>
        <div className={style["cube"]}></div>
        <div className={style["cube"]}></div>
        <div className={style["cube"]}></div>
        <div className={style["cube"]}></div>
      </div>
      {props.children}
    </div>
  );
};

export default Background;
