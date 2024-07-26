import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import imagen from "../assets/home.jpg";
import BrandCarousel from "../Components/BrandCarousel";
import CustomCtaBanner from "../Components/CtaBanner";
import Preloader from "../Components/Preloader";
import React, { useEffect, useState, Suspense } from "react";
import { useLocation } from "react-router-dom";
import FloatingButton from "../Components/FloatingButton";
import ChatModal from "../Components/ChatModal";
import { motion } from "framer-motion";
import ServiceSection from "../Components/ServiceSection/ServiceSection";
import { MarqueeDemo } from "../Components/MarqueeDemo/MarqueeDemo";
import TechSection from "../Components/TechSection/TechSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Home() {
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
    <div>
      <Navbar />
      {isLoading && <Preloader />}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <Header imageUrl={imagen} title="What is" />
      </motion.div>

      <BrandCarousel />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <ServiceSection title="Our services include" />
      </motion.div>

      <Suspense fallback={<div>Loading...</div>}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <MarqueeDemo />
        </motion.div>
      </Suspense>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <TechSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <CustomCtaBanner />
      </motion.div>

      <FloatingButton onClick={handleOpenModal} />
      <ChatModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <Footer />
    </div>
  );
}

export default Home;
