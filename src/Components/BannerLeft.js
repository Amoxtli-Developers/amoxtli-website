import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import "./Banner.css";

const BannerLeft = ({ imageUrl, title, items }) => {
  return (
    <Box className="section">
      <Grid container spacing={2} sx={{padding: "4rem", backgroundColor: "rgb(251, 251, 251)", borderRadius: "2rem", boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px"}}>
        {/* Right Column: Image */}
        <Grid item xs={12} sm={6}>
          <img
            src={imageUrl}
            alt="header-logo"
            style={{ width: "100%", borderRadius: "2rem" }}
          />
        </Grid>
        {/* Left Column: Text, Title, and Button */}
        <Grid item xs={12} sm={6}>
          <div>
            <h2
              className="section-title"
              style={{ marginBottom: "1.5rem", textAlign: "right" }}
            >
              {title}
            </h2>
          </div>
          <div>
            <ul style={{ textAlign: "left", fontSize: "25px"}}>
              {items.map((item, index) => (
                <li key={index}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BannerLeft;
