import Marquee from "react-fast-marquee";
import { data } from "../data/whyus";

const Speciality = () => {
  return (
    <Marquee
      className="text-center my-5 rounded-md"
      gradient={true}
      gradientColor="#2d8c7c"
      gradientWidth={25}
    >
      <p className="bg-accent bg-opacity-25 p-1 text-accent mx-5 w-64 rounded-md font-semibold">
        Smart Campus
      </p>
      <p className="bg-accent bg-opacity-25 p-1 text-accent mx-5 w-64 rounded-md font-semibold">
        Quality Education
      </p>
      <p className="bg-accent bg-opacity-25 p-1 text-accent mx-5 w-64 rounded-md font-semibold">
        Combined Syllabus
      </p>
      <p className="bg-accent bg-opacity-25 p-1 text-accent mx-5 w-64 rounded-md font-semibold">
        Airconditioned Room
      </p>
      <p className="bg-accent bg-opacity-25 p-1 text-accent mx-5 w-64 rounded-md font-semibold">
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
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
        {data.map((r, index) => (
          <div
            key={index}
            className="border border-accent p-4 hover:shadow-md hover:shadow-accent hover:scale-105 transition-all duration-500 cursor-default bg-white rounded-md"
          >
            <h4 className="font-semibold mb-4">{r.title}</h4>
            <p className="leading-relaxed">{r.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default WhyChooseUs;
