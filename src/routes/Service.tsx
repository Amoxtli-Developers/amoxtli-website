import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ServicesView from "../Components/ServicesView";
import imagen from "../assets/pexels-christina-morillo-1181467.jpg";
import BannerRight from "../Components/BannerRight";
import BannerLeft from "../Components/BannerLeft";
import CustomCtaBanner from "../Components/CtaBanner";
import Development from "../Components/Development";

const processItems = [
  "Discovery and Requirements",
  "Customer Research",
  "Digital Strategy",
  "Analytics and SEO",
  "Content Modeling",
  "Technical Design",
];
const designItems = [
  "User Experience Design",
  "User Interface Design",
  "Creative Direction",
  "Social Engagement",
  "Brand Identity and Guidelines",
];
const devItems = [
  "Front and Back-end Development",
  "ReactJS",
  "Gatsby",
  "Progressive Mobile Apps",
  "E-commerce",
  "API implementation",
  "HubSpot Marketing Automation",
];

function Service() {
  return (
    <>
      <Navbar />
      <ServicesView />
      <BannerRight
        imageUrl={imagen}
        title={"Processing"}
        items={processItems}
      />
      <BannerLeft
        imageUrl={imagen}
        title={"Designing"}
        items={designItems}
      />
      <BannerRight
        imageUrl={imagen}
        title={"Developing"}
        items={devItems}
      />
      <Development />
      <CustomCtaBanner />
      <Footer />
    </>
  );
}

export default Service;
