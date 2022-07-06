import React from 'react';
import ControlledCarousel from "../Carousel";
import Cards from "../Cards";
import Footer from "../Footer";
import MiddleSection from "../MiddleSection";


 function Home() {
    return (
      <div>
        <ControlledCarousel />
        <MiddleSection />
        <Cards />
        <Footer />

      </div>
    )
  }

export default Home;