import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import devGif from "../assets/development/web.gif";
import mobileGif from "../assets/development/mobile.gif";
import softGif from "../assets/development/software.gif";
import uxGif from "../assets/development/ux.gif";
import seoGif from "../assets/development/seo.gif";
import ecommerceGif from "../assets/development/ecommerce.gif";

const cardMediaStyles = {
  height: 0,
  paddingTop: "56.25%", // 16:9 aspect ratio
  backgroundSize: "cover",
};

const cardData = [
  {
    title: "Web Development",
    image: devGif,
    description:
      "Our web development service is dedicated to creating dynamic and engaging websites tailored to your unique needs. We focus on functionality, user experience, and visual appeal, ensuring that your online presence stands out and serves your business goals effectively.",
  },
  {
    title: "Mobile Development",
    image: mobileGif,
    description:
      "With our mobile development service, we bring your ideas to life on the small screen. Whether it's iOS or Android, we design and build mobile applications that deliver a seamless user experience. We understand the mobile ecosystem and ensure your app performs flawlessly.",
  },
  {
    title: "Software Development",
    image: softGif,
    description:
      "Software development is at the core of what we do. We're passionate about crafting custom software solutions that solve your specific challenges. Our team leverages technology to meet your objectives, emphasizing efficiency and practicality over unnecessary complexity.",
  },
  {
    title: "UX/UI Design",
    image: uxGif,
    description:
      "User experience (UX) and user interface (UI) design are fundamental to creating captivating digital products. Our design service combines creativity and meticulous planning to ensure your users enjoy an intuitive and visually pleasing experience, increasing user engagement and satisfaction.",
  },
  {
    title: "SEO & Marketing",
    image: seoGif,
    description:
      "Search Engine Optimization (SEO) and digital marketing are key components of our strategy to maximize your online visibility. We utilize the latest SEO techniques and digital marketing strategies to help your business achieve a strong online presence, attract traffic, and convert visitors into customers.",
  },
  {
    title: "E-Commerce",
    image: ecommerceGif,
    description:
      "E-commerce is a booming industry, and our e-commerce service is tailored to help you thrive in this competitive landscape. We develop and optimize e-commerce platforms that provide a seamless shopping experience for your customers, driving sales and growth for your online store.",
  },
];

function Development() {
  return (
    <Box className="section">
      <h2 className="section-title" style={{ textAlign: "right" }}>
        Our Development Services
      </h2>
      <Grid container spacing={5} style={{ marginTop: "2rem" }}>
        {cardData.map((card, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            sx={{ justifyContent: "center", display: "flex" }}
          >
            <Card
              style={{
                border: "none",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                borderRadius: "2rem",
              }}
            >
              <CardMedia
                style={{
                  ...cardMediaStyles,
                }}
                image={card.image}
              />
              <CardContent style={{ padding: 20 }}>
                <h5 style={{ fontSize: "2.5rem", color: "#212529" }}>
                  {card.title}
                </h5>
                <p className="header-text" style={{ color: "#212529" }}>
                  {card.description}
                </p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Development;
