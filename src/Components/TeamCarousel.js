import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./TeamCarousel.css";

// Import the CarouselCard component
import TeamCarouselCard from "./TeamCarouselCard";

import alfa from "../assets/team/alfa.jpg";


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
      image: alfa,
      title: "Arturo Alfaro",
      description: "Software Engineer by profession, musician by passion.",
      badgeContent: "Back-end",
    },

    {
      image: "image2.jpg",
      title: "Isaac Jacinto",
      description:
        "Software Engineer by profession, football player by passion.",
      badgeContent: "Database",
    },
    {
      image: "image2.jpg",
      title: "Rodrigo Aldahir",
      description:
        "Software Engineer by profession, basketball player by passion.",
      badgeContent: "Tester",
    },
  ];

  return (
    <div style={{ marginLeft: "1rem", marginRight: "0", marginBottom: "5rem" }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1070: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {cardDataArray.map((cardData, index) => (
          <SwiperSlide style={{ justifyContent: "center", display: "flex" }}>
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
    </div>
  );
}

export default TeamCarousel;
