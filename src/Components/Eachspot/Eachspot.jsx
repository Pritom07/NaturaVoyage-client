import PropTypes from "prop-types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ThemeContext } from "../Provider/Provider";

const Eachspot = ({ spot, spots, setSpots }) => {
  const navigate = useNavigate();
  const { User } = useContext(ThemeContext);
  const { _id, spotName, countryName, averageCost, travelTime, photoURL } =
    spot;

  const handleDetails = () => {
    navigate(`/spot/${_id}`);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#F44336",
      cancelButtonColor: "#4CAF50",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://natura-voyage-server.vercel.app/spots/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: `${spotName} has been deleted`,
                icon: "success",
                confirmButtonColor: "#4CAF50",
              });
              const newSpotsArray = spots.filter((spot) => spot._id !== id);
              setSpots(newSpotsArray);
            }
          });
      }
    });
  };

  return (
    <div className="card bg-base-100 border-1 border-green-500 shadow-sm flex font-montserrat">
      <figure>
        <img src={photoURL} alt="TouristSpot" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">Spot Name : {spotName}</h2>
        <h1 className="text-xl font-semibold">Country : {countryName}</h1>
        <div className="flex justify-between items-center text-[15px] font-semibold flex-grow">
          <h1>Average Cost : ${averageCost}</h1>
          <h1>Travel Time : {travelTime}</h1>
        </div>
        <div className="card-actions mt-1 flex justify-between items-center">
          <button
            onClick={handleDetails}
            className={`btn bg-green-500 text-white font-semibold ${
              !User && "w-full"
            }`}
          >
            View Details
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className={`btn bg-red-500 text-white font-semibold ${
              User ? "block" : "hidden"
            }`}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

Eachspot.propTypes = {
  spot: PropTypes.object.isRequired,
  spots: PropTypes.array.isRequired,
  setSpots: PropTypes.func.isRequired,
};

export default Eachspot;
