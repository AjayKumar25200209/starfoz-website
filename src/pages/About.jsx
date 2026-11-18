
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

import AboutHero from "../components/About/AboutHero";
import FounderSection from "../components/About/FounderSection";

const About = () => {
  return (
    <>
      <Navbar />

      <main className="bg-[#101B35]">
        <AboutHero />

        <FounderSection />

        {/* Next About Us sections will go here */}
      </main>

      <Footer />
    </>
  );
};

export default About;
