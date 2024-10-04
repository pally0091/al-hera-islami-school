import { data } from "../data/whyus";

const WhyChooseUs = () => {
  return (
    <section>
      <h2 className="text-center mb-8">কেন আমাদের বেছে নিবেন?</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
        {data.map((r, index) => (
          <div
            key={index}
            className="border border-accent p-4 hover:shadow-md hover:shadow-accent transition-all duration-500 cursor-default bg-white rounded-md"
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
