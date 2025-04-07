import { useLoaderData, useNavigate } from "react-router-dom";
import { MdOutlineUpdate } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";

const Mylist = () => {
  const userAddedSpots = useLoaderData();
  const navigate = useNavigate();

  const handleUpdateSpot = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="max-w-6xl mx-auto font-montserrat mt-5 lg:mt-3.5 px-2">
      <h1 className="text-4xl font-lora font-semibold text-center">
        My Added Tourist Spots
      </h1>
      <h1 className="font-montserrat text-xl text-justify lg:text-center mt-3">
        Discover the perfect escape where nature meets tranquility and adventure
        begins. Breathe in the fresh air, explore hidden wonders, and let your
        soul unwind in a place where every corner tells a story. Whether you're
        seeking peace, thrill, or unforgettable memories, this destination
        offers it all — wrapped in beauty, calm, and a touch of magic.
      </h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-5">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Spot Name</th>
              <th>Country Name</th>
              <th>Average Cost</th>
            </tr>
          </thead>
          <tbody>
            {userAddedSpots.map((spot, id) => (
              <tr key={spot._id}>
                <th>{id + 1}</th>
                <td className="font-semibold">{spot.spotName}</td>
                <td className="font-semibold">{spot.countryName}</td>
                <td className="font-semibold">${spot.averageCost}</td>
                <td>
                  <button
                    onClick={() => handleUpdateSpot(spot._id)}
                    className="bg-green-500 text-white text-[16px] p-2 font-semibold rounded-[5px] cursor-pointer"
                  >
                    <MdOutlineUpdate className="inline mr-1 text-xl" />
                    Update
                  </button>
                </td>
                <td>
                  <button className="bg-red-500 text-white text-[16px] font-semibold p-2 rounded-[5px] cursor-pointer">
                    <RiDeleteBinFill className="inline mr-1 text-xl" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mylist;
