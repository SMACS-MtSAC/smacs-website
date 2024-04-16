const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  const imageExists = (imageUrl) => {
    try {
      const image = require(`${imageUrl}`);
      return true;
    } catch (error) {
      return false;
    }
  };
  return (
    <div className="flex flex-col items-center md:flex-row w-full">
      <img
        className="w-1/2 md:w-1/4 h-auto object-cover rounded-lg"
        src={`${imageExists(imageUrl) ? imageUrl : "/images/logo.png"}`}
        alt={title}
      />
      <div className="flex flex-col items-center md:items-start w-full">
        <h3 className="text-xl lg:text-2xl font-bold">{title}</h3>
        <p className="text-lg lg:text-xl text-center md:text-left">
          {description}
        </p>
        <a
          className="md:w-3/4 lg:w-1/2 font-bold py-2 px-4 rounded border-2 border-gray bg-gray text-background hover:bg-background hover:text-black"
          href={projectUrl}
        >
          Open Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
