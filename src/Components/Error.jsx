import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate("/");
  };
  return (
    <div className="max-w-6xl mx-auto">
      <button
        onClick={handlenavigate}
        className="bg-green-500 p-2 text-white rounded-[5px] font-semibold mt-5 ml-8 cursor-pointer"
      >
        <FaArrowLeftLong className="inline" /> Go to Home
      </button>
      <div className="flex justify-center items-center">
        <img src="/Images/ErrorPage.png" />
      </div>
    </div>
  );
};

export default Error;
