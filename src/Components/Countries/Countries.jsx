import { useEffect, useState } from "react";
import Countrycard from "../Countrycard/Countrycard";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://natura-voyage-server.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div
      className="max-w-6xl mx-auto px-2 mt-10"
      style={{ willChange: "transform" }}
    >
      <h1 className="text-center font-lora text-4xl md:text-5xl font-semibold">
        Top Views South-East Asia Countries
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
        {countries.map((country) => (
          <Countrycard key={country._id} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
