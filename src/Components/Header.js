import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "./Header.css";
import { Box } from "@mui/material";

const Header = ({ imageUrl, title }) => {
  return (
    <Box className="main-header">
      <Grid container spacing={2}>
        {/* Left Column: Text, Title, and Button */}
        <Grid item xs={12} sm={6}>
          <div>
            <h1 className="header-title">{title}</h1>
            <p className="header-text">
              <span className="underlined-text">Amoxtli Web Developers</span> is
              a software development startup founded by a group of Mexican students from
              Tec de Monterrey. Our primary goal is to empower startups by
              equipping them with vital technological assets, specifically
              modern websites, to thrive in the digital age. We understand the
              critical role that a strong{" "}
              <span className="underlined-text">
                online presence plays in the success of businesses today
              </span>
              , and we are passionate about helping startups make the most of
              this opportunity. Our team of talented individuals is dedicated to
              creating innovative and customized web solutions that cater to the{" "}
              <span className="underlined-text">
                {" "}
                unique needs of each startup.
              </span>{" "}
              With our expertise and commitment, we aim to be the driving force
              behind the digital transformation of emerging businesses.
            </p>
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
            alt="header-logo"
            style={{ width: "95%", borderRadius: "2rem" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
