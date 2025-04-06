import { useLoaderData } from "react-router-dom";
import AmazingSpot from "../AmazingSpot/AmazingSpot";
import Swipper from "../Swipper/Swipper";
import Facilities from "../Facilities/Facilities";
import Opportunity from "../Opportunity/Opportunity";
import Achievements from "../Achievements/Achievements";

const Home = () => {
  const allTouristSpots = useLoaderData();
  const touristSpots = allTouristSpots.slice(0, 6);
  return (
    <div>
      <Swipper />
      <AmazingSpot touristSpots={touristSpots} />
      <Facilities />
      <Opportunity />
      <Achievements />
    </div>
  );
};

export default Home;
