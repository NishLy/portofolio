import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

const Navbar = () => {
  const navbarEl = useRef<HTMLDivElement | null>(null);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuDropdownOpen(!menuDropdownOpen);
  };

  useEffect(() => {
    if (!navbarEl.current) return;

    const handleScroll = () => {
      if (!navbarEl.current) return;
      if (window.scrollY > 50) {
        navbarEl.current.classList.add(
          "bg-surface/10",
          "backdrop-blur-2xl",
          "border-2",
          "border-border",
        );
      } else {
        navbarEl.current.classList.remove(
          "bg-surface/10",
          "backdrop-blur-2xl",
          "border-2",
          "border-border",
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-screen px-8 md:px-32 py-8 z-50 box-border">
      <nav
        ref={navbarEl}
        className="w-full h-fit flex flex-row justify-between items-center rounded-lg py-2 px-2 md:px-6 transition-all duration-300"
      >
        <button
          onClick={handleMenuClick}
          className="lg:hidden flex flex-col gap-1 p-2"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-current"></span>
          <span className="w-6 h-0.5 bg-current"></span>
          <span className="w-6 h-0.5 bg-current"></span>
        </button>

        <div
          className={classNames(
            "lg:flex opacity-100 rounded-2xl w-full text-xl absolute top-full left-0 flex-col items-center gap-4 py-2  lg:static lg:flex-row lg:w-auto lg:bg-transparent lg:gap-16 transition-all duration-300",
            {
              "flex opacity-100": menuDropdownOpen,
              "hidden opacity-0 pointer-events-none": !menuDropdownOpen,
            },
          )}
        >
          <a
            href="/#home"
            className="no-underline text-inherit hover:opacity-75 transition-opacity"
          >
            Home
          </a>
          <a
            href="/#about"
            className="no-underline text-inherit hover:opacity-75 transition-opacity"
          >
            About
          </a>
          <a
            href="/#projects"
            className="no-underline text-inherit hover:opacity-75 transition-opacity"
          >
            Projects
          </a>
          <a
            href="/#experiences"
            className="no-underline text-inherit hover:opacity-75 transition-opacity"
          >
            Experiences
          </a>
          <a
            href="/#contact"
            className="no-underline text-inherit hover:opacity-75 transition-opacity"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
