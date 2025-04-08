import PropTypes from "prop-types";
import Eachspot from "../Eachspot/Eachspot";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AmazingSpot = ({ spots, setSpots }) => {
  const navigate = useNavigate();

  const handleSeeAll = () => {
    navigate("allspots");
  };
  return (
    <div
      className="max-w-6xl mx-auto mt-6 px-2"
      style={{ willChange: "transform" }}
    >
      <h1 className="text-center font-lora text-4xl md:text-5xl font-semibold">
        Amazing Tour Places Around The World
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-7">
        {spots.map((spot) => (
          <Eachspot
            key={spot._id}
            spot={spot}
            spots={spots}
            setSpots={setSpots}
          ></Eachspot>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleSeeAll}
          className="text-green-500 text-xl font-semibold cursor-pointer"
        >
          See All <FaArrowRightLong className="inline" />
        </button>
      </div>
    </div>
  );
};

AmazingSpot.propTypes = {
  spots: PropTypes.array.isRequired,
  setSpots: PropTypes.func.isRequired,
};

export default AmazingSpot;
