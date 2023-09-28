import React from "react";
import PortfolioCards from "./PortfolioCards"; // Import your PortfolioCard component here
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import fratImage from "../assets/projects/frat.jpg";
import cyberImage from "../assets/projects/cb.jpg";
import hilitosImage from "../assets/projects/hilitos.jpg";
import calenaimage from "../assets/projects/calena.jpg";
import boomImage from "../assets/projects/boom.jpg";
import spImage from "../assets/projects/sp.jpg";
import cmcyaImage from "../assets/projects/cmcya.jpg";

function PortfolioView() {
  // Sample data for your portfolio cards (you can replace this with your actual data)
  const portfolioData = [
    {
      id: 1,
      title: "Fratelli's Helados",
      description:
        "Creation of a captivating landing-page for a local ice cream shop.",
      imageSrc: fratImage,
      categories: ["web", "landing"],
      cardColor: "white",
      btnColor: "#B9935A",
      titleColor: "#B9935A",
      textColor: "#B9935A",
      badgeColor: "#F8F8F8",
      badgeTextColor: "#B9935A",
    },
    {
      id: 2,
      title: "CyberBook App",
      description: "Development of a mobile app for the Cybersecurity Hub at Tec de Monterrey.",
      imageSrc: cyberImage,
      categories: ["mobile", "ios"],
      cardColor: "#002878",
      btnColor: "white",
      titleColor: "white",
      textColor: "white",
      badgeColor: "rgba(255, 255, 255, 0.8)",
      badgeTextColor: "#002878",
    },
    {
      id: 3,
      title: "CMCYA",
      description: "In this case study, we showcase our work for an accounting firm in Mexico City.",
      imageSrc: cmcyaImage,
      categories: ["web", "company"],
      cardColor: "white",
      btnColor: "#7d2f99",
      titleColor: "#7d2f99",
      textColor: "#7d2f99",
      badgeColor: "#F8F8F8",
      badgeTextColor: "#123740",
    },
    {
      id: 4,
      title: "Hilitos Lili",
      description: "Hilitos Lili is a website for a local dressmaker business.",
      imageSrc: hilitosImage,
      categories: ["web", "landing"],
      cardColor: "#dbabef",
      btnColor: "white",
      titleColor: "white",
      textColor: "white",
      badgeColor: "rgba(255, 255, 255, 0.8)",
      badgeTextColor: "#dbabef",
    },
    {
      id: 5,
      title: "Salomon Photo",
      description: "On this website portfolio, we showcase the work of an enthusiastic photographer.",
      imageSrc: spImage,
      categories: ["web", "portfolio"],
      cardColor: "white",
      btnColor: "black",
      titleColor: "black",
      textColor: "black",
      badgeColor: "#F8F8F8",
      badgeTextColor: "#123740",
    },
    {
      id: 6,
      title: "Calena E-Commerce",
      description: "Creation of an e-commerce store for a bearings company in order to increase their sales.",
      imageSrc: calenaimage,
      categories: ["web", "e-commerce"],
      cardColor: "#fb6c3d",
      btnColor: "white",
      titleColor: "white",
      textColor: "white",
      badgeColor: "rgba(255, 255, 255, 0.8)",
      badgeTextColor: "#fb6c3d",
    },
    {
      id: 7,
      title: "Boom Percussion",
      description: "Development of a videogame and website player dashboard for a local percussion school in the US.",
      imageSrc: boomImage,
      categories: ["web", "videogame"],
      cardColor: "#123740",
      btnColor: "white",
      titleColor: "white",
      textColor: "white",
      badgeColor: "rgba(255, 255, 255, 0.8)",
      badgeTextColor: "#123740",
    },

    // Add more portfolio items as needed
  ];

  return (
    <Box className="main-header">
      <h1 className="header-title" style={{ textAlign: "left" }}>
        Clients Stories
      </h1>
      <p className="header-text">
        Welcome to our showcase of{" "}
        <span className="underlined-text">
          web development success stories.
        </span>{" "}
        Explore our diverse projects, from e-commerce to informational websites,
        each highlighting our commitment to creativity and innovation. Our{" "}
        <span className="underlined-text">client-centric approach</span> ensures
        every website reflects their{" "}
        <span className="underlined-text">unique vision.</span> Join us on this
        journey through endless possibilities in web development. Your success
        story could be next!
      </p>
      <Grid container spacing={5} style={{ marginTop: "2rem" }}>
        {portfolioData.map((item) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            key={item.id}
            sx={{ justifyContent: "center", display: "flex" }}
          >
            <PortfolioCards
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              categories={item.categories}
              cardColor={item.cardColor}
              btnColor={item.btnColor}
              titleColor={item.titleColor}
              textColor={item.textColor}
              badgeColor={item.badgeColor}
              badgeTextColor={item.badgeTextColor}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PortfolioView;
