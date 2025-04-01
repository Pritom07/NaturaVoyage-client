import { NavLink } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { GiGalleon } from "react-icons/gi";
import { MdOutlineAddCard } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";

const Navbar = () => {
  const navlinks = (
    <>
      <li className="text-[18px] text-white font-semibold">
        <NavLink to="/">
          <IoHomeSharp /> Home
        </NavLink>
      </li>
      <li className="text-[18px] text-white font-semibold">
        <NavLink to="/allspots">
          <GiGalleon />
          All Tourist Spot
        </NavLink>
      </li>
      <li className="text-[18px] text-white font-semibold">
        <NavLink to="/addspot">
          <MdOutlineAddCard />
          Add Tourist Spot
        </NavLink>
      </li>
      <li className="text-[18px] text-white font-semibold">
        <NavLink to="/mylist">
          <FaListCheck />
          My List
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-green-500 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-black"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl md:text-3xl font-lora text-white">
            NaturaVoyage
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-yellow-400 border-2 border-amber-700 hover:bg-yellow-500 font-bold text-[16px]">
            SignIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
