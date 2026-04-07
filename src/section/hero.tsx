import ScrambleText from "../components/Typewritter/scramble_text";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-screen h-screen bg-linear-to-b from-primary via-primary/20 via-primary/10 to-transparent flex items-center justify-center flex-col gap-4 text-center px-3"
    >
      <h1 className="text-7xl md:text-9xl font-black text-transparent bg-linear-to-r from-primary to-white bg-clip-text">
        <ScrambleText
          text="Welcome to My Portfolio"
          speed={100}
          animation="scramble"
        />
      </h1>
    </section>
  );
};

export default Hero;
