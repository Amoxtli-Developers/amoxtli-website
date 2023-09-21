import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import imagen from "../assets/pexels-christina-morillo-1181467.jpg";
import BrandCarousel from "../Components/BrandCarousel";

function Home() {
  return (
    <div>
      <Navbar />
      <Header
        imageUrl={imagen}
        title="Your Title"
        text="Your description text goes here. You can add more text as needed."
      />
      <BrandCarousel />
      <Footer />
    </div>
  );
}

export default Home;
