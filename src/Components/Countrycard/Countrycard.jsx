import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";

const Countrycard = ({ country }) => {
  const { _id, country_Name, photoURL, shortDescription } = country;
  const navigate = useNavigate();

  const handleCountriesViews = (countryName) => {
    navigate(`/country/${countryName}`);
  };

  return (
    <div className="relative overflow-hidden cursor-pointer rounded-md group font-montserrat shadow-md border-2 border-green-500">
      <img
        src={photoURL}
        alt="Country Photos"
        className="w-full h-56 object-cover transition-opacity duration-100 group-hover:opacity-40"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-black/20 translate-y-full group-hover:translate-y-0 transition-transform duration-100 ease-out z-10"></div>

      {/* Text & Button Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-center p-4 z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-100 ease-out">
        <h2 className="text-3xl font-bold text-green-400 mb-2 text-center">
          {country_Name}
        </h2>
        <p className="text-white text-md text-center mb-4">
          <GoDotFill className="inline mr-1" />
          {shortDescription}
        </p>
        <button
          onClick={() => handleCountriesViews(country_Name)}
          className="px-4 py-1 bg-green-500 text-white rounded-full text-[15px] font-medium cursor-pointer"
        >
          Visite <FaArrowRight className="inline ml-1" />
        </button>
      </div>
    </div>
  );
};

Countrycard.propTypes = {
  country: PropTypes.object.isRequired,
};

export default Countrycard;
