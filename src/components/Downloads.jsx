const Downloads = () => {
  return (
    <section>
      <h2>Downloads</h2>
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <div className="w-full md:w-1/2 border border-secondary p-2 rounded-md">
          <h5 className="text-primary font-semibold underline">ফরম সমূহ</h5>
        </div>
        <div className="w-full md:w-1/2 border border-secondary p-2 rounded-md">
          <h5 className="text-primary font-semibold underline">
            পাঠ পরিকল্পনা
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
