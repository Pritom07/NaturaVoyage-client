import { FaGoogle } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [pass, setPass] = useState(false);

  const handlePasswordShow = () => {
    setPass(!pass);
  };

  return (
    <div className="hero flex justify-center items-center min-h-screen">
      <div className="hero-content">
        <div className="card w-full">
          <div className="card-body">
            <form className="backdrop-blur-xs px-6 py-4 rounded-[5px] border-2 border-amber-700">
              <h1 className="text-center font-lora text-3xl text-white font-semibold">
                SignIn Here !
              </h1>
              <div className="mt-3">
                <label className="fieldset-label text-white text-[16px] font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="input w-72 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mt-2">
                <label className="fieldset-label text-white text-[16px] font-medium">
                  Password
                </label>
                <input
                  type={pass ? "text" : "password"}
                  className="input w-72 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500 relative"
                  placeholder="Enter Your Password"
                />
              </div>
              <div
                className="text-2xl cursor-pointer absolute top-44 right-10"
                onClick={handlePasswordShow}
              >
                {pass ? <IoEyeOff /> : <IoEye />}
              </div>
              <button className="btn w-full bg-green-500 text-white text-[16px] border-2 border-green-500 rounded-2xl mt-5 hover:scale-x-95">
                SignIn
              </button>
              <div className="divider divider-success text-white font-semibold">
                OR
              </div>
              <button className="w-full bg-red-700 text-white p-2 rounded-2xl cursor-pointer text-[17px] font-semibold">
                <FaGoogle className="inline mr-2.5" />
                Google
              </button>
              <br />
              <button className="w-full bg-black text-white p-2.5 rounded-2xl mt-3.5 cursor-pointer text-[17px] font-semibold">
                <SiGithub className="inline mr-3" />
                Github
              </button>
              <h1 className="text-white text-center mt-3 text-[15px] font-semibold">
                Don't have an account ? Go to
                <span className="ml-1 text-yellow-500">
                  <Link to="/pages/signup">SignUp</Link>
                </span>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
