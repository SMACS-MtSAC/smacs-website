import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/Cards/ProjectCard";
const Projects = () => {
  return (
    <div className="w-full">
      <Navbar />
      <h1 className="text-2xl md:text-4xl text-center md:text-left">
        SMACS Projects
      </h1>
      <hr className="border-2 border-gray-500" />
      <div className="flex flex-col items-center space-y-4">
        <ProjectCard
          title="Project 1"
          description="Velit in consectetur dolore cupidatat id dolor cillum veniam nulla eiusmod veniam et. Do nulla aliqua irure nulla Lorem. Minim exercitation enim eiusmod deserunt consectetur duis dolor est irure sunt sit cillum. Voluptate in Lorem reprehenderit deserunt. Excepteur et nostrud veniam aliqua."
          imageUrl="/imagess/logo.png"
        />
        <ProjectCard
          title="Project 2"
          description="In magna cupidatat magna laborum eiusmod elit ad nisi velit qui occaecat. Ex magna consectetur velit esse ea commodo commodo eu est. Consectetur elit dolore do nostrud in. Aute minim amet ex eiusmod anim deserunt in et nulla sunt reprehenderit sint aliquip sunt. Pariatur est ea proident officia ex sit enim. Cillum ea consectetur anim cupidatat nostrud."
          imageUrl="/imagess/logo.png"
        />
        <ProjectCard
          title="Project 3"
          description="Do cupidatat labore proident proident nostrud quis laborum consequat deserunt consequat quis amet eiusmod consequat. Ullamco et officia aute officia sunt dolor deserunt qui deserunt voluptate et. Excepteur cupidatat proident minim et laboris."
          imageUrl="/imagess/logo.png"
        />
      </div>
    </div>
  );
};

export default Projects;
