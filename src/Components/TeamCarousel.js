import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Import the CarouselCard component
import TeamCarouselCard from "./TeamCarouselCard";

function TeamCarousel() {
  const cardDataArray = [
    {
      image: "image1.jpg",
      title: "Card 1",
      description: "This is a description for Card 1.",
      badgeContent: 1,
    },
    {
      image: "image2.jpg",
      title: "Card 2",
      description: "This is a description for Card 2.",
      badgeContent: 2,
    },
    // Add more card data objects as needed
  ];

  return (
    <OwlCarousel
      className="owl-theme"
      loop
      margin={10}
      items={3} // Display one testimonial at a time on larger screens
      responsive={{
        0: {
          items: 1, // Display one testimonial at a time on smaller screens
        },
        768: {
          items: 2, // Display two testimonials at a time on medium screens
        },
      }}
    >
      {cardDataArray.map((cardData, index) => (
        <TeamCarouselCard key={index} cardData={cardData} />
      ))}
    </OwlCarousel>
  );
}

export default TeamCarousel;
