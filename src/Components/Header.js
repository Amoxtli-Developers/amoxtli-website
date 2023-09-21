import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "./Header.css";
import { Box } from "@mui/material";

const Header = ({ imageUrl, title, text }) => {
  return (
    <Box sx={{ margin: "10rem 7rem 5rem 7rem" }}>
      <Grid  container spacing={2}>
        {/* Left Column: Text, Title, and Button */}
        <Grid item xs={12} sm={6}>
          <div>
            <h2 className="header-title">{title}</h2>
            <p className="header-text">{text}</p>
            <div>
              <button className="cta-talk" to={"/talk-to-us"}>
                Let's talk
              </button>
            </div>
          </div>
        </Grid>
        {/* Right Column: Image */}
        <Grid item xs={12} sm={6}>
          <img
            src={imageUrl}
            alt="Image"
            style={{ width: "100%", borderRadius: "2rem" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
