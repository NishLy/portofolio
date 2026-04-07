import Background from "./components/background/background";
import Navbar from "./components/navbar/navbar";
import Footer from "./section/footer";
import Projects from "./section/projects";
import About from "./section/about";
import { Matrix } from "./components/ui/matrix";
import Experiences from "./section/experiences";
import Contact from "./section/contact";
import Hero from "./section/hero";

export default function App() {
  return (
    <>
      <Matrix
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          zIndex: -1,
        }}
        color="#800080"
        background="#06091810"
        fontSize={20}
        speed={50}
      ></Matrix>
      <Navbar />
      <main className="relative z-1 overflow-hidden">
        <Background>
          <Hero />
          <About />
          <Projects />
          <Experiences />
          <Contact />
        </Background>
      </main>
      <Footer />
    </>
  );
}
