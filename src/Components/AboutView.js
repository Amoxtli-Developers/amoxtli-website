import React from "react";
import "./AboutView.css";
import Box from "@mui/material/Box";
import TeamCarousel from "./TeamCarousel";
import { Grid, Typography } from "@mui/material";
import ValuesCard from "./ValuesCard";
import axolotlGift from "../assets/amoxtli-merch.jpg";


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
      <Typography
        className="header-title title-edited"
        sx={{
          textAlign: "left",
          fontSize: { xs: "60px", md: "100px" },
          fontFamily: "Poppins",
        }}
      >
        We are <span className="underlined-text">Amoxtli Web Developers</span>
      </Typography>
      <Typography
        className="etimology"
        sx={{ marginBottom: { xs: "2rem", md: "5rem" }, fontFamily: "Poppins" }}
      >
        amoxtli /ˈaːmoʃtɬi/ náhuatl: codex
      </Typography>

      <Typography
        className="quote"
        sx={{
          fontSize: { xs: "35px", md: "45px" },
          marginBottom: "3rem",
          fontFamily: "Poppins",
        }}
      >
        our mission is to empower you with the essential <br />
        tools to kickstart your{" "}
        <span className="underlined-text">online journey.</span>
      </Typography>

      <img src={axolotlGift} alt="about-header-img" className="about-img"></img>

      <Typography
        className="believe"
        sx={{
          fontSize: { xs: "35px", md: "45px" },
          marginBottom: "3rem",
          fontFamily: "Poppins",
        }}
      >
        we believe <span className="underlined-text">technology</span> is the
        key <br />
        to start evolving your business <br />
        into the <span className="underlined-text">digital era.</span>
      </Typography>
      <Typography
        className="section-title"
        sx={{
          fontSize: { xs: "45px", md: "55px" },
          marginBottom: "3rem",
          fontFamily: "Poppins",
        }}
      >
        Meet the <span className="underlined-text">AMOXTLERS</span>
      </Typography>
      <TeamCarousel />
      <Typography
        className="section-title"
        sx={{
          fontSize: { xs: "35px", md: "45px" },
          marginBottom: "3rem",
          fontFamily: "Poppins",
        }}
      >
        Our Values
      </Typography>

      <Grid container spacing={2} >
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
          md={3}
          sx={{ justifyContent: "center", display: "flex" }}
        >
          <ValuesCard
            title={"Ensuring Success"}
            paragraph={
              "full control when outsourcing development of your SaaS product"
            }
            bgColor={"rgb(252, 252, 252)"}
            textColor={"black"}
            titleColor={"#fa206f"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ justifyContent: "center", display: "flex" }}
        >
          <ValuesCard
            title={"Securing Ownership"}
            paragraph={"tamper-proof evidence of the ownership of all the work"}
            bgColor={"rgb(252, 252, 252)"}
            textColor={"black"}
            titleColor={"#fa206f"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ justifyContent: "center", display: "flex" }}
        >
          <ValuesCard
            title={"Quality Assurance"}
            paragraph={
              "rigorous testing to ensure your product meets high standards"
            }
            bgColor={"rgb(252, 252, 252)"}
            textColor={"black"}
            titleColor={"#fa206f"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ justifyContent: "center", display: "flex" }}
        >
          <ValuesCard
            title={"Continuous Improvement"}
            paragraph={
              "ongoing enhancements to keep your product ahead of the curve"
            }
            bgColor={"rgb(252, 252, 252)"}
            textColor={"black"}
            titleColor={"#fa206f"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutView;
