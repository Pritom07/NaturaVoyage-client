import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swipper.css";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Swipper = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  console.log(activeSlide);
  return (
    <div>
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          speed={1000}
          className="overflow-hidden"
          effect={"coverflow"}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          onSlideChange={(swiperslide) =>
            setActiveSlide(swiperslide.activeIndex)
          }
        >
          {/* <SwiperSlide className="relative w-full h-96 md:h-[35rem]">
            <img
              src="/Images/City.jpg"
              alt="Slide 1"
              className="w-full h-96 md:h-[35rem] object-cover"
            />
            {activeSlide === 0 && (
              <div className="absolute top-1/2 left-1/2 text-white sm:text-lg md:text-2xl lg:text-5xl font-semibold px-4 w-[90%] md:w-[70%]">
                <h1>
                  Life is simple{" "}
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    <Typewriter
                      words={["Eat", "Sleep", "Code", "Repeat!"]}
                      loop={5}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
              </div>
            )}
          </SwiperSlide> */}

          <SwiperSlide className="relative w-full h-96 md:h-[35rem]">
            <img
              src="/Images/City.jpg"
              alt="Slide 1"
              className="w-full h-96 md:h-[35rem] object-cover"
            />
            {activeSlide === 0 && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-[#FF7F50] text-lg sm:text-xl md:text-4xl lg:text-6xl font-bold text-center px-4 w-full md:w-[70%]">
                <h1 className="leading-tight">
                  Travel is amazing{" "}
                  <span className="text-[#FFA500]">
                    <Typewriter
                      words={["Explore", "Book", "Adventure", "Experience!"]}
                      loop={Infinity}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide className="relative w-full h-96 md:h-[35rem]">
            <img
              src="/Images/Mountain.jpg"
              alt="Slide 2"
              className="w-full h-96 md:h-[35rem] object-cover"
            />
            {activeSlide === 1 && (
              <motion.div
                initial={{ opacity: 0, y: -300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white sm:text-lg md:text-3xl lg:text-5xl font-bold text-center px-4 w-[90%] md:w-[70%]"
              >
                "Discover breathtaking destinations, hassle-free travel
                planning, and exclusive deals – all in one place!"
              </motion.div>
            )}
          </SwiperSlide>

          <SwiperSlide className="relative w-full h-96 md:h-[35rem]">
            <img
              src="/Images/Sea.jpg"
              alt="Slide 3"
              className="w-full h-96 md:h-[35rem] object-cover"
            />
            {activeSlide === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white sm:text-lg md:text-3xl lg:text-5xl font-bold text-center px-4 w-[90%] md:w-[70%]"
              >
                "Your gateway to adventure – seamless bookings, expert travel
                guides, and memories that last a lifetime!"
              </motion.div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Swipper;
