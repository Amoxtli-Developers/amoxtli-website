import React from "react";
import { Typography } from "@mui/material";
import {  motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      staggerChildren: 0.05,
    },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const PullUpText = () => {
  const textArray = [
    "our mission is to empower you with",
    "the essential tools to kickstart your ",
    <span key="underline" className="underlined-text">
      online journey.
    </span>,
  ];

  const splitText = textArray.map((segment, index) => {
    if (typeof segment === "string") {
      return (
        <span key={index} className="inline-block">
          {segment.split("").map((char, charIndex) => (
            <motion.span key={charIndex} variants={letterVariant}>
              {char}
            </motion.span>
          ))}
        </span>
      );
    } else {
      // Handle span element
      return (
        <motion.span
          key={index}
          variants={letterVariant}
          className="inline-block"
        >
          {segment}
        </motion.span>
      );
    }
  });

  return (
    <Typography
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={textVariant}
      className="quote"
      sx={{
        fontSize: { xs: "24px", md: "36px", lg: "58px" },
        marginBottom: "3rem",
        fontFamily: "Poppins",
        textAlign: "right",
      }}
    >
      {splitText[0]}
      <br />
      {splitText[1]}
      <br />
      {splitText[2]}
    </Typography>
  );
};

export default PullUpText;
