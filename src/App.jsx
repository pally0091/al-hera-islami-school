import "./App.css";
import Banner from "./components/Banner";
import LocationContact from "./components/Contact";
import DescriptionSection from "./components/Description";
import Downloads from "./components/Downloads";
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
      <Downloads />
      <LocationContact />
      <Footer />
    </>
  );
}

export default App;
