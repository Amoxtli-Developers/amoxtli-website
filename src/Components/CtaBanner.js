import React from "react";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const CustomCtaBanner = () => {
  return (
    <Box className="section cta-banner" sx={{ marginBottom: "4rem" }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <h2 style={{ marginBottom: "2rem" }} className="cta-title">
            Ready to take your
            <span
              style={{
                backgroundColor: "#fa206f",
                marginLeft: "0.5rem",
                marginRight: "0.5rem",
                marginBottom: "0.5rem",
                marginTop: "0.5rem",
              }}
              className="badge text-lowercase text-secondary-light fs-2"
            >
              first step
            </span>
            and rise to your digital potential?
          </h2>
          <p style={{ marginBottom: "3rem" }} className="heading-text">
            Embark on a transformative journey towards realizing your
            <span className="underlined-text"> digital potential.</span> At
            Amoxtli Web Developers, we understand the power of a strong online
            presence. Whether you're a startup or an established business,{" "}
            <span className="underlined-text">
              we're here to help you thrive in the digital age.
            </span>
          </p>

          <div>
            <Link
              target="_blank"
              to={"https://calendly.com/amoxtlidev/entrevista_sitioweb"}
            >
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span style={{ marginLeft: "2.5rem" }} className="button-text">
                  Schedule a call
                </span>
              </button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomCtaBanner;
