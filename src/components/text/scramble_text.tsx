import { useState, useEffect, useRef } from "react";

interface ScrambleTextProps {
  text: string;
  speed?: number;
  animation: "scramble" | "typewriter";
  revealOnView?: boolean;
}

const defultLetters = "!@#$%^&*()_+-=[]{}|;:',.<>?/~`".split("");

const scrambleCharacter = (
  c: string,
  callable: (charScrambled: string, settled: boolean) => void,
  { showTime, iteration }: { showTime: number; iteration: number } = {
    showTime: 1000,
    iteration: 5,
  },
) => {
  const intervalTime = showTime / iteration;

  const interval = setInterval(() => {
    const randomChar =
      defultLetters[Math.floor(Math.random() * defultLetters.length)];
    callable(randomChar, false);
  }, intervalTime);

  setTimeout(() => {
    clearInterval(interval);
    callable(c, true);
  }, showTime);
};

const ScrambleText = (
  { text, speed, animation, revealOnView }: ScrambleTextProps = {
    animation: "typewriter",
    text: "",
  },
) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [shouldReveal, setShouldReveal] = useState<boolean>(!revealOnView);
  const [index, setIndex] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animation !== "typewriter") return;
    if (!shouldReveal) return;
    if (index >= text.length) return;

    scrambleCharacter(
      text[index],
      (char) => {
        setDisplayedText(
          (prev) => prev.substring(0, index) + char + prev.substring(index + 1),
        );
      },
      {
        showTime: speed ?? 100,
        iteration: speed ? Math.max(5, speed / 50) : 5,
      },
    );

    const waitTime = speed ? speed * 1.5 : 150;

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, waitTime);

    return () => clearTimeout(timeout);
  }, [index, text, speed, animation, shouldReveal]);

  useEffect(() => {
    if (animation !== "scramble") return;
    if (!shouldReveal) return;

    // 1. Setup tracking
    const settledArray = new Array(text.length).fill(false);

    // Initialize displayedText with full scramble
    setDisplayedText(
      text
        .split("")
        .map((c) =>
          c === " "
            ? " "
            : defultLetters[Math.floor(Math.random() * defultLetters.length)],
        )
        .join(""),
    );

    // 2. Use an interval instead of a while loop
    const interval = setInterval(
      () => {
        // Filter for indices not yet settled
        const remaining = settledArray
          .map((settled, i) => (!settled && text[i] !== " " ? i : -1))
          .filter((i) => i !== -1);

        if (remaining.length === 0) {
          clearInterval(interval);
          setDisplayedText(text); // Final safety check
          return;
        }

        // Pick a random index from what's left
        const randomIndex =
          remaining[Math.floor(Math.random() * remaining.length)];

        // Trigger the scramble for that specific character
        scrambleCharacter(
          text[randomIndex],
          (char) => {
            setDisplayedText((prev) => {
              // Check if we are passing the final character to lock it
              if (char === text[randomIndex]) {
                settledArray[randomIndex] = true;
              }

              return (
                prev.substring(0, randomIndex) +
                char +
                prev.substring(randomIndex + 1)
              );
            });
          },
          {
            showTime: speed ? speed * 1.5 : 200,
            iteration: 10,
          },
        );
      },
      speed ? speed * 1.5 : 200,
    );

    return () => clearInterval(interval);
  }, [text, speed, animation, shouldReveal]);

  useEffect(() => {
    if (!revealOnView || shouldReveal) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShouldReveal(true);
          observer.disconnect();
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [revealOnView]);

  return <div ref={ref}>{displayedText}</div>;
};

export default ScrambleText;
