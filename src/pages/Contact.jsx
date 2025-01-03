import { motion } from "framer-motion";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div>
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <motion.form
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onSubmit={handleSubmit}
      >
        <motion.input
          type="text"
          placeholder="Name"
          required
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brandGreen outline-none"
          whileFocus={{ scale: 1.02 }}
        />
        <motion.input
          type="email"
          placeholder="Email"
          required
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brandGreen outline-none"
          whileFocus={{ scale: 1.02 }}
        />
        <motion.textarea
          placeholder="Message"
          required
          className="border border-gray-300 rounded-md p-2 h-32 focus:ring-2 focus:ring-brandGreen outline-none resize-none"
          whileFocus={{ scale: 1.02 }}
        ></motion.textarea>
        <motion.button
          type="submit"
          className="bg-brandBlue text-white py-2 px-4 rounded-md shadow-md hover:bg-brandGold hover:text-black transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send
        </motion.button>
      </motion.form>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <motion.div
      className="text-white p-6 rounded-lg shadow-lg bg-gradient-to-br from-brandGreen to-brandBlue flex flex-col gap-3 justify-center"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      <a
        className="text-lg"
        href="tel:+8801818343879"
      >
        📞 Phone: +880-1818343879
      </a>
      <a
        className="text-lg mt-2"
        href="mailto:alheraintlschool.madrasah@gmail.com"
      >
        📧 Email: alheraintlschool.madrasah@gmail.com
      </a>
      <p className="text-lg mt-2">
        🏠 Address: House-01, Road-02, Block-F, Mirpur-1, Dhaka
      </p>
    </motion.div>
  );
};

const Contact = () => {
  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default Contact;
