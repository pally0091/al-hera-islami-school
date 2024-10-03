const ProgramsCurriculum = () => {
  return (
    <section className="bg-gray-50 text-left py-12 px-6 md:px-20">
      <h2 className="font-bold mb-10">প্রোগ্রাম ও পাঠ্যক্রম</h2>
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        <div className="relative programs pb-4 cursor-pointer">
          <h4 className="font-semibold mb-4 hover:text-primary">
            প্রাথমিক শিক্ষা বিভাগ
          </h4>
          <p className="leading-relaxed">
            আমাদের প্রাথমিক শিক্ষা বিভাগ শিক্ষার্থীদের জন্য বেসিক জ্ঞান প্রদান
            করে। এখানে আধুনিক শিক্ষার সাথে ইসলামী শিক্ষার সমন্বয় করা হয়েছে।
          </p>
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 ease-in-out underline"></div>
        </div>
        <div className="relative programs pb-4 cursor-pointer">
          <h4 className="font-semibold mb-4 hover:text-primary">
            মাধ্যমিক শিক্ষা বিভাগ
          </h4>
          <p className="leading-relaxed">
            মাধ্যমিক শিক্ষা বিভাগে শিক্ষার্থীদের একাডেমিক বিষয়বস্তুর পাশাপাশি
            ধর্মীয় জ্ঞানও প্রদান করা হয়। এই বিভাগ শিক্ষার্থীদের এসএসসি
            পরীক্ষার জন্য প্রস্তুত করে।
          </p>
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 ease-in-out underline"></div>
        </div>
        <div className="relative programs pb-4 cursor-pointer">
          <h4 className="font-semibold mb-4 hover:text-primary">
            কোরআন শিক্ষার কোর্স
          </h4>
          <p className="leading-relaxed">
            আমাদের কোরআন শিক্ষার কোর্স শিক্ষার্থীদের কোরআন শুদ্ধভাবে পড়তে ও
            বুঝতে শেখায়। হিফজ, তাফসির, এবং তাজবীদ সহ বিভিন্ন পর্যায়ের শিক্ষার
            সুযোগ রয়েছে।
          </p>
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 ease-in-out underline"></div>
        </div>
        <div className="relative programs pb-4 cursor-pointer">
          <h4 className="font-semibold mb-4 hover:text-primary">
            ইসলামী স্টাডিজ
          </h4>
          <p className="leading-relaxed">
            ইসলামী স্টাডিজ বিভাগে শিক্ষার্থীদের জন্য আকিদা, ফিকহ, হাদিস, এবং
            ইসলামের ইতিহাস সহ বিভিন্ন বিষয় পড়ানো হয়।
          </p>
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 ease-in-out underline"></div>
        </div>
        <div className="relative programs pb-4 cursor-pointer">
          <h4 className="font-semibold mb-4 hover:text-primary">
            সহ-পাঠ্যক্রমিক কার্যক্রম
          </h4>
          <p className="leading-relaxed">
            আমাদের শিক্ষাক্রমে কেবল একাডেমিক নয়, সহ-পাঠ্যক্রমিক কার্যক্রমও
            অন্তর্ভুক্ত রয়েছে। খেলাধুলা, বিতর্ক, সাংস্কৃতিক কর্মকাণ্ড ইত্যাদি
            শিক্ষার্থীদের বিকাশে ভূমিকা রাখে।
          </p>
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 ease-in-out underline"></div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsCurriculum;
