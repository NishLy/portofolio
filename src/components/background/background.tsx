import style from "./style.module.css";

const Background = () => {
  return (
    <div className={style["hero"]}>
      <div className={style["cube"]}></div>
      <div className={style["cube"]}></div>
      <div className={style["cube"]}></div>
      <div className={style["cube"]}></div>
      <div className={style["cube"]}></div>
      <div className={style["cube"]}></div>
    </div>
  );
};

export default Background;
