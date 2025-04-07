import { GiMountains } from "react-icons/gi";
import { GrAchievement } from "react-icons/gr";
import { MdOutlineRateReview } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Achievements = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -1500 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.8 } },
  };
  return (
    <div className="max-w-6xl mx-auto mt-9 font-montserrat px-2">
      <h1 className="font-lora text-4xl md:text-5xl font-semibold text-center">
        Our Achievements
      </h1>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-4 mt-6"
      >
        <motion.div
          variants={itemVariants}
          className="card bg-base-100 inset-shadow-sm inset-shadow-green-500"
        >
          <figure className="px-10 pt-10">
            <GiMountains className="text-9xl text-green-500" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-4xl font-bold">3500+</h2>
            <p className="text-slate-500 text-xl font-medium">Happy Traveler</p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="card bg-base-100 inset-shadow-sm inset-shadow-green-500"
        >
          <figure className="px-10 pt-10">
            <GrAchievement className="text-9xl text-green-500" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-4xl font-bold">1650+</h2>
            <p className="text-slate-500 text-xl font-medium">Tour Success</p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="card bg-base-100 inset-shadow-sm inset-shadow-green-500"
        >
          <figure className="px-10 pt-10">
            <MdOutlineRateReview className="text-9xl text-green-500" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-4xl font-bold">99.5%</h2>
            <p className="text-slate-500 text-xl font-medium">
              Positive Reviews
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="card bg-base-100 inset-shadow-sm inset-shadow-green-500"
        >
          <figure className="px-10 pt-10">
            <FaAward className="text-9xl text-green-500" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-4xl font-bold">62k+</h2>
            <p className="text-slate-500 text-xl font-medium">Award Winning</p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Achievements;
