import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "./Offer.css";
import { Box, List, ListItem, ListItemIcon, Typography } from "@mui/material";

const Offer = ({ imageUrl, title, services }) => {
  return (
    <Box className="section" sx={{ textAlign: "right" }}>
      <Typography
        variant="h2"
        className="service-section-title"
        sx={{ textAlign: "right", fontFamily: "Poppins"}}
      >
        {title}
      </Typography>
      <Grid container spacing={2}>
        {/* Left Column: Image */}
        <Grid item xs={12} sm={5}>
          <img
            src={imageUrl}
            alt="offer-logo"
            style={{ width: "65%", borderRadius: "2rem" }}
          />
        </Grid>
        {/* Right Column: List of Services */}
        <Grid item xs={12} sm={7}>
          <div>
            <List sx={{ paddingBottom: "3rem" }}>
              {services.map((service, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <img
                      src={service.iconUrl}
                      alt="Service Icon"
                      style={{ maxWidth: "4rem", marginRight: "1rem" }}
                    />
                  </ListItemIcon>
                  <div>
                    <Typography variant="h6" className="service-title">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" className="service-text">
                      {service.text}
                    </Typography>
                  </div>
                </ListItem>
              ))}
            </List>
            <Link to={"/services"}>
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Offer;
