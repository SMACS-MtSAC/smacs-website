const EventCard = ({ title, description, time, date, location, advisors }) => {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between w-full">
      <div className="flex flex-col flex-1 items-center md:items-start">
        <h3 className="text-xl lg:text-2xl font-bold">{title}</h3>
        <p className="text-lg lg:text-xl text-center md:text-left">
          {description}
        </p>
        <p className="hidden md:block text-lg lg:text-xl">
          <span className="font-semibold">Advisors: </span>
          {advisors}
        </p>
        <a
          className="container md:w-3/4 lg:w-1/2 font-bold py-2 px-4 rounded border-2 border-gray md:block hidden hover:bg-gray hover:text-background"
          href="https://discord.gg/yB4DGpH884"
        >
          Join Event
        </a>
      </div>
      <div className="flex flex-col flex-initial items-center md:items-end">
        <p className="text-lg lg:text-xl font-semibold">{time}</p>
        <p className="text-lg lg:text-xl font-semibold">{date}</p>
        <p className="text-lg lg:text-xl font-semibold">{location}</p>
      </div>
      <p className="md:hidden text-lg lg:text-xl">
        <span className="font-semibold">Advisors: </span>
        {advisors}
      </p>
      <a
        className="font-bold py-2 px-6 rounded text-center border-2 md:hidden"
        href="https://discord.gg/yB4DGpH884"
      >
        Join Event
      </a>
    </div>
  );
};

export default EventCard;
