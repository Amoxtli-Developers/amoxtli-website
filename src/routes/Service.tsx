import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ServicesView from "../Components/ServicesView";

import CustomCtaBanner from "../Components/CtaBanner";
import Development from "../Components/Development";

function Service() {
  return (
    <>
      <Navbar />
      <ServicesView />
      <Development />
      <CustomCtaBanner />
      <Footer />
    </>
  );
}

export default Service;
