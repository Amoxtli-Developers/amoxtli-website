import React from "react";
import Grid from "@mui/material/Grid";
import "./TeamCarousel.css";

// Import the CarouselCard component
import TeamCarouselCard from "./TeamCarouselCard";

import alfa from "../assets/team/alfa.jpg";
import salo from "../assets/team/salo.jpg";
import isac from "../assets/team/isac.jpg";
import sofy from "../assets/team/sofy.jpg";
import ro from "../assets/team/ro.jpg";

function TeamCarousel() {
  const cardDataArray = [
    {
      image: salo,
      title: "Salomón Martínez",
      description: "Software Engineer by profession, photographer by passion.",
      badgeContent: "CEO",
    },
    {
      image: sofy,
      title: "Sofía Donlucas",
      description: "Software Engineer by profession, dog lover by passion.",
      badgeContent: "CTO",
    },
    {
      image: alfa,
      title: "Arturo Alfaro",
      description: "Software Engineer by profession, drum player by passion.",
      badgeContent: "Back-end",
    },
    {
      image: isac,
      title: "Isaac Jacinto",
      description: "Software Engineer by profession, football player by passion.",
      badgeContent: "Database",
    },
    {
      image: ro,
      title: "Rodrigo Aldahir",
      description: "Software Engineer by profession, basketball player by passion.",
      badgeContent: "Tester",
    },
  ];

  return (
    <div style={{marginBottom: "5rem" }}>
      <Grid container spacing={4} justifyContent="center">
        {cardDataArray.map((cardData, index) => (
          <Grid
            item
            key={index}
            xs={12}    // Full width on extra-small screens
            sm={6}     // Half width on small screens
            md={4}     // One-third width on medium screens
          >
            <TeamCarouselCard
              title={cardData.title}
              image={cardData.image}
              description={cardData.description}
              badgeContent={cardData.badgeContent}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default TeamCarousel;
