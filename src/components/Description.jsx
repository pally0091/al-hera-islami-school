import Marquee from "react-fast-marquee";

const offers = [
  " সাধারণ শিক্ষার পাশাপাশি ধর্মীয় শিক্ষা সমন্বিত একটি পূর্ণাঙ্গ পাঠ্যক্রম।",
  "নৈতিক ও আধ্যাত্মিক বিকাশে মনোনিবেশকৃত একটি সুরক্ষিত শিক্ষাবান্ধব পরিবেশ।",
  "অভিজ্ঞ এবং নিবেদিত শিক্ষকগণ, যারা শিক্ষার্থীদের শিক্ষাজীবনে দিকনির্দেশনা দেন।",
  "সহায়ক একটি সম্প্রদায় যেখানে শিক্ষার্থীরা শিখে, বেড়ে ওঠে এবং সফল হয়।",
];
const DescriptionSection = () => {
  return (
    <section>
      <h2 className="font-bold text-primary mb-6">
        আল হেরা ইন্টারন্যাশনাল স্কুল ও মাদ্রাসা সম্পর্কে
      </h2>
      <p className="text-left leading-relaxed max-w-4xl mx-auto">
        <strong>আল হেরা ইন্টারন্যাশনাল স্কুল ও মাদ্রাসা</strong> বিশ্বমানের
        আধুনিক শিক্ষার সঙ্গে ইসলামী শিক্ষার সমন্বিত একটি শিক্ষাব্যবস্থা প্রদান
        করতে প্রতিশ্রুতিবদ্ধ। আমাদের লক্ষ্য হলো শিক্ষার্থীদের জাগতিক এবং
        আখিরাতের সফলতার জন্য প্রস্তুত করা, তাদের মানসিক, নৈতিক এবং আধ্যাত্মিক
        বিকাশে সহায়তা করা।
      </p>
      <p className="text-left leading-relaxed mt-4 max-w-4xl mx-auto">
        আমরা প্রদান করি:
        <ul className="list-disc list-inside text-left mx-auto max-w-4xl">
          {offers.map((offer, index) => (
            <li key={index}>{offer}</li>
          ))}
        </ul>
      </p>
      <p className="leading-relaxed mt-4 max-w-4xl mx-auto">
        আমরা এমন ব্যাক্তিত্ব গঠন করি যারা শিক্ষায় উৎকর্ষতা অর্জন করে এবং ইসলামী
        মূল্যবোধের মধ্যে দৃঢ় থাকে।
      </p>
      <Marquee
        pauseOnHover={true}
        speed={50}
        gradient={true}
        gradientColor="#f3f4f6"
        gradientWidth={20}
        style={{
          color: "#2d8c7c",
          fontWeight: "bold",
          fontSize: "1.2rem",
          marginTop: "1rem",
        }}
      >
        যতটুকু পড়বো ভালোভাবে পড়বো, English Arabic ভালোভাবে শিখবো, ইসলামী কায়দায়
        জীবন গড়বো।
      </Marquee>
    </section>
  );
};

export default DescriptionSection;
