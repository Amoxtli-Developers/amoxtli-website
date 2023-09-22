import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Box } from "@mui/material";

const BrandCarousel = () => {
  // Define an array of image URLs
  const imageUrls = [
    "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    // Add more image URLs as needed
  ];

  return (
    <Box className="section">
      <h3 className="section-title">Our clients</h3>
      <OwlCarousel
        className="owl-theme"
        loop
        items={10}
        margin={5}
        dots={false}
        autoplay={true}
        autoplayTimeout={5000}
        responsive={{
          400: { items: 1 },
          920: { items: 5 },
        }}
      >
        {imageUrls.map((imageUrl, index) => (
          <div className="item" key={index}>
            <img src={imageUrl} alt={`client ${index + 1000}`} />
          </div>
        ))}
      </OwlCarousel>
    </Box>
  );
};

export default BrandCarousel;
