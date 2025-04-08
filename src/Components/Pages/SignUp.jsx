import { useContext, useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "../Provider/Provider";
import { toast } from "react-toastify";

const SignUp = () => {
  const [pass, setPass] = useState(false);
  const navigate = useNavigate();
  const { createAccount, updateUserProfile } = useContext(ThemeContext);

  const handlePasswordShow = () => {
    setPass(!pass);
  };

  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-sine", once: true });
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!regex.test(password)) {
      toast.error(
        "Your password Must have an Uppercase letter, a Lowercase letter and Length must be atleast 6 character."
      );
      return;
    }

    createAccount(email, password)
      .then((userCredential) => {
        const signUpUser = userCredential.user;
        const creationTime = signUpUser.metadata.creationTime;
        const lastSignIn = signUpUser.metadata.lastSignInTime;
        const user = { name, email, password, creationTime, lastSignIn };
        const userobj = { displayName: name };

        updateUserProfile(userobj)
          .then(() => {})
          .catch((err) => {
            toast.error(err.message);
          });

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success("User created successfully !");
            }
            navigate("/pages/signin");
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div
      data-aos="fade-down"
      className="hero flex justify-center items-center min-h-screen font-montserrat"
      style={{ willChange: "transform" }}
    >
      <div className="hero-content">
        <div className="card w-full">
          <div className="card-body">
            <form
              onSubmit={handleSignUp}
              className="backdrop-blur-xs px-6 py-4 rounded-[5px] border-2 border-amber-700"
            >
              <h1 className="text-center font-lora text-3xl text-white font-semibold">
                SignUp Here !
              </h1>
              <div className="mt-3">
                <label className="fieldset-label text-white text-[16px] font-medium">
                  Name
                </label>
                <input
                  type="text"
                  className="input w-80 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="mt-2">
                <label className="fieldset-label text-white text-[16px] font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="input w-80 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="mt-2">
                <label className="fieldset-label text-white text-[16px] font-medium">
                  Password
                </label>
                <input
                  type={pass ? "text" : "password"}
                  className="input w-80 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                  name="password"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div
                className="text-2xl cursor-pointer absolute top-64 right-8"
                onClick={handlePasswordShow}
              >
                {pass ? <IoEyeOff /> : <IoEye />}
              </div>
              <button className="btn w-full bg-green-500 text-white text-[16px] border-2 border-green-500 rounded-2xl mt-5 hover:scale-x-95">
                SignUp
              </button>
              <h1 className="text-white text-center mt-3 text-[15px] font-semibold">
                Already have an account ? Go to
                <span className="ml-1 text-yellow-500">
                  <Link to="/pages/signin">SignIn</Link>
                </span>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
