import React from "react";

import AboutUs from "./components/AboutUs";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Roadmap from "./components/Roadmap";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <Carousel />
      <AboutUs />
      <Services />
      <Roadmap />
      <Newsletter />
      <Footer />
    </div>
  );
}
