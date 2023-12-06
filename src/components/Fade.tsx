import { ReactNode, useEffect, useRef } from "react";
import "./animaton.css";

const MainWrapper = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const toggleClass = () => {
      if (ref.current?.classList.contains("in")) {
        ref.current?.classList.remove("in");
        ref.current?.classList.add("exit");
        return setTimeout(() => {
          toggleClass();
        }, 5000);
      } else {
        ref.current?.classList.remove("exit");
        ref.current?.classList.add("in");
        return setTimeout(() => {
          toggleClass();
        }, 15000);
      }
    };

    const timeout = toggleClass();

    return () => {
      clearInterval(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  return (
    <>
      <div ref={ref} className="in">
        {children}
      </div>
    </>
  );
};

export default MainWrapper;
