import Background from "./components/background/background";
import Navbar from "./components/navbar/navbar";
import Footer from "./section/footer";
import Projects from "./section/projects";
import About from "./section/about";
import { Matrix } from "./components/matrix/matrix";
import ScrambleText from "./components/Typewritter/scramble_text";

export default function App() {
  return (
    <>
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
        <div
          id="home"
          className="w-screen h-screen bg-linear-to-b from-primary via-primary/20 via-primary/10 to-transparent flex items-center justify-center flex-col gap-4 text-center px-3"
        >
          <h1 className="text-9xl font-black text-transparent bg-linear-to-r from-primary to-white bg-clip-text">
            <ScrambleText
              text="Welcome to My Portfolio"
              speed={100}
              animation="scramble"
              wrapper="div"
            />
          </h1>
        </div>
      </>
      <>
        <main className="relative z-1 overflow-hidden">
          <Background>
            <About />
            <Projects />
            {/* <Contact /> */}
          </Background>
        </main>
        <Footer />
      </>
    </>
  );
}
