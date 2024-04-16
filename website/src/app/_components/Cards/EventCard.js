const EventCard = ({ title, description, time, date, location, advisors }) => {
  return (
    <div className="flex flex-col items-center md:items-start w-full">
      <div className="flex flex-col md:flex-row items-center md:justify-between w-full">
        <div className="flex flex-col flex-1 items-center md:items-start">
          <h3 className="text-xl lg:text-2xl font-bold">{title}</h3>
          <p className="text-lg lg:text-xl text-center md:text-left">
            {description}
          </p>
          <p className="hidden md:block text-lg lg:text-xl">
            <span className="font-semibold">Advisors: </span>
            {advisors}
          </p>
        </div>
        <div className="flex flex-col flex-initial items-center md:items-end">
          <p className="text-lg lg:text-xl font-semibold">{time}</p>
          <p className="text-lg lg:text-xl font-semibold">{date}</p>
          <p className="text-lg lg:text-xl font-semibold">{location}</p>
        </div>
        <p className="md:hidden text-lg lg:text-xl text-center">
          <span className="font-semibold">Advisors: </span>
          {advisors}
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-x-2 md:space-y-0 w-full justify-center">
        {/* <a
          className="font-bold py-2 px-4 lg:px-12 rounded text-center border-2 border-gray text-gray"
          href="https://discord.gg/yB4DGpH884"
        >
          More Information
        </a>
        <a
          className="font-bold py-2 px-6 lg:px-20 rounded text-center border-2 border-gray bg-gray text-background hover:bg-background hover:text-black"
          href="https://discord.gg/yB4DGpH884"
        >
          Join Event
        </a> */}
        <a
          className="font-bold py-2 px-6 lg:px-20 rounded text-center border-2 border-gray bg-gray text-background hover:bg-background hover:text-black"
          href="https://discord.gg/yB4DGpH884"
        >
          More Information on Discord
        </a>
      </div>
    </div>
  );
};

export default EventCard;
