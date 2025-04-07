import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Eachspot from "../Eachspot/Eachspot";

const SpecificCountry = () => {
  const countrySpotsArray = useLoaderData();
  const [spots, setSpots] = useState(countrySpotsArray);
  const { countryName } = useParams();

  return (
    <div className="max-w-6xl mx-auto mt-3.5 px-2">
      <h1 className="text-center font-lora text-4xl font-semibold">
        {countryName}'s Popular Tourist Spots
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
        {spots.map((spot) => (
          <Eachspot
            key={spot._id}
            spot={spot}
            spots={spots}
            setSpots={setSpots}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecificCountry;
