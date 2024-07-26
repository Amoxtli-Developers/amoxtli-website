import { Grid, Typography } from "@mui/material";
import React from "react";
import { TechStack } from "../TechStack/TechStack";

export default function TechSection() {
  return (
    <div className="section" >
      <Grid container spacing={4} alignItems="center">
        {/* Left Column: Title and Description */}
        <Grid item xs={12} md={6}>
          <h3 className="section-title" style={{ textAlign: "left" }}>
            Techstack of <span className="underlined-text">AWD</span>
          </h3>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "18px", md: "24px", lg: "32px" },
              textAlign: "justify",
            }}
          >
            At AWD, we leverage a diverse range of technologies to build
            innovative and efficient solutions. Our expertise spans various
            programming languages, frameworks, and tools to ensure we deliver
            the best results for our clients.
          </Typography>
        </Grid>
        {/* Right Column: IconCloud */}
        <Grid item xs={12} md={6}>
          <TechStack />
        </Grid>
      </Grid>
    </div>
  );
}
