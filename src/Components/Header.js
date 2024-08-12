import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "./Header.css";
import { Box } from "@mui/material";
import ValuesCard from "./ValuesCard";
import "./AboutView.css";
import WordRotate from "./WordRotate/WordRotate";

const Header = ({ imageUrl, title }) => {
  return (
    <Box className="main-header">
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6}>
          <div>
            <h1
              className="responsive-title title-edited"
              style={{ textAlign: "left" }}
            >
              {title}{" "}
              <span className="underlined-text">Amoxtli Web Developers</span>
            </h1>
            <p className="header-p">
              <span className="underlined-text">AWD</span> is a software
              development startup founded in
              <span className="underlined-text"> Mexico City</span> by a group
              of passionate engineers seeking to help
              <span className="underlined-text">
                {" "}
                startups and small businesses
              </span>{" "}
              succeed in the
              <span className="underlined-text"> digital world</span>.
            </p>

            <div style={{ textAlign: "right", paddingBottom: "40px" }}>
              <Link to={"/talk-to-us"} target="_blank">
                <button class="learn-more">
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">Let's talk</span>
                </button>
              </Link>
            </div>
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
      <Grid container spacing={2} sx={{ marginBottom: "5rem" }}>
        <Grid item xs={12} sm={12} md={4}>
          <ValuesCard
            title="Innovative Team"
            paragraph="Building custom web solutions for startup success."
            bgColor="rgba(255, 0, 153, 0.8)"
            textColor="#FFFFFF"
            titleColor="#FFFFFF"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ValuesCard
            title="Tailored Approach"
            paragraph="Crafting unique solutions for every client."
            bgColor="rgba(255, 153, 200, 0.8)"
            textColor="#FFFFFF"
            titleColor="#FFFFFF"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ValuesCard
            title="Expert Commitment"
            paragraph="Empowering startups through digital innovation."
            bgColor="rgba(247, 198, 255, 0.8)"
            textColor="#FFFFFF"
            titleColor="#FFFFFF"
          />
        </Grid>
      </Grid>
      <p
        className="believe flex flex-wrap items-center justify-end"
        style={{ textAlign: "right" }}
      >
        <span className="mx-2">Empowering startups</span> with{" "}
        <WordRotate
          className="underlined-text mx-2"
          words={["modern", "unique", "useful", "innovative", "creative"]}
        />
        <span>websites for success it’s</span>
        <span className="underlined-text mx-2">our goal.</span>
      </p>
    </Box>
  );
};

export default Header;
