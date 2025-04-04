import { FaGoogle } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "../Provider/Provider";
import { toast } from "react-toastify";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const SignIn = () => {
  const [pass, setPass] = useState(false);
  const navigate = useNavigate();
  const { signIn, googleLogin, githubLogin } = useContext(ThemeContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handlePasswordShow = () => {
    setPass(!pass);
  };

  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-sine" });
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then((userCredential) => {
        const signInUser = userCredential.user;
        const lastSignIn = signInUser.metadata.lastSignInTime;
        const username = signInUser.displayName;
        const user = { email, lastSignIn };

        fetch("http://localhost:5000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              toast.success(`Welcome ${username} , Have a Good Day.`);
            }
            navigate("/");
          });
      })
      .catch((err) => {
        toast.error(
          `${err.message} Enter correct Email and Password or Don't have an account go to SignUp.`
        );
      });
  };

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((res) => {
        const user = res.user;
        const name = user.displayName;
        const email = user.email;
        const lastSignIn = user.metadata.lastSignInTime;
        const userInfo = { name, email, lastSignIn };

        fetch("http://localhost:5000/users", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0 || data.upsertedCount > 0)
              toast.success(`Welcome ${name} , Have a Good Day.`);
            navigate("/");
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGithubLogin = () => {
    githubLogin(githubProvider)
      .then((res) => {
        const user = res.user;
        const name = user.displayName;
        const lastSignInTime = user.metadata.lastSignInTime;
        const User = { name, lastSignInTime };

        fetch("http://localhost:5000/users/github", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(User),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0 || data.upsertedCount > 0) {
              toast.success(`Welcome ${name} , Have a Good Day.`);
              navigate("/");
            }
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
    >
      <div className="hero-content">
        <div className="card w-full">
          <div className="card-body">
            <form
              onSubmit={handleSignIn}
              className="backdrop-blur-xs px-6 py-4 rounded-[5px] border-2 border-amber-700"
            >
              <h1 className="text-center font-lora text-3xl text-white font-semibold font-lora">
                SignIn Here !
              </h1>
              <div className="mt-3">
                <label className="fieldset-label text-white text-[16px] font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="input w-72 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                  name="email"
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
                  name="password"
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
              <div>
                <button
                  onClick={handleGoogleLogin}
                  className="w-full bg-red-700 text-white p-2 rounded-2xl cursor-pointer text-[17px] font-semibold"
                >
                  <FaGoogle className="inline mr-2.5" />
                  Google
                </button>
              </div>
              <div>
                <button
                  onClick={handleGithubLogin}
                  className="w-full bg-black text-white p-2.5 rounded-2xl mt-3.5 cursor-pointer text-[17px] font-semibold"
                >
                  <SiGithub className="inline mr-3" />
                  Github
                </button>
              </div>
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
