import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";
import "./Testimonial.css"; // Import your custom CSS file
import googleReview from "../assets/google.png";
import test1 from "../assets/tech/mujer.png";
import test2 from "../assets/tech/hombre.png";

const testimonials = [
  {
    title: "Lilia Hernandez",
    text: "Very good service, they developed my page in a very short time and of excellent quality, it is worth promoting this team of young entrepreneurs, congratulations!!",
    imageUrl: test1,
  },
  {
    title: "Justino Reyes Martínez",
    text: "Excellent service, aligned with the requirements made. Deliverables received in a timely manner. Congratulations team!!!",
    imageUrl: test2,
  },
  {
    title: "Ana María Sánchez",
    text: "Thanks to Amoxtli, our online presence is stronger than ever. Their SEO strategy was exactly what we needed.",
    imageUrl: test1,
  },
  {
    title: "Carlos Ramírez",
    text: "Amoxtli took our website to the next level. Their service and attention to detail are unmatched. Thank you for an outstanding experience!",
    imageUrl: test2,
  },
  {
    title: "Luisa Fernández",
    text: "Amoxtli's redesign of my online store has been a resounding success. Their focus on UX/UI made a real difference for my customers.",
    imageUrl: test1,
  },
  {
    title: "Eduardo López",
    text: "The team at Amoxtli delivered our mobile app on time and with exceptional quality. They are true professionals in development.",
    imageUrl: test2,
  },
  // Add more testimonials here
];

const Testimonial = () => {
  return (
    <Box className="section">
      <h3  className="section-title">
        What our clients say
      </h3>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={20}
        items={3} // Display one testimonial at a time on larger screens
        responsive={{
          0: {
            items: 1, // Display one testimonial at a time on smaller screens
          },
          768: {
            items: 2, // Display two testimonials at a time on medium (md) screens
          },
          992: {
            items: 3, // Display three testimonials at a time on large (lg) screens
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="testimonial-card" style={{
            borderRadius: "2rem",
            minHeight: '350px', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <CardMedia
              component="img"
              image={testimonial.imageUrl}
              alt="testimonial-img"
              sx={{borderRadius: "50%", width: "100px", height: "100px", maxWidth: "100px", maxHeight: "100px", margin: "0 auto"}}
            />
            <CardContent>
              <h5 className="testimonial-title">
                {testimonial.title}
              </h5>
              <p className="testimonial-text">
                {testimonial.text}
              </p>
            </CardContent>
          </Card>
        ))}
      </OwlCarousel>
      <div className="google-review">
        <img src={googleReview} alt="google-reviews" />
      </div>
    </Box>
  );
};

export default Testimonial;
