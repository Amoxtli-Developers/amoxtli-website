import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import imagen from "../assets/home.jpg";
import imagen2 from "../assets/home2.jpg";
import service1 from "../assets/sitio-web.png";
import service2 from "../assets/software.png";
import service3 from "../assets/seo.png";
import service4 from "../assets/ux.png";
import service5 from "../assets/ecommerce.png";
import BrandCarousel from "../Components/BrandCarousel";
import Offer from "../Components/Offer";
import Testimonial from "../Components/Testimonial";
import Technologies from "../Components/Technologies";
import CustomCtaBanner from "../Components/CtaBanner";
import React, { Suspense } from "react";


const services = [
  {
    iconUrl: service1, // Replace with the actual URL
    title: "Web and Mobile Development",
    text: "Crafting engaging websites and mobile apps to bring your digital vision to life.",
  },
  {
    iconUrl: service2, // Replace with the actual URL
    title: "Software Development",
    text: "Building custom software solutions for streamlined operations.",
  },
  {
    iconUrl: service3, // Replace with the actual URL
    title: "SEO and Digital Marketing",
    text: "Boosting online visibility and implementing winning digital strategies.",
  },
  {
    iconUrl: service4, // Replace with the actual URL
    title: "UX/UI Design",
    text: "Creating intuitive, visually appealing interfaces for seamless user experiences.",
  },
  {
    iconUrl: service5, // Replace with the actual URL
    title: "E-Commerce Development",
    text: "Maximizing online sales with secure, user-friendly online stores.",
  },
];

function Home() {
  return (
    <div>
      <Navbar />
      
      <Header imageUrl={imagen} title="Who we are" />
      <BrandCarousel />
      <Offer imageUrl={imagen2} title="What we offer" services={services} />
      <Suspense fallback={<div>Loading...</div>}>
        <Testimonial />
      </Suspense>
      <Technologies />
      <CustomCtaBanner />
      <Footer />
    </div>
  );
}

export default Home;
