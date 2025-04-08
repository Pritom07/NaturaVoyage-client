import { IoIosStar } from "react-icons/io";

const Talking = () => {
  return (
    <div
      className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8 mt-8 sm:mt-10 md:mt-14 xl:mt-16"
      style={{ willChange: "transform" }}
    >
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-lora font-semibold text-center lg:text-left leading-14">
            What they are talking about our policy
          </h1>
          <p className="text-slate-500 font-medium mt-4 text-justify font-montserrat text-base sm:text-[17px]">
            Our tourism information management website is committed to
            protecting your privacy and ensuring a safe, personalized travel
            experience. We only collect necessary information to help you
            explore destinations, manage bookings, and receive relevant
            recommendations.
          </p>
        </div>

        <div>
          <div className="chat chat-start">
            <div className="chat-bubble bg-white p-6 sm:p-8 w-full max-w-[600px]">
              <p className="flex flex-wrap gap-1 text-green-600 text-xl sm:text-2xl">
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
                <IoIosStar />
              </p>
              <p className="mt-4 text-justify font-montserrat text-base sm:text-[18px] font-semibold leading-relaxed">
                "At the heart of our journey lies a simple mission — to make
                travel easier, richer, and more memorable for everyone. We
                believe exploring the world should be joyful and accessible, and
                our platform is built to guide you through every step of that
                adventure."
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <div className="chat-image avatar">
              <div className="w-16 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="/Images/mypic.jpg"
                />
              </div>
            </div>
            <div>
              <h1 className="font-montserrat text-[18px] font-semibold">
                Pritom Mohajon
              </h1>
              <p className="text-slate-500 font-semibold">Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Talking;
