import React from "react";
import { Box } from "@mui/material";
import { HoverEffect } from "../CardHoverEffect/CardHoverEffect";

export function CardHoverEffectDemo() {
  return (
    <Box
      className="max-w-[95rem] mx-auto"
      sx={{ marginBottom: { xs: "2rem", md: "6rem", lg: "8rem" } }}
    >
      <HoverEffect items={projects} />
    </Box>
  );
}

export const projects = [
  {
    title: "Discovering",
    description:
      "1-week phase to ensure project fit with technical, budget, and timeline alignment.",
  },
  {
    title: "Scoping",
    description:
      "2-3 weeks to detail requirements, budget, and timeline for your app.",
  },
  {
    title: "Design",
    description:
      "1-2 weeks to create high-fidelity mockups and align on the design.",
  },
  {
    title: "Development",
    description:
      "Development phase, ranging from 1 week to several months, to build and test your app.",
  },
  {
    title: "Review",
    description:
      "1-month phase to review and ensure the final product meets your expectations.",
  },
  {
    title: "Support",
    description:
      "Ongoing or one-time support to continuously improve your app post-launch.",
  },
];
