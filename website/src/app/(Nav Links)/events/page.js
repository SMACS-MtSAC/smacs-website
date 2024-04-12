import EventCard from "@/components/Cards/EventCard";
const Events = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-4xl text-center md:text-left">
        SMACS Events
      </h1>
      <hr className="border-2 border-gray-500" />
      <div className="flex flex-col items-center space-y-4">
        <EventCard
          title="Event 1"
          description="Elit ipsum pariatur officia incididunt mollit incididunt Lorem laboris. Cupidatat ullamco incididunt sint sunt consectetur aute sunt sunt do cupidatat labore."
          time="12:00 PM"
          date="March 1, 2022"
          location="Building 9, Room 123"
          advisors="John Doe, Jane Smith"
        />
        <EventCard
          title="Event 2"
          description="Proident nisi non pariatur exercitation tempor magna incididunt.Ea sit occaecat sunt est dolore.Ipsum eu eu ea anim mollit pariatur est cillum labore eu."
          time="1:00 PM"
          date="March 2, 2022"
          location="Building 9, Room 124"
          advisors="John Doe, Jane Smith"
        />
        <EventCard
          title="Event 3"
          description="Est aliqua irure veniam occaecat eu qui laborum elit non veniam quis adipisicing occaecat.Excepteur sit voluptate laborum mollit sunt fugiat eiusmod nostrud.Ex nulla aute id ut laborum in esse.Commodo adipisicing dolore elit aliqua."
          time="2:00 PM"
          date="March 3, 2022"
          location="Building 9, Room 125"
          advisors="John Doe, Jane Smith"
        />
      </div>
    </div>
  );
};

export default Events;
