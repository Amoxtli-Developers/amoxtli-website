import React from "react";
import { LayoutGrid } from "../../Components/LayoutGrid/LayoutGird";
import { Box, Typography } from "@mui/material";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.gif";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";

export function ImageGrid() {
  return (
    <Box className="h-screen w-full">
      <LayoutGrid cards={cards} />
    </Box>
  );
}

const SkeletonOne = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "lg" }}>
      <Typography variant="h4" sx={{ color: "white", fontSize: { xs: "1.5rem", md: "2.5rem" }, fontWeight: "bold", marginBottom: 1 }}>
        Our Team
      </Typography>
      <Typography variant="body1" sx={{ color: "white", fontSize: { xs: "0.8rem", md: "1.25rem" } }}>
        At Amoxtli, we are a developer family dedicated to crafting innovative
        technology and software solutions. Our mission is to tackle everyday
        challenges that can be addressed through technology. With a keen focus
        on creating practical and impactful solutions, we strive to enhance
        daily life and simplify complex tasks. Join us on our journey to
        transform ideas into technology that makes a difference.
      </Typography>
    </Box>
  );
};

const SkeletonTwo = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "lg" }}>
      <Typography variant="h4" sx={{ color: "white", fontSize: { xs: "1.5rem", md: "2.5rem" }, fontWeight: "bold", marginBottom: 1 }}>
        Meet AxoAI
      </Typography>
      <Typography variant="body1" sx={{ color: "white", fontSize: { xs: "0.8rem", md: "1.25rem" } }}>
        AxoAI is our latest innovation designed to revolutionize the way
        businesses approach their online presence. With AxoAI, users can
        effortlessly discover which type of website aligns best with their
        specific business goals and budget constraints. It offers tailored
        recommendations by analyzing key business parameters, ensuring that
        every decision you make is informed and strategic. Embrace the future of
        digital planning with AxoAI and elevate your business to new heights.
      </Typography>
    </Box>
  );
};

const SkeletonThree = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "lg" }}>
      <Typography variant="h4" sx={{ color: "white", fontSize: { xs: "1.5rem", md: "2.5rem" }, fontWeight: "bold", marginBottom: 1 }}>
        Software Development
      </Typography>
      <Typography variant="body1" sx={{ color: "white", fontSize: { xs: "0.8rem", md: "1.25rem" } }}>
        At Amoxtli, we pride ourselves on having successfully executed over 20
        software projects, employing a wide array of technologies and
        programming languages. Our extensive experience spans multiple
        industries, allowing us to create solutions that are not only innovative
        but also perfectly tailored to meet the unique needs of our clients.
        Dive into the world of advanced custom software with Amoxtli, where
        technology meets precision and quality.
      </Typography>
    </Box>
  );
};

const SkeletonFour = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "lg" }}>
      <Typography variant="h4" sx={{ color: "white", fontSize: { xs: "1.5rem", md: "2.5rem" }, fontWeight: "bold", marginBottom: 1 }}>
        HackMx @TecCCM
      </Typography>
      <Typography variant="body1" sx={{ color: "white", fontSize: { xs: "0.8rem", md: "1.25rem" } }}>
        Amoxtli proudly participated in HackMx at the Tecnológico de Monterrey,
        where our team developed an innovative tool for Thales Enterprise. This
        tool leverages advanced AI models from Google and Happy Face to analyze
        and classify emergency 911 calls, enhancing response effectiveness and
        efficiency. Our solution aims to support critical decision-making in
        emergency response scenarios, demonstrating our commitment to applying
        cutting-edge technology to solve real-world problems.
      </Typography>
    </Box>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: image1,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: image2,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: image4,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: image3,
  },
];
