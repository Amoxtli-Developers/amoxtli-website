import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

function ValuesCard({ title, paragraph, bgColor, textColor, titleColor }) {
  return (
    <Card
      sx={{ borderRadius: "2rem", backgroundColor: bgColor, boxShadow: "none" }}
      className="shadow"
    >
      <Box sx={{ textAlign: "left", padding: "50px" }}>
        <Typography
          sx={{
            color: titleColor,
            fontWeight: "bold",
            fontSize: {
              xs: "24px", // font size for extra small screens
              sm: "28px", // font size for small screens
              md: "32px", // font size for medium screens
              lg: "36px", // font size for large screens
              xl: "40px", // font size for extra large screens
            },
            marginBottom: "10px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: textColor,
            fontSize: {
              xs: "14px", // font size for extra small screens
              sm: "16px", // font size for small screens
              md: "18px", // font size for medium screens
              lg: "20px", // font size for large screens
              xl: "22px", // font size for extra large screens
            },
          }}
        >
          {paragraph}
        </Typography>
      </Box>
    </Card>
  );
}

export default ValuesCard;
