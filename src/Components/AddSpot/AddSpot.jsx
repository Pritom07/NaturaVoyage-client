import { useLottie } from "lottie-react";
import globeLottie from "../globe.json";
import { useContext } from "react";
import { ThemeContext } from "../Provider/Provider";
import Swal from "sweetalert2";

const AddSpot = () => {
  const { User } = useContext(ThemeContext);
  const userName = User.displayName;
  const userEmail = User.email;

  const options = {
    animationData: globeLottie,
    loop: true,
  };
  const { View } = useLottie(options);

  const handleAddSpot = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const spotName = form.get("spotname");
    const countryName = form.get("countryname");
    const location = form.get("location");
    const averageCost = form.get("averagecost");
    const seasonality = form.get("seasonality");
    const travelTime = form.get("traveltime");
    const totalVisitors = form.get("totalvisitors");
    const shortDescription = form.get("shortdescription");
    const photoURL = form.get("photourl");

    const spotInfo = {
      spotName,
      countryName,
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

    fetch("http://localhost:5000/spots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spotInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: `${spotName} added successfully !`,
            icon: "success",
            draggable: true,
            confirmButtonColor: "#4CAF50",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="px-2 flex">
      <div className="w-[50%] lg:w-[35%] xl:w-[15%] hidden md:block p-2">
        {View}
      </div>
      <div className=" max-w-6xl mx-auto md:pr-[6%] lg:pr-[5%] mt-5 lg:mt-3.5">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-lora font-semibold text-4xl">Add Tourist Spot</h1>
          <h1 className="font-montserrat text-xl text-justify lg:text-center mt-3">
            Exploring new tourist spots enriches our understanding of the world,
            offering a glimpse into diverse cultures, landscapes, and histories.
            Adding a new destination to the map not only attracts travelers
            seeking unique experiences but also boosts local communities through
            tourism-driven opportunities.
          </h1>
        </div>
        <form onSubmit={handleAddSpot} className="mt-4">
          <div className="flex flex-col md:flex-row justify-center tems-center">
            <div className="w-full md:w-1/2">
              <label className="text-[18px] font-semibold">
                Tourist Spot Name
              </label>
              <input
                type="text"
                name="spotname"
                className="input w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter Spot Name"
                required
              />
            </div>
            <div className="w-full md:w-1/2 md:ml-7">
              <label className="text-[18px] font-semibold">Country Name</label>
              <input
                type="text"
                name="countryname"
                className="input w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter Country Name"
                required
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
                placeholder="Enter Location"
                required
              />
            </div>
            <div className="w-full md:w-1/2 md:ml-7">
              <label className="text-[18px] font-semibold">Average Cost</label>
              <input
                type="text"
                name="averagecost"
                className="input w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter Average Cost in $ like- 200,300"
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
                placeholder="Enter Seasonality like- Summer, Winter etc."
                required
              />
            </div>
            <div className="w-full md:w-1/2 md:ml-8">
              <label className="text-[18px] font-semibold">Travel Time</label>
              <input
                type="text"
                name="traveltime"
                className="input w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter Travel Time like - 7 days"
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
                placeholder="Enter Total Visitors Per Year like - 10000"
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
                placeholder="Enter Short Description"
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
              placeholder="Enter PhotoURL"
              required
            />
          </div>
          <button className="w-full bg-green-500 text-white text-[18px] px-2 py-2.5 font-semibold mt-5 rounded-xl cursor-pointer hover:bg-green-600">
            Add Tourist Spot
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSpot;
