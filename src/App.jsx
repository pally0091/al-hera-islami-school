import "./App.css";
import Banner from "./components/Banner";
import DescriptionSection from "./components/Description";
import Navbar from "./components/Navbar";
import ProgramsCurriculum from "./components/Programs";
import WhyChooseUs from "./components/WhyUs";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <DescriptionSection />
      <ProgramsCurriculum />
      <WhyChooseUs />
    </>
  );
}

export default App;
