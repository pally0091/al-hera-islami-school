import { motion } from "framer-motion";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";

const LocationContact = () => {
  return (
    <section className="bg-gray-50 text-left py-12 px-6 md:px-20">
      <h2 className="font-bold mb-10">Location & Contact</h2>
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
        {/* Location Section */}
        <motion.div
          className="flex-1 bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-semibold text-primary mb-4">Our Location</h3>
          <p className="leading-relaxed">
            Al Hera Intl School & Madrasah
            <br />
            Mirpur 1, Dhaka, Bangladesh
          </p>
          <p className="leading-relaxed mt-2">
            Open: Saturday to Friday <br />
            8:00 AM - 8:00 PM
          </p>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="flex-1 bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-semibold text-primary mb-4">Contact Us</h3>
          <p className="leading-relaxed">
            Phone:{" "}
            <a
              href="tel:+8801818343879"
              className="text-primary"
            >
              +880 1818-343879
            </a>
          </p>
          <p className="leading-relaxed mt-2">
            Email:{" "}
            <a
              href="mailto:info@alhera.com"
              className="text-primary"
            >
              info@alhera.com
            </a>
          </p>
          <div className="leading-relaxed mt-2">
            Follow us on social media: <br />
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/a.h.i.madrasah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary border border-white p-1 rounded-md hover:border-black transition-all duration-500"
              >
                <AiFillFacebook className="text-3xl" />
              </a>{" "}
              <a
                href="https://www.youtube.com/@alheraintlmadrasah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 border border-white p-1 rounded-md hover:border-black transition-all duration-500"
              >
                <IoLogoYoutube className="text-3xl" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationContact;
