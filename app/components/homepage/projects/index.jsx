import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      {/* Section Header */}
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-pink-500 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-5 py-3 text-xl rounded-md shadow-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Projects List */}
      <div className="pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
