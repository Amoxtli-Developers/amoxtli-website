import React from "react";
import PortfolioCards from "./PortfolioCards"; // Import your PortfolioCard component here
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

function PortfolioView() {
  // Sample data for your portfolio cards (you can replace this with your actual data)
  const portfolioData = [
    {
      id: 1,
      title: "Project 1",
      description: "Description for Project 1",
      imageSrc: "image1.jpg",
      categories: ["Category A", "Category B"],
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description for Project 2",
      imageSrc: "image2.jpg",
      categories: ["Category A", "Category B"],
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description for Project 3",
      imageSrc: "image3.jpg",
      categories: ["Category A", "Category B"],
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description for Project 4",
      imageSrc: "image4.jpg",
      categories: ["Category A", "Category B"],
    },
    {
      id: 5,
      title: "Project 5",
      description: "Description for Project 5",
      imageSrc: "image5.jpg",
      categories: ["Category A", "Category B"],
    },
    {
      id: 6,
      title: "Project 6",
      description: "Description for Project 6",
      imageSrc: "image6.jpg",
      categories: ["Category A", "Category B"],
    },
    {
      id: 7,
      title: "Project 7",
      description: "Description for Project 7",
      imageSrc: "image7.jpg",
      categories: ["Category A", "Category B"],
    },

    // Add more portfolio items as needed
  ];

  return (
    <Box className="main-header" >
      <h1 className="header-title" style={{ textAlign: "left" }}>
        Clients Stories
      </h1>
      <Grid container spacing={5} style={{marginTop: "2rem"}}>
        {portfolioData.map((item) => (
          <Grid item xs={12} sm={12} md={12} key={item.id} sx={{justifyContent: "center", display: "flex"}}>
            <PortfolioCards
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              categories={item.categories}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PortfolioView;
