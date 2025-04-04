import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import tour from "../tour.json";
import { useLottie } from "lottie-react";

const Footer = () => {
  const options = {
    animationData: tour,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <div className="mt-10">
      <div
        className="h-full py-10"
        style={{
          backgroundImage: "url('/Images/footerbackground.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="font-montserrat grid grid-cols-12 gap-4 max-w-6xl mx-auto">
          <div className="col-span-12 lg:col-span-8">
            <div className="w-[20%]">{View}</div>
            <h1 className="font-lora text-4xl font-semibold text-green-500">
              NaturaVoyage
            </h1>
            <h1 className="mt-2.5 font-semibold text-slate-500">
              "Every place has a story; let’s add a new chapter to the world’s
              travel diary. Hidden gems become wonders when shared with the
              world."
            </h1>
            <div className="flex mt-4">
              <a href="" target="blank" className="text-4xl">
                <FaFacebook />
              </a>
              <a href="" target="blank" className="text-4xl ml-5">
                <BsTwitterX />
              </a>
              <a href="" target="blank" className="text-4xl ml-5">
                <IoLogoYoutube />
              </a>
              <a href="" target="blank" className="text-4xl ml-5">
                <FaLinkedin />
              </a>
            </div>
            <h1 className="font-lora text-3xl font-semibold mt-4 text-green-500">
              Stay With Us
            </h1>
            <div className="mt-3">
              <div>
                <BsFillTelephonePlusFill className="inline mr-2 text-xl" />
                <span className="font-semibold text-slate-500">
                  +880 17383967
                </span>
              </div>
              <div>
                <MdAttachEmail className="inline mr-2 mt-2 text-xl" />
                <span className="font-semibold text-slate-500">
                  naturavoyage@gmail.com
                </span>
              </div>
              <div className="-ml-0.5">
                <FaLocationDot className="inline mr-2 mt-2 text-xl" />
                <span className="font-semibold text-slate-500">
                  College Road, Chawkbazar, Chattogram
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 pt-20">
            <h1 className="font-lora text-4xl font-semibold text-green-500">
              Contact Information
            </h1>
            <form className="mt-3">
              <div>
                <label className="text-slate-400 font-medium">Name</label>
                <input
                  type="text"
                  className="input w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Name"
                />
              </div>
              <div className="mt-2">
                <label className="text-slate-400 font-medium">Email</label>
                <input
                  type="email"
                  className="input w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Email"
                />
              </div>
              <div className="mt-2">
                <label className="text-slate-400 font-medium">Message</label>
                <input
                  type="text"
                  className="input w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Message"
                />
              </div>
              <button className="text-green-500 border-2 border-green-500 py-2 px-4 rounded-2xl mt-3.5 cursor-pointer font-semibold hover:scale-x-95">
                Contact
              </button>
            </form>
          </div>
        </section>
      </div>
      <div className="footer sm:footer-horizontal footer-center bg-green-500 text-white font-semibold text-[18px] p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <span className="font-lora">NaturaVoyage</span>
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
