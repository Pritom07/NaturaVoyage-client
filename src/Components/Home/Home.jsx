import { useLoaderData } from "react-router-dom";
import AmazingSpot from "../AmazingSpot/AmazingSpot";
import Swipper from "../Swipper/Swipper";

const Home = () => {
  const allTouristSpots = useLoaderData();
  const touristSpots = allTouristSpots.slice(0, 6);
  return (
    <div>
      <Swipper />
      <AmazingSpot touristSpots={touristSpots} />
    </div>
  );
};

export default Home;
