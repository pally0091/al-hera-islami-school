import "./App.css";
import Banner from "./components/Banner";
import LocationContact from "./components/Contact";
import DescriptionSection from "./components/Description";
import Footer from "./components/Footer";
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
      <LocationContact />
      <Footer />
    </>
  );
}

export default App;
