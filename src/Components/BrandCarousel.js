import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Box } from "@mui/material";

import imagen from "../assets/clients/asesorista.png";
import imagen2 from "../assets/clients/fratellis.png";
import imagen3 from "../assets/clients/cajs.png";
import imagen4 from "../assets/clients/calena.png";
import imagen5 from "../assets/clients/hilitos.png";
import imagen6 from "../assets/clients/contadores.png";
import imagen7 from "../assets/clients/tec.png";

const BrandCarousel = () => {
  // Define an array of image URLs
  const imageUrls = [
    imagen,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
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
          200: { items: 1 },
          900: { items: 5 },
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
