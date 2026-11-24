
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/Layout/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
