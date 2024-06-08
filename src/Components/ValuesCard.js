import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

function ValuesCard({ title, paragraph, bgColor, textColor, titleColor }) {
  return (
    <Card sx={{ borderRadius: "2rem", backgroundColor: bgColor }}>
      <Box sx={{ textAlign: "left", padding: "50px" }}>
        <Typography
          sx={{
            color: titleColor,
            fontWeight: "bold",
            fontSize: "30px",
            marginBottom: "10px",
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ color: textColor }}>{paragraph}</Typography>
      </Box>
    </Card>
  );
}

export default ValuesCard;
