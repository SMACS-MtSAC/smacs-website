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
          title="Vectors and Motion"
          description="Learning math vectors and how its used in physics. Understanding 1D and 2D motion and visualizing it in visual graphics using P5.JS"
          time="5:00 PM"
          date="April 30, 2024"
          location="Location: TBD"
          advisors="Josh Cabrera, Jonathan Johannsen, Elvis Cabrera"
        />
      </div>
    </div>
  );
};

export default Events;
