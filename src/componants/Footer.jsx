import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const presentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-6">
        {/* School Info */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-bold mb-4">
            <span className="text-brandGreen">Al Hera</span> Intl School &
            Madrasah
          </h3>
          <p className="text-gray-400">
            Providing modern, Islamic, and software-based education to prepare
            students for a better future.
          </p>
        </div>

        {/* Location */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-bold mb-4">Our Location</h3>
          <p className="text-gray-400">
            Campus 1: House-1, Road-2, Block-F <br />
            Mirpur-1, Dhaka
          </p>
          <p className="text-gray-400">
            Campus 2: House-13, Road-2, Block-F <br />
            Mirpur-1, Dhaka
          </p>
          <a
            className="text-gray-400 hover:text-green-500 transition-colors duration-300"
            href="tel:+8801818343879"
          >
            +880 1818-343879
          </a>
        </div>

        {/* Explore Links */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-bold mb-4">Explore Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 justify-center">
            <a
              href="https://www.facebook.com/a.h.i.madrasah"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.youtube.com/@alheraintlmadrasah"
              className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=8801818343879"
              className="text-gray-400 hover:text-green-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-4 text-gray-400">
        © 2023-{presentYear} Al Hera Intl School & Madrasah, All Rights
        Reserved.
        <br />
        Designed | Created by{" "}
        <a
          href="https://github.com/pally0091/"
          target="_blank"
          className="text-green-500 hover:underline"
        >
          R-Frontline
        </a>
      </div>
    </footer>
  );
};

export default Footer;
