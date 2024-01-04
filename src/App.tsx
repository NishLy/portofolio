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
    setLoaded(true);
  }, []);

  const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#010205",
      },
    },
  });
  return (
    <>
      <Background />
      {!loaded && <Loading />}
      {loaded && (
        <>
          <div
            className="cover"
            style={{ backgroundColor: theme.palette.background.default }}
          ></div>
          <ThemeProvider theme={theme}>
            <Navbar />
            <main>
              <Home />
              <About />
              <Experiences />
              <Contact />
              <SourceCode />
            </main>
            <Footer />
          </ThemeProvider>
        </>
      )}
    </>
  );
}
