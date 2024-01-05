import { ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import Loading from "./components/loading/loading";
import "./App.css";
import Background from "./components/background/background";
import Navbar from "./components/navbar/navbar";
import Footer from "./section/footer";
import SourceCode from "./section/source_code";
import Contact from "./section/contact";
import Experiences from "./section/experiences";
import About from "./section/about";
import Home from "./section/home";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    setTimeout(() => {
      document.body.style.overflowY = "auto";
      setLoaded(true);
    }, 2200);
  }, []);

  const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#060918",
      },
      primary: {
        main: "#800080",
      },
      secondary: {
        main: "#b803b8",
      },
    },
  });

  const handleMouseOver: React.MouseEventHandler<HTMLElement> = (e) => {
    const sliderThumb = document.getElementById("slider-thumb");
    if (!sliderThumb) return;
    const x = e.clientX;
    const y = e.clientY;

    if (x % 2 === 0) return;

    // const currentX = document.documentElement.style
    //   .getPropertyValue("--top")
    //   .split("%")[0];
    // const currentY = document.documentElement.style
    //   .getPropertyValue("--left")
    //   .split("%")[0];

    const percentX = ((x / window.innerWidth) * 100) / 8 + 20;
    const percentY = ((y / window.innerHeight) * 100) / 8 + 20;

    document.documentElement.style.setProperty("--left", `${percentX}%`);
    document.documentElement.style.setProperty("--top", `${percentY}%`);
  };

  return (
    <>
      {!loaded && <Loading />}
      {loaded && (
        <>
          <div
            className="cover"
            style={{ backgroundColor: theme.palette.background.default }}
          ></div>
          <ThemeProvider theme={theme}>
            <Navbar />
            <Home />
            <div
              id="home"
              style={{
                width: "100vw",
                height: "100vh",
              }}
              onMouseMove={handleMouseOver}
            ></div>
            <main
              style={{
                position: "relative",
                zIndex: 1,
                overflow: "hidden",
              }}
            >
              <Background>
                <About />
                <Experiences />
                <Contact />
              </Background>
              <SourceCode />
            </main>
            <Footer />
          </ThemeProvider>
        </>
      )}
    </>
  );
}
