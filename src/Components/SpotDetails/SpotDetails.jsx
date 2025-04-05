import { useLoaderData } from "react-router-dom";
import Map from "../Map/Map";

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
    <div className="max-w-6xl mx-auto">
      <section className="grid grid-cols-12 gap-5 mt-8">
        <div className="col-span-7">
          <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <Map />
        </div>
      </section>
    </div>
  );
};

export default SpotDetails;
