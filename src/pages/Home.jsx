import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
          <span className="text-yellow-300">Al Hera Intl School</span>
        </h1>
        <p className="text-lg lg:text-2xl mt-4 px-2 lg:px-0">
          A modern Islamic school ensuring quality education and values.
        </p>
        <Link
          to="/about"
          className="inline-block mt-6 px-6 py-3 bg-yellow-400 text-lg font-medium rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 text-brandGreen"
        >
          Learn More
        </Link>
      </motion.div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};

export default Home;
