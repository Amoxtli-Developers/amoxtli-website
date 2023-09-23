import React from "react";
import Grid from "@mui/material/Grid";
import "./HowItWorks.css";
import { Box, List, ListItem, ListItemIcon } from "@mui/material";

const HowItWorks = ({ imageUrl, title, services }) => {
  return (
    <Box className="main-header">
      <h3 className="section-title" style={{textAlign: "left"}}>{title}</h3>
      <Grid container spacing={2}>
        {/* Left Column: List of Services */}
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
            
          </div>
        </Grid>
        {/* Right Column: Image */}
        <Grid item xs={12} sm={5}>
          <img
            src={imageUrl}
            alt="HowItWorks-logo"
            style={{ width: "65%", borderRadius: "2rem" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorks;
