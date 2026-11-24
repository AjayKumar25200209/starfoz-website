
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

import Hero from "../components/Home/Hero";
import WhatWeDo from "../components/Home/WhatWeDo";
import Seo from "../components/Common/Seo";

const Home = () => {
  return (
    <>
      <Seo
        title="Web Development, Automation & AI Solutions | STARFOZ"
        description="STARFOZ builds custom websites, web applications, business automation systems and AI-powered solutions to help businesses grow."
        path="/"
      />

      <Navbar />

      <main id="top">
        <Hero />

        <WhatWeDo />

        {/* Upcoming homepage sections */}
        <div id="home-next" />
      </main>

      <Footer />
    </>
  );
};

export default Home;
