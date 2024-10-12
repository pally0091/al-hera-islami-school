import { programs } from "../data/programs";
import { motion } from "framer-motion";
import NoticeBoard from "./NoticeBoard";

const ProgramsCurriculum = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <section
        className="bg-gray-50 text-left py-12 px-6 md:px-20"
        aria-labelledby="programs-heading"
      >
        <h2 className="font-bold mb-10">প্রোগ্রাম ও পাঠ্যক্রম</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative programs pb-4 cursor-pointer"
            >
              <h4 className="font-semibold mb-4 hover:text-primary">
                {program.title}
              </h4>
              <p className="leading-relaxed">{program.description}</p>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 ease-in-out underline"></div>
            </motion.div>
          ))}
        </div>
      </section>
      <NoticeBoard />
    </div>
  );
};

export default ProgramsCurriculum;
