import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function ValuesCard({ title, paragraph, bgColor, textColor, titleColor, cardWidth}) {
  return (
    <Card sx={{ borderRadius: "2rem", backgroundColor: bgColor, width: cardWidth }}>
      <CardContent sx={{ margin: "2rem", textAlign: "left" }}>
        <h3 style={{ color: titleColor, fontWeight: "bold", fontSize: "30px", marginBottom: "10px",  }}>{title}</h3>
        <p style={{ color: textColor }}>{paragraph}</p>
      </CardContent>
    </Card>
  );
}

export default ValuesCard;
