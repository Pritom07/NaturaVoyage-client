import { useLoaderData } from "react-router-dom";
import Map from "../Map/Map";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const SpotDetails = () => {
  const spot = useLoaderData();
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
  } = spot;
  return (
    <div className="max-w-6xl mx-auto font-montserrat px-2">
      <section className="grid grid-cols-12 gap-5 mt-8">
        <div className="col-span-12 xl:col-span-8">
          <div className="card lg:card-side bg-base-100 shadow-sm border-2 border-green-500">
            <img src={photoURL} className=" w-full lg:w-96" alt="TouristSpot" />
            <div className="card-body">
              <h2 className="card-title text-2xl font-semibold font-lora">
                {spotName}
              </h2>
              <h1 className="text-xl font-semibold">
                Country Name : {countryName}
              </h1>
              <h1 className="text-[16px] font-semibold">
                <VscDebugBreakpointLog className="inline" /> Average Cost :{" "}
                <span className="text-slate-500">${averageCost}</span>
              </h1>
              <h1 className="text-[16px] font-semibold">
                <VscDebugBreakpointLog className="inline" /> Travel Time :{" "}
                <span className="text-slate-500">{travelTime}</span>
              </h1>
              <h1 className="text-[16px] font-semibold">
                <VscDebugBreakpointLog className="inline" /> Location :{" "}
                <span className="text-slate-500">{location}</span>
              </h1>
              <h1 className="text-[16px] font-semibold">
                <VscDebugBreakpointLog className="inline" /> Total Visitors Per
                Year : <span className="text-slate-500">{totalVisitors}</span>
              </h1>
              <h1 className="text-[16px] font-semibold">
                <VscDebugBreakpointLog className="inline" /> Seasonality :{" "}
                <span className="text-slate-500">{seasonality}</span>
              </h1>
              <h1 className="text-[16px] font-semibold">
                <VscDebugBreakpointLog className="inline" /> Short Description :{" "}
                <span className="text-slate-500">{shortDescription}</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-4">
          <Map />
        </div>
      </section>
    </div>
  );
};

export default SpotDetails;
