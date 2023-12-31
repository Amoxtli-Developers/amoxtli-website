import Preloader from '../Components/Preloader';
import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ServicesView from "../Components/ServicesView";
import FloatingButton from '../Components/FloatingButton';
import CustomCtaBanner from "../Components/CtaBanner";
import Development from "../Components/Development";

function Service() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set loading to true when the location changes
    setIsLoading(true);

    // Simulate an async loading process like an API call
    const timer = setTimeout(() => setIsLoading(false), 1500); // Adjust time as needed

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [location]);
  return (
    <>
      <Navbar />
      {isLoading && <Preloader />}
      <ServicesView />
      <Development />
      <CustomCtaBanner />
      <FloatingButton />
      <Footer />
    </>
  );
}

export default Service;
