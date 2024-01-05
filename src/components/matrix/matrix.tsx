import { Box } from "@mui/material";
import { useEffect, useRef } from "react";

type MatrixProps = {
  color?: string;
  background?: string;
  fontSize?: number;
  font?: string;
  speed?: number;
  style: React.CSSProperties;
  children?: React.ReactNode;
};

export const Matrix = (props: MatrixProps) => {
  const canvasEl = useRef<HTMLCanvasElement | null>(null);

  const drawMatrix = () => {
    const ctx = canvasEl.current?.getContext("2d");
    if (!ctx || !canvasEl.current) return;

    const defultLetters =
      "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZいうえおくきこけすしせそちつてとにぬねのひふへほみむめもゆよりるれろأىورزدذطظءةكمنتالبيسشجحخهعغفقثصض";
    const letters = defultLetters.split("");

    const fontSize = props.fontSize ?? 10;
    const columns = canvasEl.current.width / fontSize;

    // Setting up the drops
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function draw() {
      if (!canvasEl.current) return;

      ctx!.font = `${fontSize}px ${props.font ?? "monospace"}`;
      ctx!.fillStyle = props.background ?? "rgba(0, 0, 0, .1)";
      ctx!.fillRect(0, 0, canvasEl.current!.width, canvasEl.current!.height);
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx!.fillStyle = props.color ?? "#fff";
        ctx!.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (
          drops[i] * fontSize > canvasEl.current!.height &&
          Math.random() > 0.95
        ) {
          drops[i] = 0;
        }
      }
    }

    // Loop the animation
    setInterval(draw, props.speed ?? 33);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(drawMatrix, {
      root: document.querySelector("#root"),
      rootMargin: "0px",
      threshold: 0.1,
    });

    observer.observe(canvasEl.current!);
    // observer.observe(document.querySelector("#root")!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    canvasEl.current!.width = window.innerWidth;
    canvasEl.current!.height = window.innerHeight;
  }, [canvasEl]);

  return (
    <>
      <Box sx={props.style}>
        <canvas
          style={{
            position: "absolute",
            zIndex: -1,
          }}
          ref={canvasEl}
        ></canvas>
        {props.children}
      </Box>
    </>
  );
};
