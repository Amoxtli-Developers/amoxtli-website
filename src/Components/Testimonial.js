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
    title: "Testimonial 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in lectus eu sem vehicula consequat.",
    imageUrl: test1,
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
