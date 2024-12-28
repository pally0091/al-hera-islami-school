const Banner = () => {
  return (
    <section>
      <h1 className="text-2xl">This is Banner</h1>
      <p>Home Page</p>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};

export default Home;
