import Marquee from "react-fast-marquee";
import { data } from "../data/whyus";
import { BiSolidSchool } from "react-icons/bi";
import { MdOutlineMenuBook } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { TbAirConditioning } from "react-icons/tb";
import { GiCctvCamera } from "react-icons/gi";

const Speciality = () => {
  return (
    <Marquee
      className="text-center my-5 rounded-md"
      gradient={true}
      gradientColor="#2d8c7c"
      gradientWidth={15}
    >
      <p className="bg-accent bg-opacity-25 p-1 text-accent mx-5 w-64 rounded-md font-semibold flex items-center justify-center gap-2">
        <BiSolidSchool />
        Smart Campus
      </p>
      <p className="bg-accent bg-opacity-25 p-1 text-accent mx-5 w-64 rounded-md font-semibold flex items-center justify-center gap-2">
        <MdOutlineMenuBook />
        Quality Education
      </p>
      <p className="bg-accent bg-opacity-25 p-1 text-accent mx-5 w-64 rounded-md font-semibold flex items-center justify-center gap-2">
        <GrNotes />
        Combined Syllabus
      </p>
      <p className="bg-accent bg-opacity-25 p-1 text-accent mx-5 w-64 rounded-md font-semibold flex items-center justify-center gap-2">
        <TbAirConditioning />
        Airconditioned Room
      </p>
      <p className="bg-accent bg-opacity-25 p-1 text-accent mx-5 w-64 rounded-md font-semibold flex items-center justify-center gap-2">
        <GiCctvCamera />
        CC Camera Monitoring
      </p>
    </Marquee>
  );
};
const WhyChooseUs = () => {
  return (
    <section>
      <h2 className="text-center mb-8">কেন আমাদের বেছে নিবেন?</h2>
      <Speciality />
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-[950px] mx-auto">
        {data.map((r, index) => (
          <div
            key={index}
            className="border border-accent bg-accent bg-opacity-20 p-4 hover:shadow-md hover:shadow-accent hover:scale-105 transition-all duration-500 cursor-default rounded-md hover:bg-secondary"
          >
            <p className="leading-relaxed font-semibold">{r}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default WhyChooseUs;
