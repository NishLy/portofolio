import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import BrandLogo from "./logo_brand";

export interface Project {
  title: string;
  categories: string[];
  description: string;
  thumbnail: string;
  source_code_link?: string;
  deployed_link?: string;
  date: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      key={index}
      className="bg-surface/10 h-fit backdrop-blur-2xl rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 shadow-primary/20 border border-border/70 hover:shadow-primary/40 hover:border-border/50"
    >
      <div className="relative">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="aspect-video object-cover"
        />
        <div className="absolute top-0 left-0 flex gap-2 p-2">
          {project.source_code_link && (
            <a
              href={project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-primary/50 backdrop-blur-2xl text-white rounded transition-colors duration-300"
            >
              <FaGithub className="inline-block mr-1" />
              Source Code
            </a>
          )}
          {project.deployed_link && (
            <a
              href={project.deployed_link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-primary/50 backdrop-blur-2xl text-white rounded transition-colors duration-300"
            >
              <FaLink className="inline-block mr-1" />
              Live Demo
            </a>
          )}
        </div>
      </div>
      <div className="p-4 text-left text-white">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <div className="flex text-white text-lg">
            {project.categories
              .sort((a, b) => a.localeCompare(b))
              .map((category) => (
                <div
                  key={category}
                  className="mr-2 relative group cursor-pointer"
                >
                  {BrandLogo(category)}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
