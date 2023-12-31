import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./CasesView.css";

function MajorCard({ title, paragraph, bgColor, textColor, cardWidth}) {
  return (
    <Card sx={{ borderRadius: "2rem", backgroundColor: bgColor, width: cardWidth }}>
      <CardContent sx={{ margin: "2rem", textAlign: "left"}}>
        <h3 style={{ color: "#fa206f", fontWeight: "20px", paddingBottom: "30px" }}>{title}</h3>
        <p style={{ color: textColor }}>{paragraph}</p>
      </CardContent>
    </Card>
  );
}

export default MajorCard;
