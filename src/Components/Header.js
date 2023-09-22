import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "./Header.css";
import { Box } from "@mui/material";

const Header = ({ imageUrl, title, text }) => {
  return (
    <Box className="main-header" >
      <Grid container spacing={2}>
        {/* Left Column: Text, Title, and Button */}
        <Grid item xs={12} sm={6}>
          <div>
            <h2 className="header-title">{title}</h2>
            <p className="header-text">{text}</p>
            <Link to={"/talk-to-us"}>
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Let's talk</span>
              </button>
            </Link>
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
