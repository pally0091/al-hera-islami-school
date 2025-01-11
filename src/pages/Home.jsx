import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp } from "../componants/Animation";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-brandGreen to-brandBlue h-[30rem] w-full flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          background: "linear-gradient(90deg, #14275e, #339457, #0d8297)",
          backgroundSize: "300% 300%",
        }}
      ></motion.div>

      {/* Banner Content */}
      <motion.div
        className="text-center z-10 text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="/img/LOGO.png"
          alt="Logo"
          className="w-40 h-40 mx-auto"
        />
        <h1 className="text-4xl lg:text-6xl font-bold">
          Welcome to{" "}
          <span className="text-brandGold">
            Al Hera Int`l School & Madrasah
          </span>
        </h1>
        <p className="text-lg lg:text-2xl mt-4 px-2 lg:px-0">
          A modern Islamic school ensuring quality education and values.
        </p>
        <Link
          to="/about"
          className="inline-block mt-6 px-6 py-3 bg-brandGold text-lg font-medium rounded-full shadow-lg hover:bg-yellow-600 hover:scale-105 transition-all duration-300 text-brandGreen"
        >
          Learn More
        </Link>
      </motion.div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <motion.section
      className="my-10"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
    >
      <div className="container mx-auto py-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-center">About Us</h2>
        <p className="text-lg lg:text-2xl mt-4 px-2 lg:px-0 text-center">
          Al Hera International School & Madrasah is a modern Islamic school
          that ensures quality education and values.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/img/about-1.jpeg"
              alt="About 1"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl lg:text-2xl font-bold mt-4">Our Vision</h3>
            <p className="text-lg mt-2">
              To be a leading Islamic school that provides quality education and
              values.
            </p>
          </motion.div>
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/img/about-2.jpeg"
              alt="About 2"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl lg:text-2xl font-bold mt-4">Our Mission</h3>
            <p className="text-lg mt-2">
              To provide a conducive learning environment that nurtures
              student&apos;s intellectual, emotional, and spiritual growth.
            </p>
          </motion.div>
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/img/about-3.jpeg"
              alt="About 3"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl lg:text-2xl font-bold mt-4">Our Values</h3>
            <p className="text-lg mt-2">
              We are committed to providing quality education, fostering Islamic
              values, and promoting excellence in all aspects of life.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutSection />
    </div>
  );
};

export default Home;
