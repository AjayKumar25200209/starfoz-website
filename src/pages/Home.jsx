
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

import Hero from "../components/Home/Hero";
import WhatWeDo from "../components/Home/WhatWeDo";

const Home = () => {
  return (
    <>
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
