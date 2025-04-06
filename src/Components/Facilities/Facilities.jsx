import { GiRabbit } from "react-icons/gi";
import { BsFillRouterFill } from "react-icons/bs";
import { TbSolarPanel2 } from "react-icons/tb";
import { GiCycling } from "react-icons/gi";
import { FaPersonSwimming } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";

const Facilities = () => {
  return (
    <div className="mt-6 max-w-6xl mx-auto font-montserrat">
      <h1 className="text-center text-5xl font-lora font-semibold">
        Our Best Facilities
      </h1>
      {/* <section className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
        <div className="card w-96 bg-base-100 card-md shadow-lg">
          <div className="card-body">
            <div className="flex justify-between items-center gap-5">
              <div>
                <GiRabbit className="text-7xl text-green-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Best Security</h2>
                <p className="text-slate-500 text-[12px] text-justify font-semibold mt-1">
                  We are committed to ensuring your safety with top-tier
                  security measures, so you can explore with complete peace of
                  mind.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-[355px] bg-base-100 card-md shadow-lg">
          <div className="card-body">
            <div className="flex justify-between items-center gap-5">
              <div>
                <BsFillRouterFill className="text-7xl text-green-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Free Internet</h2>
                <p className="text-slate-500 text-[12px] text-justify font-semibold mt-1">
                  Stay connected wherever you go with our seamless complimentary
                  Wi-Fi service.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-[355px] bg-base-100 card-md shadow-lg">
          <div className="card-body">
            <div className="flex justify-between items-center gap-5">
              <div>
                <TbSolarPanel2 className="text-7xl text-green-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Solar Energy</h2>
                <p className="text-slate-500 text-[12px] text-justify font-semibold mt-1">
                  We power your adventures sustainably with clean and reliable
                  solar energy.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-[355px] bg-base-100 card-md shadow-lg">
          <div className="card-body">
            <div className="flex justify-between items-center gap-5">
              <div>
                <GiCycling className="text-7xl text-green-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Mountain Biking</h2>
                <p className="text-slate-500 text-[12px] text-justify font-semibold mt-1">
                  Explore thrilling trails with our guided mountain biking
                  experiences for all skill levels.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-[355px] bg-base-100 card-md shadow-lg">
          <div className="card-body">
            <div className="flex justify-between items-center gap-5">
              <div>
                <FaPersonSwimming className="text-7xl text-green-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Swimming and Fishing</h2>
                <p className="text-slate-500 text-[12px] text-justify font-semibold mt-1">
                  Dive in or cast out—our serene waters are perfect for both
                  swimming and fishing.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-[355px] bg-base-100 card-md shadow-lg">
          <div className="card-body">
            <div className="flex justify-between items-center gap-5">
              <div>
                <CgGym className="text-7xl text-green-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold">GYM and Yoga</h2>
                <p className="text-slate-500 text-[12px] text-justify font-semibold mt-1">
                  Rejuvenate your body and mind with access to our modern gym
                  and calming yoga sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <div className="card w-full bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="flex items-start gap-5">
              <GiRabbit className="text-9xl text-green-500" />
              <div>
                <h2 className="text-xl font-bold">Best Security</h2>
                <p className="text-slate-500 text-sm text-justify font-semibold mt-1">
                  We are committed to ensuring your safety with top-tier
                  security measures, so you can explore with complete peace of
                  mind.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="flex items-start gap-5">
              <BsFillRouterFill className="text-9xl text-green-500" />
              <div>
                <h2 className="text-xl font-bold">Free Internet</h2>
                <p className="text-slate-500 text-sm text-justify font-semibold mt-1">
                  Stay connected wherever you go stay with us and trust with our
                  seamless complimentary Wi-Fi service.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="flex items-start gap-5">
              <TbSolarPanel2 className="text-9xl text-green-500" />
              <div>
                <h2 className="text-xl font-bold">Solar Energy</h2>
                <p className="text-slate-500 text-sm text-justify font-semibold mt-1">
                  We power your adventures sustainably with clean and reliable
                  solar energy.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="flex items-start gap-5">
              <GiCycling className="text-9xl text-green-500" />
              <div>
                <h2 className="text-xl font-bold">Mountain Biking</h2>
                <p className="text-slate-500 text-sm text-justify font-semibold mt-1">
                  Explore thrilling trails with our guided mountain biking
                  experiences for all skill levels.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="flex items-start gap-5">
              <FaPersonSwimming className="text-9xl text-green-500" />
              <div>
                <h2 className="text-xl font-bold">Swimming and Fishing</h2>
                <p className="text-slate-500 text-sm text-justify font-semibold mt-1">
                  Dive in or cast out—our serene waters are perfect for both
                  swimming and fishing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="flex items-start gap-5">
              <CgGym className="text-9xl text-green-500" />
              <div>
                <h2 className="text-xl font-bold">GYM and Yoga</h2>
                <p className="text-slate-500 text-sm text-justify font-semibold mt-1">
                  Rejuvenate your body and mind with access to our modern gym
                  and calming yoga sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
