import { FaArrowLeftLong } from "react-icons/fa6";
import { Outlet, useNavigate } from "react-router-dom";

const UserAccess = () => {
  const navigate = useNavigate();

  const handlebacktrack = () => {
    navigate("/");
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/Images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button
        onClick={handlebacktrack}
        className="bg-green-500 p-2 text-white rounded-[5px] font-semibold mt-5 ml-8 cursor-pointer"
      >
        <FaArrowLeftLong className="inline mr-2" />
        Back to home
      </button>
      <Outlet />
    </div>
  );
};

export default UserAccess;
