import ScrambleText from "../components/Typewritter/scramble_text";
import SectionHeader from "../components/ui/section_header";
import CategoryButton from "../components/ui/button_category";
import TypeWriter from "../components/Typewritter/TypeWriter";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-screen overflow-hidden border-b  border-border border-opacity-30"
      style={{
        background:
          "radial-gradient(circle at 20% 80%, rgba(128, 0, 128, 0.05) 0%, transparent 50%)",
      }}
    >
      <div className="grid gap-2 md:gap-4 w-full h-full grid-cols-1 md:grid-cols-2">
        <div
          className="relative w-full h-screen overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgba(128, 0, 128, 0.1) 0%, transparent 50%)",
          }}
        >
          <img
            src="./images/me.webp"
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
            alt="Adhi - Full Stack Developer"
          />
        </div>
        <div className="flex items-center justify-center w-full h-screen px-8 md:px-32 animate-fadeInUp md:pr-32 ">
          <div className="flex flex-col gap-4 w-full">
            <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              <SectionHeader>ABOUT ME</SectionHeader>
            </div>
            <h3
              className="text-4xl md:text-6xl font-black text-transparent bg-linear-to-r from-primary to-white bg-clip-text"
              style={{ textShadow: "0 2px 10px rgba(128, 0, 128, 0.2)" }}
            >
              <ScrambleText
                text="Hello, I'm Adhi"
                speed={50}
                animation="scramble"
                revealOnView={true}
              />
            </h3>
            <h2 className="text-2xl md:text-4xl font-bold text-white h-10">
              <TypeWriter
                sequence={[
                  { text: "Web Developer", waitTime: 3000 },
                  { text: "Flutter Developer", waitTime: 3000 },
                  { text: "Full-Stack Engineer", waitTime: 3000 },
                  { text: "Creative Problem Solver", waitTime: 3000 },
                ]}
                speed={80}
                repeat={Infinity}
              />
            </h2>
            <p
              className="relative pl-5 text-base leading-relaxed text-gray-400 text-justify md:text-lg"
              style={{
                borderImage:
                  "linear-gradient(180deg, var(--color-primary), rgba(168, 85, 247, 0)) 1",
                borderLeftWidth: "4px",
              }}
            >
              I develop web and mobile applications with focus on backend
              architecture, API design, and performance optimization.”
              <br />
              <br />
              <strong className="inline-block px-2 py-1 rounded border border-border border-opacity-20 bg-linear-to-r from-primary/20 from-10% to-transparent to-90% text-white">
                I bring expertise in JavaScript and its modern ecosystem,
                including front-end frameworks like React and Vue, mobile
                development with Flutter, and robust back-end solutions using
                Node.js, Laravel, Fiber, and FastAPI.
              </strong>
              <br />
              <br />
              Committed to delivering innovative solutions and continuously
              expanding my technical horizons to tackle challenging projects
              that make a real impact.
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "Typescript",
                "Golang",
                "PostgreSQL",
                "Redis",
                "NodeJS",
                "JavaScript",
                "Dart",
                "Python",
              ].map((tech, index) => (
                <CategoryButton
                  key={index}
                  category={tech.toLowerCase()}
                  isSelected={true}
                  onClick={() => {}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
