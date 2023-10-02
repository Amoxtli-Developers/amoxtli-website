import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./TeamCarousel.css";

// Import the CarouselCard component
import TeamCarouselCard from "./TeamCarouselCard";

function TeamCarousel() {
  const cardDataArray = [
    {
      image: "image1.jpg",
      title: "Salomón Martínez",
      description: "Software Engineer by profession, photographer by passion.",
      badgeContent: "CEO",
    },
    {
      image: "image2.jpg",
      title: "Sofía Donlucas",
      description: "Software Engineer by profession, dog lover by passion.",
      badgeContent: "CTO",
    },
    {
      image: "image2.jpg",
      title: "Arturo Alfaro",
      description: "Software Engineer by profession, drummer by passion.",
      badgeContent: "PM",
    },
    {
      image: "image2.jpg",
      title: "Isaac Jacinto",
      description: "Software Engineer by profession, {complete} by passion.",
      badgeContent: "Head of Design",
    },
    {
      image: "image2.jpg",
      title: "Rodrigo Aldahir",
      description:
        "Software Engineer by profession, basketball player by passion.",
      badgeContent: "Head of Testing",
    },
  ];

  return (
    <Swiper
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      style={{ marginLeft: "1rem", marginRight: 0, marginBottom: "5rem" }}
    >
      {cardDataArray.map((cardData, index) => (
        <SwiperSlide>
          <TeamCarouselCard
            key={index}
            title={cardData.title}
            image={cardData.image}
            description={cardData.description}
            badgeContent={cardData.badgeContent}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TeamCarousel;
