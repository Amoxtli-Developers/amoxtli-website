import React from "react";
import "./AboutView.css";
import Box from "@mui/material/Box";
import TeamCarousel from "./TeamCarousel";
import { Grid } from "@mui/material";
import ValuesCard from "./ValuesCard";
import axolotlGift from "../assets/amoxtli-merch.jpg";
import { ImageGrid } from "./ImageGrid/ImageGrid";

function AboutView() {
  const values = [
    {
      title: "customer-centric",
      paragraph:
        "we always listen to people and at every stage we do everything to achieve the best result",
      bgColor: "rgba(255, 0, 153, 0.8)",
      textColor: "#FFFFFF",
    },
    {
      title: "business-oriented",
      paragraph:
        "we communicate in plain language and know how to explain complex things with simple words",
      bgColor: "rgba(255, 153, 200, 0.8)",
      textColor: "#FFFFFF",
    },
    {
      title: "creative engineering",
      paragraph:
        "we believe that true magic is born at the intersection of modern technology and creativity",
      bgColor: "rgba(247, 198, 255, 0.8)",
      textColor: "#FFFFFF",
    },
  ];
  return (
    <Box className="main-header">
      <h1 className="header-title title-edited" style={{ textAlign: "left", fontSize: "100px" }}>
        We are <span className="underlined-text">Amoxtli Web Developers</span>
      </h1>
      <p className="etimology">amoxtli /ˈaːmoʃtɬi/ náhuatl: codex</p>

      <p className="quote">
        our mission is to empower you with the essential <br />
        tools to kickstart your{" "}
        <span className="underlined-text">online journey.</span>
      </p>

      <img src={axolotlGift} alt="about-header-img" className="about-img"></img>

      <p className="believe">
        we believe <span className="underlined-text">technology</span> is the
        key <br />
        to start evolving your business <br />
        into the <span className="underlined-text">digital era.</span>
      </p>
      <h2 className="section-title">Meet the Team</h2>
      <TeamCarousel />
      <h2 className="section-title">Our Values</h2>

      <Grid container spacing={2} sx={{ marginBottom: "5rem" }}>
        {values.map((value, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ValuesCard
              title={value.title}
              paragraph={value.paragraph}
              bgColor={value.bgColor}
              textColor={value.textColor}
              titleColor={"white"}
            />
          </Grid>
        ))}
      </Grid>
      <ImageGrid />
      <p className="dream">
        our dream is to make sure that <br />
        <span className="underlined-text">good ideas</span> are not lost and{" "}
        <br />
        become a <span className="underlined-text">reality.</span>
      </p>
      <Grid container spacing={2} sx={{ marginBottom: "5rem" }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{ justifyContent: "center", display: "flex" }}
        >
          <ValuesCard
            title={"Ensuring Success"}
            paragraph={
              "full control when outsourcing development of your saas product"
            }
            bgColor={"rgb(247, 247, 247)"}
            textColor={"black"}
            titleColor={"#fa206f"}
            cardWidth={"70%"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{ justifyContent: "center", display: "flex" }}
        >
          <ValuesCard
            title={"Securing Ownership"}
            paragraph={"tamper-proof evidence of the ownership of all the work"}
            bgColor={"rgb(247, 247, 247)"}
            textColor={"black"}
            titleColor={"#fa206f"}
            cardWidth={"70%"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutView;
