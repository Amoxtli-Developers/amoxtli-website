import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const CustonCtaBanner = () => {
  return (
    <Box className="section cta-banner" sx={{marginBottom: "4rem"}}>
      <h2 style={{marginBottom: "2rem"}} className="header-title">
        Ready to take your
        <span
          style={{
            backgroundColor: "#fa206f",
            marginLeft: "0.5rem",
            marginRight: "0.5rem",
          }}
          className="badge text-wrap text-lowercase text-secondary-light fs-2"
        >
          first step
        </span>
        and rise to your digital potential?{" "}
      </h2>
      <p style={{marginBottom: "3rem"}} className="heading-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit
        ullamcorper id. Aliquam luctus sed turpis felis nam pulvinar risus
        elementum.
      </p>
      <div>
        <Link target="_blank" to={"https://calendly.com/amoxtlidev/entrevista_sitioweb"}>
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span style={{ marginLeft: "2.5rem" }} class="button-text">
              Schedule a call
            </span>
          </button>
        </Link>
      </div>
    </Box>
  );
};

export default CustonCtaBanner;
