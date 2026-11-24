
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

import ServicesHero from "../components/Services/ServicesHero";
import ServicesList from "../components/Services/ServicesList";

import Seo from "../components/Common/Seo";

const Services = () => {
  return (
    <>
      <Seo
        title="Web Development, Business Automation & AI Services | STARFOZ"
        description="Explore STARFOZ services including custom web development, mobile applications, business process automation, Power Platform solutions and AI development."
        path="/services"
      />

      <Navbar />

      <main>
        <ServicesHero />
        <ServicesList />
      </main>

      <Footer />
    </>
  );
};

export default Services;
