import React, { useEffect, useRef } from "react";
import "./AboutView.css";
import Box from "@mui/material/Box";
import TeamCarousel from "./TeamCarousel";
import { Grid, Typography } from "@mui/material";
import ValuesCard from "./ValuesCard";
import axolotlGift from "../assets/amoxtli-merch.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PullUpText from "./PullUpText/PullUpText";
import { motion, useInView } from "framer-motion";
import { ImageGrid } from "../Components/ImageGrid/ImageGrid";

gsap.registerPlugin(ScrollTrigger);

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

function AboutView() {
  const valuesRef = useRef([]);
  const meetRef = useRef(null);
  const fadeInRef = useRef(null);
  const isInView = useInView(fadeInRef, { once: true });

  valuesRef.current = [];

  useEffect(() => {
    valuesRef.current.forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.7,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top center",
        },
      });
    });

    if (meetRef.current) {
      gsap.from(meetRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.1,
        scrollTrigger: {
          trigger: meetRef.current,
          start: "top center",
        },
      });
    }
  }, []);

  const addToRefs = (el) => {
    if (el && !valuesRef.current.includes(el)) {
      valuesRef.current.push(el);
    }
  };

  const values = [
    {
      title: "Customer First",
      paragraph: "We listen, adapt, and deliver excellence.",
      bgColor: "rgba(255, 0, 153, 0.8)",
      textColor: "#FFFFFF",
    },
    {
      title: "Business Savvy",
      paragraph: "Clear, simple, and effective communication.",
      bgColor: "rgba(255, 153, 200, 0.8)",
      textColor: "#FFFFFF",
    },
    {
      title: "Creative Tech",
      paragraph: "Innovation at the intersection of tech and creativity.",
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

      <PullUpText />

      <img src={axolotlGift} alt="about-header-img" className="about-img"></img>

      <motion.div
        ref={fadeInRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInVariant}
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "36px", lg: "58px" },
            marginBottom: "8rem",
            fontFamily: "Poppins",
            textAlign: "left",
          }}
        >
          we believe <span className="underlined-text">technology</span> is the
          key <br />
          to start evolving your business <br />
          into the <span className="underlined-text">digital era.</span>
        </Typography>
      </motion.div>

      <div ref={meetRef} style={{ marginBottom: "8rem", marginTop: "8rem" }}>
        <h3 className="section-title" style={{ textAlign: "right" }}>
          Meet the <span className="underlined-text">AMOXTLERS</span>
        </h3>
        <TeamCarousel />
      </div>

      <h3
        className="section-title"
        style={{
          textAlign: "center",
        }}
      >
        Our values
      </h3>

      <Grid container spacing={2}>
        {values.map((value, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} ref={addToRefs}>
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

      <ImageGrid />
      <Grid
        container
        spacing={2}
        sx={{ marginBottom: "5rem", marginTop: { xs: "3rem ", md: "6rem" } }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ justifyContent: "center", display: "flex" }}
          ref={addToRefs}
        >
          <ValuesCard
            title={"Ensuring Success"}
            paragraph={
              "Full control when outsourcing development of your SaaS product."
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
          ref={addToRefs}
        >
          <ValuesCard
            title={"Securing Ownership"}
            paragraph={
              "Tamper-proof evidence of the ownership of all the work."
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
          ref={addToRefs}
        >
          <ValuesCard
            title={"Quality Assurance"}
            paragraph={
              "Rigorous testing to ensure your product meets high standards."
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
          ref={addToRefs}
        >
          <ValuesCard
            title={"Continuous Improvement"}
            paragraph={
              "Ongoing enhancements to keep your product ahead of the curve."
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
