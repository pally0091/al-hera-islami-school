import { motion } from "framer-motion";
import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";

// Navigation links
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },
];

// Framer Motion Variants
const mobileMenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.4 } },
};

const linkHover = {
  hover: { scale: 1.1, color: "#2563eb" }, // Tailwind's blue-600
};

// Desktop Navigation
const DesktopNav = () => {
  return (
    <ul className="flex space-x-6 text-lg font-medium">
      {navLinks.map((link, index) => (
        <motion.li
          key={index}
          whileHover="hover"
        >
          <motion.a
            href={link.path}
            className="text-gray-700 transition duration-300"
            variants={linkHover}
          >
            {link.name}
          </motion.a>
        </motion.li>
      ))}
    </ul>
  );
};

// Mobile Navigation
const MobileNav = ({ isOpen }) => {
  return (
    <motion.div
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      variants={mobileMenuVariants}
      className="absolute top-16 left-0 w-full bg-white shadow-md"
    >
      <ul className="flex flex-col space-y-4 p-4">
        {navLinks.map((link, index) => (
          <motion.li
            key={index}
            whileHover="hover"
          >
            <motion.a
              href={link.path}
              className="block text-gray-700 transition duration-300"
              variants={linkHover}
            >
              {link.name}
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

// Main Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/img/LOGO.png"
            alt="Logo"
            className="w-10 h-10 object-cover"
          />
          <span className="text-2xl font-bold text-brandGreen">
            Al Hera Int`l School & Madrasah
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <DesktopNav />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 bg-gray-100 rounded-md p-2"
          >
            {isOpen ? <RiCloseLargeFill /> : <HiMenuAlt4 />}
          </button>
          {/* Mobile Menu */}
          <MobileNav isOpen={isOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
