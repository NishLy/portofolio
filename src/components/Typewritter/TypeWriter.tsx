import { useState, useEffect } from "react";
import style from "./typewriter.module.css";

interface TypeWriterProps {
  sequence: { text: string; waitTime: number }[];
  speed?: number;
  repeat: number;
  loopback?: boolean;
  wrapper?: "div" | "span";
}

const TypeWriter = (
  { sequence, speed, repeat, loopback, wrapper }: TypeWriterProps = {
    repeat: Infinity,
    speed: 50,
    sequence: [],
    loopback: false,
    wrapper: "div",
  }
) => {
  const [repeatCount, setRepeatCount] = useState<number>(repeat);

  const [, setIndex] = useState<number>(0);
  const [sequenceIndex, setSequenceIndex] = useState<number>(0);
  const [text, setText] = useState<string>("");

  const writter = () => {
    let timeout = setTimeout(() => {
      repeatText(0, 0, "", repeatCount);
    }, speed);

    const repeatText = (
      index: number,
      sequenceIndex: number,
      text: string,
      repeatCount: number
    ) => {
      setText(text + sequence[sequenceIndex].text[index]);
      setIndex(index + 1);

      if (index === sequence[sequenceIndex].text.length - 1) {
        return repeatSequence(
          sequenceIndex,
          repeatCount,
          text + sequence[sequenceIndex].text[index]
        );
      }

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        repeatText(
          index + 1,
          sequenceIndex,
          text + sequence[sequenceIndex].text[index],
          repeatCount
        );
      }, speed);
    };

    const repeatTextBackward = (text: string) => {
      if (text.length === 0) {
        return repeatSequence(sequenceIndex, repeatCount, text, true);
      }
      setText(text.slice(0, -1));

      timeout = setTimeout(() => {
        repeatTextBackward(text.slice(0, -1));
      }, speed);
    };

    const repeatSequence = (
      sequenceIndex: number,
      repeatCount: number,
      text: string,
      isRepeatingCount = false
    ) => {
      if (!isRepeatingCount && loopback) {
        clearTimeout(timeout);
        repeatTextBackward(text);
        return;
      }

      setTimeout(() => {
        setSequenceIndex(sequenceIndex + 1);
        setIndex(0);
        setText("");

        if (sequenceIndex === sequence.length - 1) {
          clearTimeout(timeout);
          setSequenceIndex(0);
          setRepeatCount(repeatCount - 1);
          if (repeatCount === 0) return;
          writter();
          return;
        }

        repeatText(0, sequenceIndex + 1, "", repeatCount - 1);
      }, sequence[sequenceIndex].waitTime);
    };
  };

  useEffect(() => {
    if (repeatCount === 0) return;
    if (sequence.length === 0) return;
    writter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getWrapper(text: string) {
    const arr = [];
    for (let i = 0; i < text.length; i++) {
      arr.push(text[i]);
    }
    return arr;
  }

  return wrapper === "div" ? (
    <div className={style["animate"]}> {text} </div>
  ) : (
    <span className={style["animate"]}>
      {getWrapper(text).map((c, i) => (
        <span key={c + i}>{c}</span>
      ))}
    </span>
  );
};

export default TypeWriter;
