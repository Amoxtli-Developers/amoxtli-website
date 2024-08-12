import React from "react";
import Grid from "@mui/material/Grid";
import "./HowItWorks.css";
import { Box, Typography } from "@mui/material";
import "./AboutView.css";
import { AnimatedListDemo } from "./AnimatedListDemo/AnimatedListDemo";

const HowItWorks = ({ imageUrl, title, services }) => {
  return (
    <Box className="main-header">
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Typography
            className="header-title title-edited"
            sx={{
              textAlign: "left",
              fontSize: { xs: "60px", md: "100px" },
              fontFamily: "Poppins",
            }}
          >
            {title} <span className="underlined-text">@ AWD</span>
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box mt={8}>
            <AnimatedListDemo />
          </Box>
        </Grid>
      </Grid>
      <Typography
        sx={{
          fontSize: { xs: "20px", md: "32px", lg: "46px" },
          marginBottom: { xs: "2rem", md: "6rem", lg: "8rem" },
          fontFamily: "Poppins",
          textAlign: "right",
          mt: 8,
        }}
      >
        Elevating your brand’s essence with{" "}
        <span className="underlined-text">cutting-edge design</span> and{" "}
        <span className="underlined-text">seamless user experiences</span> that
        keep your audience hooked.
      </Typography>
    </Box>
  );
};

export default HowItWorks;
