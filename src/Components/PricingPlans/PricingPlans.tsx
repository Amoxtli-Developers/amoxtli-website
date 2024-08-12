import React from "react";
import { Grid } from "@mui/material";
import PricingBox from "../PricingBox/PricingBox";

interface PricingPlan {
  title: string;
  description: string;
  price: string;
  attributes: string[];
  color: string;
  buttonLink: string;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Single Page",
    description: "Perfect for personal projects or portfolios",
    price: "$4,500",
    attributes: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading Speed",
      "Basic Analytics",
      "SSL Certificate",
      "1 Year Hosting Support",
      "CTA Banners",
      "1 Page",
    ],
    color: "#f8f9fa",
    buttonLink: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3-Z0m1jTqkrAMsmX92MdfF--07g4sEkRlNqkxPwbCsd5vRnbtWFSMMoKaHHsNO0MJTAgZ0Lr8m",
  },
  {
    title: "Landing Page",
    description: "Ideal for marketing campaigns and lead generation",
    price: "$8,000",
    attributes: [
      "Custom Design",
      "SEO Optimized",
      "Email Marketing Integration",
      "Lead Capture Forms",
      "Advanced Analytics",
      "CTA Banners",
      "1 Year Hosting Support",
      "Up to 5 Pages",
    ],
    color: "#fa206f",
    buttonLink: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ194tE2ge5Fp80T3yPfH489R2KU6hQTbvfNSceg477tPE0wFWk6kp6tdbb4K2B5-Pd7zJPYz0NB",
  },
  {
    title: "Shopify Store",
    description: "Robust solution for your online store",
    price: "$12,500",
    attributes: [
      "Shopify Integration",
      "Payment Gateway Setup",
      "Inventory Management",
      "Advanced Analytics",
      "Multi-Currency Support",
      "Sales Dashboard",
      "1 Year Hosting Support",
      "Up to 8 Pages",
    ],
    color: "#f8f9fa",
    buttonLink: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0Mdzy_Bpm60JI7B4PLy94RvT3iOX49-_FLtvIwBVGO2LyhytH9-0Bn_hyVcIBhCBuAp0aNhl9d",
  },
];

const PricingPlans = () => {
  return (
    <>
      <Grid container spacing={4} justifyContent="center">
        {pricingPlans.map((plan, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <PricingBox
              title={plan.title}
              description={plan.description}
              price={plan.price}
              attributes={plan.attributes}
              color={plan.color}
              buttonLink={plan.buttonLink}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PricingPlans;
