import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Eachspot = ({ spot }) => {
  const navigate = useNavigate();
  const { _id, spotName, countryName, averageCost, travelTime, photoURL } =
    spot;

  const handleDetails = () => {
    navigate(`/spot/${_id}`);
  };

  return (
    <div className="card bg-base-100 shadow-sm flex font-montserrat">
      <figure>
        <img src={photoURL} alt="TouristSpot" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">Spot Name : {spotName}</h2>
        <h1 className="text-xl font-semibold">Country : {countryName}</h1>
        <div className="flex justify-between items-center text-[15px] font-semibold flex-grow">
          <h1>Average Cost : {averageCost}</h1>
          <h1>Travel Time : {travelTime}</h1>
        </div>
        <div className="card-actions mt-1">
          <button
            onClick={handleDetails}
            className="btn bg-green-500 w-full text-white font-semibold"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

Eachspot.propTypes = {
  spot: PropTypes.object.isRequired,
};

export default Eachspot;
