import React from "react";
import "./AboutView.css";
import Box from "@mui/material/Box";
import imagen from "../assets/pexels-christina-morillo-1181467.jpg";
import TeamCarousel from "./TeamCarousel";

function AboutView() {
  return (
    <Box className="main-header">
      <h1 className="header-title" style={{ textAlign: "left" }}>
        We are <span className="underlined-text">Amoxtli Web Developers</span>
      </h1>
      <p className="etimology">amoxtli /ˈaːmoʃtɬi/ náhuatl: codex</p>

      <p className="quote">
        our mission is to empower you with the essential tools to kickstart your {" "}
        <span className="underlined-text">online journey.</span>
      </p>

      <img src={imagen} alt="about-header-img" className="about-img"></img>

      <p className="believe">
       we believe  {" "}
        <span className="underlined-text">online journey.</span>
      </p>
      <h2 className="section-title">Meet the Team</h2>
      <TeamCarousel />
    </Box>
  );
}

export default AboutView;
