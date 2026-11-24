
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

import AboutHero from "../components/About/AboutHero";
import FounderSection from "../components/About/FounderSection";

import Seo from "../components/Common/Seo";

const About = () => {
  return (
    <>
      <Seo
        title="About STARFOZ | Our Story, Vision & Expertise"
        description="Learn about STARFOZ, a digital solutions company focused on custom software development, business automation and practical AI-powered solutions."
        path="/about"
      />

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
