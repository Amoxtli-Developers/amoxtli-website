"use client";
import React from "react";
import { LayoutGrid } from "../../Components/LayoutGrid/LayoutGird";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.gif";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";

export function ImageGrid() {
  return (
    <div className="h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Our Team</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        At Amoxtli, we are a developer family dedicated to crafting innovative
        technology and software solutions. Our mission is to tackle everyday
        challenges that can be addressed through technology. With a keen focus
        on creating practical and impactful solutions, we strive to enhance
        daily life and simplify complex tasks. Join us on our journey to
        transform ideas into technology that makes a difference.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Meet AxoAI</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        AxoAI is our latest innovation designed to revolutionize the way
        businesses approach their online presence. With AxoAI, users can
        effortlessly discover which type of website aligns best with their
        specific business goals and budget constraints. It offers tailored
        recommendations by analyzing key business parameters, ensuring that
        every decision you make is informed and strategic. Embrace the future of
        digital planning with AxoAI and elevate your business to new heights.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Software Development</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        At Amoxtli, we pride ourselves on having successfully executed over 20
        software projects, employing a wide array of technologies and
        programming languages. Our extensive experience spans multiple
        industries, allowing us to create solutions that are not only innovative
        but also perfectly tailored to meet the unique needs of our clients.
        Dive into the world of advanced custom software with Amoxtli, where
        technology meets precision and quality.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">HackMx @TecCCM</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Amoxtli proudly participated in HackMx at the Tecnológico de Monterrey,
        where our team developed an innovative tool for Thales Enterprise. This
        tool leverages advanced AI models from Google and Happy Face to analyze
        and classify emergency 911 calls, enhancing response effectiveness and
        efficiency. Our solution aims to support critical decision-making in
        emergency response scenarios, demonstrating our commitment to applying
        cutting-edge technology to solve real-world problems.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2  ",
    thumbnail: image1,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1  ",
    thumbnail: image2,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1  ",
    thumbnail: image4,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 ",
    thumbnail: image3,
  },
];
