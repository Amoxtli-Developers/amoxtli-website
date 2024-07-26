import Preloader from '../Components/Preloader';
import FloatingButton from '../Components/FloatingButton';
import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import AboutView from "../Components/AboutView";
import Footer from "../Components/Footer";
import CustomCtaBanner from "../Components/CtaBanner";
import ChatModal from '../Components/ChatModal';

function About() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Set loading to true when the location changes
    setIsLoading(true);

    // Simulate an async loading process like an API call
    const timer = setTimeout(() => setIsLoading(false), 1000); // Adjust time as needed

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [location]);
  return (
    <>
      <Navbar />
      {isLoading && <Preloader />}
      <AboutView />
      <CustomCtaBanner />
      <FloatingButton onClick={handleOpenModal} />
      <ChatModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <Footer />
    </>
  );
}

export default About;
