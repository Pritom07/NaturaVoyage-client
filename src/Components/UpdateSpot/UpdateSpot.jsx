import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ThemeContext } from "../Provider/Provider";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const desiredSpot = useLoaderData();
  const navigate = useNavigate();
  const { User } = useContext(ThemeContext);
  const userName = User?.displayName;
  const userEmail = User?.email;

  const {
    _id,
    spotName,
    countryName,
    location,
    averageCost,
    seasonality,
    travelTime,
    totalVisitors,
    shortDescription,
    photoURL,
  } = desiredSpot;

  const handleUpdateSpot = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const location = form.get("location");
    const averageCost = form.get("averagecost");
    const seasonality = form.get("seasonality");
    const travelTime = form.get("traveltime");
    const totalVisitors = form.get("totalvisitors");
    const shortDescription = form.get("shortdescription");
    const photoURL = form.get("photourl");

    const UpdatedSpotInfo = {
      location,
      averageCost,
      seasonality,
      travelTime,
      totalVisitors,
      shortDescription,
      photoURL,
      userName,
      userEmail,
    };

    fetch(`http://localhost:5000/spots/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedSpotInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: `${spotName} is updated !`,
            icon: "success",
            draggable: true,
            confirmButtonColor: "#4CAF50",
          });
          navigate(`/mylist/${encodeURIComponent(User?.email)}`);
          e.target.reset();
        }
      });
  };
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mt-5 lg:mt-3.5 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-lora font-semibold">{`${spotName} Updating Page`}</h1>
      </div>
      <form onSubmit={handleUpdateSpot} className="mt-6 font-montserrat">
        <div className="flex flex-col md:flex-row justify-center tems-center">
          <div className="w-full md:w-1/2">
            <label className="text-[18px] font-semibold">
              Tourist Spot Name
            </label>
            <input
              type="text"
              name="spotname"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-green-500 font-semibold"
              defaultValue={spotName}
              disabled
            />
          </div>
          <div className="w-full md:w-1/2 md:ml-7">
            <label className="text-[18px] font-semibold">Country Name</label>
            <input
              type="text"
              name="countryname"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-green-500 font-semibold"
              defaultValue={countryName}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-2">
          <div className="w-full md:w-1/2">
            <label className="text-[18px] font-semibold">Location</label>
            <input
              type="text"
              name="location"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              defaultValue={location}
              required
            />
          </div>
          <div className="w-full md:w-1/2 md:ml-7">
            <label className="text-[18px] font-semibold">Average Cost</label>
            <input
              type="text"
              name="averagecost"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              defaultValue={averageCost}
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-2">
          <div className="w-full md:w-1/2">
            <label className="text-[18px] font-semibold">Seasonality</label>
            <input
              type="text"
              name="seasonality"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              defaultValue={seasonality}
              required
            />
          </div>
          <div className="w-full md:w-1/2 md:ml-8">
            <label className="text-[18px] font-semibold">Travel Time</label>
            <input
              type="text"
              name="traveltime"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              defaultValue={travelTime}
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-2">
          <div className="w-full md:w-1/2">
            <label className="text-[18px] font-semibold">
              Total Visitors Per Year
            </label>
            <input
              type="text"
              name="totalvisitors"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              defaultValue={totalVisitors}
              required
            />
          </div>
          <div className="w-full md:w-1/2 md:ml-8">
            <label className="text-[18px] font-semibold">
              Short Description
            </label>
            <input
              type="text"
              name="shortdescription"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              defaultValue={shortDescription}
              required
            />
          </div>
        </div>
        <div className="w-full mt-2">
          <label className="text-[18px] font-semibold">PhotoURL</label>
          <input
            type="text"
            name="photourl"
            className="input w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            defaultValue={photoURL}
            required
          />
        </div>
        <button className="w-full bg-green-500 text-white text-[18px] px-2 py-2.5 font-semibold mt-5 rounded-xl cursor-pointer hover:bg-green-600">
          Update Tourist Spot
        </button>
      </form>
    </div>
  );
};

export default UpdateSpot;
