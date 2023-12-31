import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CasesView from "../Components/CasesView";
import CustomCtaBanner from "../Components/CtaBanner";

function Cases() {
  return (
    <>
      <Navbar />
      <CasesView />
      <CustomCtaBanner />
      <Footer />
    </>
  );
}

export default Cases;