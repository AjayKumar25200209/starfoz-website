
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

import SolutionsHero from "../components/Solutions/SolutionsHero";
import SolutionsList from "../components/Solutions/SolutionsList";

import Seo from "../components/Common/Seo";

const Solutions = () => {
  return (
    <>
      <Seo
        title="Custom Software & AI Business Solutions | STARFOZ"
        description="Discover STARFOZ business solutions including customer management systems, workflow automation, AI-powered applications and custom digital platforms."
        path="/solutions"
      />

      <Navbar />

      <main>
        <SolutionsHero />
        <SolutionsList />
      </main>

      <Footer />
    </>
  );
};

export default Solutions;
