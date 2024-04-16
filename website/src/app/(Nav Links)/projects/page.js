import ProjectCard from "@/components/Cards/ProjectCard";
const Projects = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-4xl text-center md:text-left">
        SMACS Projects
      </h1>
      <hr className="border-2 border-gray-500" />
      <div className="flex flex-col items-center space-y-4">
        <ProjectCard
          title="Physics Notes"
          description="Contains Physics Topics that follow the Physics Course Curicullum at MtSAC. Lecture pages contains interactive simulations of physics concepts to aid understanding of topics through visualizations."
          imageUrl="/imagess/logo.png"
          projectUrl="/projects/physics-notes"
        />
        <ProjectCard
          title="All Physics Visualizations"
          description="Contains all the physics visualizations created by the SMACS club. The visuals that are use in the Physics Notes are also available here."
          imageUrl="/imagess/logo.png"
          projectUrl="https://smacs-mtsac.github.io/smacs-visuals/"
        />
      </div>
    </div>
  );
};

export default Projects;
