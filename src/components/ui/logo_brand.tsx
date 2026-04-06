import { BiLogoPostgresql } from "react-icons/bi";
import { DiJqueryLogo, DiRedis } from "react-icons/di";
import { FaReact, FaLaravel, FaBootstrap } from "react-icons/fa";
import { FaFlutter, FaGolang } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiNestjs,
  SiVite,
  SiExpress,
  SiTrpc,
  SiRedux,
  SiReactquery,
  SiTypescript,
  SiApachekafka,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaDartLang } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";

const BrandLogo = (category: string) => {
  switch (category.toLowerCase()) {
    case "react":
      return <FaReact />;
    case "nextjs":
      return <RiNextjsFill />;
    case "tailwind":
      return <RiTailwindCssFill />;
    case "nestjs":
      return <SiNestjs />;
    case "vite":
      return <SiVite />;
    case "laravel":
      return <FaLaravel />;
    case "bootstrap":
      return <FaBootstrap />;
    case "express":
      return <SiExpress />;
    case "jquery":
      return <DiJqueryLogo />;
    case "flutter":
      return <FaFlutter />;
    case "firebase":
      return <IoLogoFirebase />;
    case "trpc":
      return <SiTrpc />;
    case "redux":
      return <SiRedux />;
    case "reactquery":
      return <SiReactquery />;
    case "golang":
      return <FaGolang />;
    case "typescript":
      return <SiTypescript />;
    case "postgresql":
      return <BiLogoPostgresql />;
    case "kafka":
      return <SiApachekafka />;
    case "redis":
      return <DiRedis />;
    case "nodejs":
      return <FaNodeJs />;
    case "javascript":
      return <IoLogoJavascript />;
    case "dart":
      return <FaDartLang />;
    case "python":
      return <FaPython />;
    default:
      return null; // Return null if no icon is available for the category
  }
};

export default BrandLogo;
