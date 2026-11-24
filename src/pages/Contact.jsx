
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

import ContactHero from "../components/Contact/ContactHero";
import ContactDetails from "../components/Contact/ContactDetails";

import Seo from "../components/Common/Seo";

const Contact = () => {
  return (
    <>
      <Seo
        title="Contact STARFOZ | Discuss Your Digital Project"
        description="Get in touch with STARFOZ to discuss website development, custom software, business automation and AI-powered solutions. Contact our team in Thoothukudi, Tamil Nadu."
        path="/contact"
      />

      <Navbar />

      <main>
        <ContactHero />

        <ContactDetails />
      </main>

      <Footer />
    </>
  );
};

export default Contact;
