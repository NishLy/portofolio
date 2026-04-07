// import Coursel from "../components/Coursel/Coursel";
import { useEffect, useState } from "react";
import SectionHeader from "../components/ui/section_header";

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}

export default function Experiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/data/experiences.json");
        const data: Experience[] = await response.json();

        setExperiences(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div
      id="experiences"
      className="w-screen text-primary text-center flex flex-col items-center px-8 md:px-32  gap-10 py-20 "
    >
      <SectionHeader>EXPERIENCES</SectionHeader>
      <div className="flex flex-col gap-6 w-full">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-surface/10 h-fit backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 shadow-primary/20 border border-border/70 hover:shadow-primary/40 hover:border-border/50"
          >
            <div className="p-6 space-y-3 flex flex-col items-start text-left text-white">
              <h3 className="text-lg font-bold text-white">
                {experience.position}
              </h3>
              <p className="text-sm font-semibold text-primary">
                {experience.company}
              </p>
              <p className="text-xs text-gray-500">{experience.duration}</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
