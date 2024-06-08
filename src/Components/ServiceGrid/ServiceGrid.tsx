import React from "react";
import { BentoGrid, BentoGridItem } from "../BentoGrid/BentoGrid";
import { Box } from "@mui/system";
import A1 from "../../assets/services/A1.gif";
import A2 from "../../assets/services/A2.gif";
import A3 from "../../assets/services/A3.gif";
import A4 from "../../assets/services/A4.gif";
import A5 from "../../assets/services/A5.gif";
import A6 from "../../assets/services/A6.gif";

export function ServiceGrid() {
  return (
    <Box className="main-header">
      <BentoGrid className="">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 6 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </Box>
  );
}
const items = [
  {
    title: "Web Development",
    description: "Dynamic and engaging websites tailored to your unique needs.",
    header: (
      <img
        src={A1}
        alt="Web Development"
        style={{ objectFit: "cover", maxWidth: "40%" }}
      />
    ),
  },
  {
    title: "Mobile Development",
    description:
      "Innovative mobile applications designed to enhance user experience and accessibility.",
    header: (
      <img
        src={A1}
        alt="Mobile Development"
        style={{ objectFit: "cover", maxWidth: "40%" }}
      />
    ),
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions crafted to streamline processes and boost productivity.",
    header: (
      <img
        src={A1}
        alt="Software Development"
        style={{ objectFit: "cover", maxWidth: "40%" }}
      />
    ),
  },
  {
    title: "UX/UI Design",
    description:
      "Intuitive and user-centric interface designs to optimize engagement and usability.",
    header: (
      <img
        src={A4}
        alt="UX/UI Design"
        style={{ objectFit: "cover" }}
      />
    ),
  },
  {
    title: "SEO & Marketing",
    description:
      "Strategic digital marketing and SEO services aimed at maximizing online visibility and brand growth.",
    header: (
      <img
        src={A1}
        alt="SEO & Marketing"
        style={{ objectFit: "cover", maxWidth: "40%" }}
      />
    ),
  },
  {
    title: "E-Commerce",
    description:
      "Comprehensive e-commerce solutions for seamless online retail experiences and business expansion.",
    header: (
      <img
        src={A5}
        alt="E-Commerce"
        style={{ objectFit: "cover", maxWidth: "40%" }}
      />
    ),
  },
];
