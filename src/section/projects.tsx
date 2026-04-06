// import Coursel from "../components/Coursel/Coursel";
import { useEffect, useState } from "react";
import Tag from "../components/tag";
import ProjectCard, { Project } from "../components/ui/project_card";
import CategoryButton from "../components/ui/button_category";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await fetch("/data/projects.json");
        const data: Project[] = await response.json();

        data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );

        setProjects(data);
        const categories = Array.from(
          new Set(data.flatMap((project: Project) => project.categories)),
        );
        setAvailableCategories(categories);
        setSelectedCategories(categories);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <div
      id="projects"
      className="w-screen min-h-screen text-primary text-center flex flex-col items-center px-32  gap-10 py-20 "
    >
      <Tag>PROJECTS</Tag>

      <div className="flex flex-wrap gap-3 justify-start mb-10 w-full">
        {availableCategories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            isSelected={selectedCategories.includes(category)}
            onClick={() => {
              if (selectedCategories.includes(category)) {
                setSelectedCategories((prev) =>
                  prev.filter((cat) => cat !== category),
                );
              } else {
                setSelectedCategories((prev) => [...prev, category]);
              }
            }}
          />
        ))}
      </div>

      {loading ? (
        <p className="text-gray-400">Loading projects...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects
            .filter((project) =>
              selectedCategories.some((cat) =>
                project.categories.includes(cat),
              ),
            )
            .map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
        </div>
      )}
    </div>
  );
}
