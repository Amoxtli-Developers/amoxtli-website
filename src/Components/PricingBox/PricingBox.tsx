import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { ArrowForward } from "@mui/icons-material";

interface PricingBoxProps {
  title: string;
  description: string;
  price: string;
  attributes: string[];
  color: string;
  buttonLink: string;
}

const PricingBox: React.FC<PricingBoxProps> = ({
  title,
  description,
  price,
  attributes,
  color,
  buttonLink,
}) => {
  const isDarkBackground = color !== "#f8f9fa"; // Assuming #f8f9fa is the light background

  return (
    <Card
      style={{
        backgroundColor: color,
        boxShadow: "none",
        borderRadius: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "450px",
      }}
      className="shadow"
    >
      <CardContent
        sx={{
          padding: 4,
          textAlign: "left",
          flexGrow: 1,
          color: isDarkBackground ? "white" : "black",
          fontFamily: "Poppins, Arial, sans-serif",
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontWeight: "bold",
            color: isDarkBackground ? "white" : "black",
            fontFamily: "Poppins, Arial, sans-serif",
            mb: 2,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          sx={{
            color: isDarkBackground ? "white" : "black",
            fontFamily: "Poppins, Arial, sans-serif",
          }}
        >
          {price}/mx
        </Typography>
        <Typography
          variant="body2"
          sx={{
            margin: "10px 0",
            color: isDarkBackground ? "rgba(255, 255, 255, 0.8)" : "gray",
            fontFamily: "Poppins, Arial, sans-serif",
            mb: 3,
          }}
        >
          {description}
        </Typography>
        <ul style={{ padding: 0, listStyle: "none" }}>
          {attributes.map((attribute, index) => (
            <li key={index} style={{ display: "flex", alignItems: "center" }}>
              <CheckIcon
                style={{
                  marginRight: 8,
                  color: isDarkBackground ? "white" : "black",
                }}
                fontSize="small"
              />
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, Arial, sans-serif",
                }}
                style={{
                  color: isDarkBackground
                    ? "rgba(255, 255, 255)"
                    : "black",
                }}
              >
                {attribute}
              </Typography>
            </li>
          ))}
        </ul>
      </CardContent>
      <Box sx={{ textAlign: "center", padding: "16px 0" }}>
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            padding: 0,
            paddingBottom: 2,
            color: isDarkBackground ? "white" : "black",
            fontSize: "18px",
            fontFamily: "Poppins, Arial, sans-serif",
            fontWeight: 600,
            ":hover": {
              color: isDarkBackground ? "black" : "#fa206f",
              backgroundColor: "transparent",
            },
          }}
          href={buttonLink}
          target="_blank"
        >
          Get Started <ArrowForward sx={{ marginLeft: 2 }} />
        </Button>
      </Box>
    </Card>
  );
};

export default PricingBox;
