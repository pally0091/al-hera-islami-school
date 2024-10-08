import { programs } from "../data/programs";

const ProgramsCurriculum = () => {
  return (
    <section className="bg-gray-50 text-left py-12 px-6 md:px-20">
      <h2 className="font-bold mb-10">প্রোগ্রাম ও পাঠ্যক্রম</h2>
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {programs.map((program, index) => (
          <div
            key={index}
            className="relative programs pb-4 cursor-pointer"
          >
            <h4 className="font-semibold mb-4 hover:text-primary">
              {program.title}
            </h4>
            <p className="leading-relaxed">{program.description}</p>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 ease-in-out underline"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsCurriculum;
