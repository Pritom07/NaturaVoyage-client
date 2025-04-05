import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Eachspot from "../Eachspot/Eachspot";
import { IoMdArrowDropdown } from "react-icons/io";
import { ClockLoader } from "react-spinners";

const AllSpots = () => {
  const allSpots = useLoaderData();
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const timestand = setTimeout(() => {
      setSpots(allSpots);
    }, 2000);
    return () => {
      clearTimeout(timestand);
    };
  }, [allSpots]);

  const handleAscending = () => {
    const sorted = [...spots].sort(
      (a, b) => parseInt(a.averageCost) - parseInt(b.averageCost)
    );
    setSpots(sorted);
  };

  const handleDescending = () => {
    const sorted = [...spots].sort(
      (a, b) => parseInt(b.averageCost) - parseInt(a.averageCost)
    );
    setSpots(sorted);
  };

  return (
    <div className="max-w-6xl mx-auto mt-3 px-2">
      <div className="flex justify-end">
        <details className="dropdown">
          <summary className="btn m-1 bg-green-500 text-white">
            See Averege Cost By <IoMdArrowDropdown />
          </summary>
          <ul className="menu dropdown-content border-2 border-green-500 bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={handleAscending} className="font-semibold">
              <a>Ascending Order</a>
            </li>
            <li onClick={handleDescending} className="font-semibold">
              <a>Descending Order</a>
            </li>
          </ul>
        </details>
      </div>
      {spots.length === 0 ? (
        <section className="flex justify-center items-center min-h-screen">
          <ClockLoader color="#4CAF50" size={55} speedMultiplier={1} />
        </section>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-5">
          {spots.map((spot) => (
            <Eachspot key={spot._id} spot={spot} />
          ))}
        </section>
      )}
    </div>
  );
};

export default AllSpots;
