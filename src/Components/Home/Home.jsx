import { useLoaderData } from "react-router-dom";
import AmazingSpot from "../AmazingSpot/AmazingSpot";
import Swipper from "../Swipper/Swipper";
import Facilities from "../Facilities/Facilities";
import Opportunity from "../Opportunity/Opportunity";
import Achievements from "../Achievements/Achievements";
import { useState } from "react";
import Countries from "../Countries/Countries";
import Talking from "../Talking/Talking";
import FrequentAsked from "../FrequentAsked/FrequentAsked";

const Home = () => {
  const allTouristSpots = useLoaderData();
  const touristSpots = allTouristSpots.slice(0, 6);
  const [spots, setSpots] = useState(touristSpots);
  return (
    <div className="scroll-smooth overflow-y-auto">
      <Swipper />
      <AmazingSpot spots={spots} setSpots={setSpots} />
      <Facilities />
      <Opportunity />
      <Achievements />
      <div className="bg-green-100 rounded-xl">
        <Talking />
      </div>
      <Countries />
      <FrequentAsked />
    </div>
  );
};

export default Home;
