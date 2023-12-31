import React from "react";
import { Grid } from "@mui/material";
import "./CasesView.css";

function TechStack({ logo, name}) {
  return (
    <Grid item xs={1} sm={1} md={1} lg={1}>
      <div className="technology-logos-container">
          <img src={logo} alt="Logo" />
          <p className="technology-title">{name}</p>
      </div>
    </Grid>
  );
}

export default TechStack;