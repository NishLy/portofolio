import { useEffect, useState } from "react";
import Loading from "./components/loading/loading";
import Background from "./components/background/background";
import Navbar from "./components/navbar/navbar";
import Footer from "./section/footer";
import SourceCode from "./section/source_code";
import Contact from "./section/contact";
import Projects from "./section/projects";
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

  const handleMouseOver: React.MouseEventHandler<HTMLElement> = (e) => {
    const sliderThumb = document.getElementById("slider-thumb");
    if (!sliderThumb) return;
    const x = e.clientX;
    const y = e.clientY;

    if (x % 2 === 0) return;

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
          {/* <div className="w-screen h-screen bg-linear-to-b from-primary-900 to-transparent"></div> */}
          <Navbar />
          <Home />
          <div
            id="home"
            className="w-screen h-screen bg-linear-to-b from-primary via-primary/20 via-primary/10 to-transparent"
            onMouseMove={handleMouseOver}
          ></div>
          <main className="relative z-1 overflow-hidden">
            <Background>
              <About />
              <Projects />
              <Contact />
            </Background>
            <SourceCode />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
