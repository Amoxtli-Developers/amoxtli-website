import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "./Personalized.css";
import { Box } from "@mui/material";

const Header = ({ imageUrl, title }) => {
  return (
    <Box className="section">
      <h3 style={{ textAlign: "left" }} className="section-title">
        {title}
      </h3>
      <Grid container spacing={2}>
        {/* Right Column: Image */}

        <Grid item xs={12} sm={6}>
          <img
            src={imageUrl}
            alt="header-logo"
            style={{ width: "95%", borderRadius: "2rem" }}
          />
        </Grid>
        {/* Left Column: Text, Title, and Button */}
        <Grid item xs={12} sm={6}>
          <div>
            <p className="header-text">
              At{" "}
              <span className="underlined-text">Amoxtli Web Developers </span>,
              we take pride in offering a personalized follow-up experience like
              no other. Our commitment to your project extends far beyond its
              launch. We understand that a successful website is a dynamic,
              ever-evolving asset, and that's why we go the extra mile to ensure
              your online presence remains cutting-edge. Our dedicated team will
              work closely with you to provide ongoing support, maintenance, and
              updates tailored to your specific needs.
            </p>
            <p className="header-text">
              We believe that personalized follow-up is not just a service but a
              partnership. With Amoxtli, you can count on us to address any
              inquiries, implement enhancements, and keep your site secure. Your
              success is our priority, and our personalized follow-up is
              designed to help your website thrive and adapt in a constantly
              changing digital landscape.
            </p>

            <Link to={"/services"}>
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Take a look</span>
              </button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
