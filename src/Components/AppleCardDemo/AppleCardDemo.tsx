"use client";
import React from "react";
import { Carousel, CarouselCard } from "../AppleCard/AppleCard";
import s1 from "../../assets/stories/1.jpeg";
import s2 from "../../assets/stories/2.jpeg";
import s3 from "../../assets/stories/3.jpeg";
import s4 from "../../assets/stories/4.jpeg";
import s5 from "../../assets/stories/5.jpeg";
import s6 from "../../assets/stories/6.jpeg";
import s7 from "../../assets/stories/7.jpeg";
import s8 from "../../assets/stories/8.jpeg";
import s9 from "../../assets/stories/9.jpeg";
import s10 from "../../assets/stories/10.jpeg";
import s11 from "../../assets/stories/11.jpeg";
import { Box } from "@mui/material";

export function AppleCardDemo() {
  const cards = data.map((card, index) => (
    <CarouselCard key={card.id} card={card} index={index} />
  ));

  return (
    <Box
      className="w-full h-full"
      sx={{ marginBottom: { xs: "2rem", md: "6rem", lg: "8rem" } }}
    >
      <h3
        className="section-title"
        style={{ textAlign: "center", marginBottom: 0 }}
      >
        Case Studies
      </h3>
      <Carousel items={cards} />
    </Box>
  );
}

const DummyContent = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every thought.
          </p>
          <img
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      ))}
    </>
  );
};

const data = [
  {
    id: "1",
    category: "Single Page",
    title: "Contadores Martínez Carreño y Asociados",
    src: s1,
    content: <DummyContent />,
  },
  {
    id: "2",
    category: "Landing Page",
    title: "Fratelli's Helados",
    src: s2,
    content: <DummyContent />,
  },
  {
    id: "3",
    category: "Business Site",
    title: "Hilitos Lili",
    src: s3,
    content: <DummyContent />,
  },
  {
    id: "4",
    category: "Sigle Page",
    title: "MG Servicio Inmobiliario",
    src: s4,
    content: <DummyContent />,
  },
  {
    id: "5",
    category: "Startup Site",
    title: "Orza Tech",
    src: s5,
    content: <DummyContent />,
  },
  {
    id: "6",
    category: "Business Site",
    title: "Psique & Ser",
    src: s6,
    content: <DummyContent />,
  },
  {
    id: "7",
    category: "Portfolio & Services Site",
    title: "Rondo Productions",
    src: s7,
    content: <DummyContent />,
  },
  {
    id: "8",
    category: "Photographer Site",
    title: "Salomon Photo",
    src: s8,
    content: <DummyContent />,
  },
  {
    id: "9",
    category: "Education Site",
    title: "Colegio Antonio José de Sucre",
    src: s9,
    content: <DummyContent />,
  },
  {
    id: "10",
    category: "Real State Site",
    title: "Asesorista",
    src: s10,
    content: <DummyContent />,
  },
  {
    id: "11",
    category: "Spa & Skin Care Site",
    title: "Skin Secrets",
    src: s11,
    content: <DummyContent />,
  },
];
