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

const testimonials = [
  {
    title: "Testimonial 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in lectus eu sem vehicula consequat.",
    imageUrl:
      "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Testimonial 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in lectus eu sem vehicula consequat.",
    imageUrl:
      "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Testimonial 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in lectus eu sem vehicula consequat.",
    imageUrl:
      "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
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
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="testimonial-card">
            <CardMedia
              component="img"
              image={testimonial.imageUrl}
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
