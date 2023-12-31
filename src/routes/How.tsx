import Preloader from '../Components/Preloader';
import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import howImg from "../assets/home.jpg";
import service1 from "../assets/how-it-works/development.png";
import service2 from "../assets/how-it-works/team.png";
import service3 from "../assets/how-it-works/business.png";
import service4 from "../assets/how-it-works/process.png";
import HowItWorks from "../Components/HowItWorks";
import Process from "../Components/Process";
import CustomCtaBanner from "../Components/CtaBanner";
import PricingCard from "../Components/PricingCard";
import Title from "../Components/Title";
import imagen from "../assets/how2.jpg";
import Personalized from "../Components/Personalized";
import FloatingButton from '../Components/FloatingButton';

const services = [
  {
    iconUrl: service1, // Replace with the actual URL
    title: "We use the most powerful frameworks to build your site",
    text: "Leveraging cutting-edge frameworks and technologies to create a dynamic and responsive online presence for your business. Our expert developers ensure your website is at the forefront of web innovation.",
  },
  {
    iconUrl: service2, // Replace with the actual URL
    title: "We have the best developer team",
    text: "Our team of skilled developers is dedicated to building tailored software solutions that streamline your operations. We bring your software ideas to life with precision and efficiency.",
  },
  {
    iconUrl: service3, // Replace with the actual URL
    title: "We aim to make your website as unique as your business",
    text: "Elevate your online visibility with our custom web design and digital strategies. We understand that your business is one-of-a-kind, and we craft websites that reflect your uniqueness, setting you apart from the competition.",
  },
  {
    iconUrl: service4, // Replace with the actual URL
    title: "We follow a rigorous process to ensure your satisfaction",
    text: "Our meticulous approach involves creating intuitive and visually captivating interfaces, guaranteeing a seamless and satisfying user experience. We're dedicated to turning your vision into a user-friendly reality.",
  },
];

const box_type = ["One Page", "Landing Page", "eCommerce"];

function How() {
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
      <HowItWorks
        imageUrl={howImg}
        title={"How it Works"}
        services={services}
      />
      <Process />
      <Title title={"Websites Pricing"} />
      <div className="full_container">
        {box_type.map((el) => {
          return <PricingCard box_type_text={el} />;
        })}
      </div>
      <Personalized imageUrl={imagen} title={"Personalized follow-up"} />
      <CustomCtaBanner />
      <FloatingButton />
      <Footer />
    </>
  );
}

export default How;
