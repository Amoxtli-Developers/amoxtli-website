import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "./Offer.css";
import { Box, List, ListItem, ListItemIcon } from "@mui/material";


const Offer = ({ imageUrl, title, services }) => {
  return (
    <Box className="section">
      <h3 className="section-title">{title}</h3>
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
                    <h4 className="service-title">{service.title}</h4>
                    <p className="service-text"> {service.text}</p>
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
