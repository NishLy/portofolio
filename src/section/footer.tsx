import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full bg-linear-to-b from-transparent to-background text-white flex flex-col justify-center items-center p-20 box-border gap-1"
    >
      <img src="/images/logo.webp" alt="" className="w-40 h-auto mb-4" />
      {/* <img src="http://ghchart.rshah.org/Nishly" alt="Nishly Contribution" /> */}
      <hr
        className="mt-4 h-px border-none w-11/12"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,.5) 10%, rgba(128,0,128,0) 100%)",
        }}
      />
      <div className="flex flex-row flex-wrap justify-center w-full h-full p-2 gap-8">
        <a href="/#home" className="no-underline text-white">
          HOME
        </a>
        <a className="no-underline text-white" href="/#about">
          ABOUT
        </a>
        <a className="no-underline text-white" href="/#projects">
          PROJECTS
        </a>
        <a className="no-underline text-white" href="/#experiences">
          EXPERIENCES
        </a>
        <a className="no-underline text-white" href="/#contact">
          CONTACT
        </a>
      </div>
      <hr
        className="mb-4 h-px border-none w-11/12"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,.5) 10%, rgba(128,0,128,0) 100%)",
        }}
      />
      <div className="w-full flex flex-row justify-center">
        <a
          title="Github"
          href="https://github.com/NishLy"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 cursor-pointer"
        >
          <FaGithub size={24} />
        </a>
        <a
          title="Linkedin"
          href="https://www.linkedin.com/in/adhi-pamungkas-wijayadi-7362a9283/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 cursor-pointer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          title="Instagram"
          href="https://www.instagram.com/adhipaaw_/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 cursor-pointer"
        >
          <FaInstagram size={24} />
        </a>
      </div>
      <p className="uppercase text-sm tracking-widest">
        &copy; {new Date().getFullYear()} Adhi Pamungkas Wijayadi
      </p>
    </footer>
  );
}
