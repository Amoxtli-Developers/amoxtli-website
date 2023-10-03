import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import imagen from "../assets/pexels-christina-morillo-1181467.jpg";

const badgeStyle = {
    backgroundColor: "#ff99c8", // Set your personalized background color here
    marginRight: "1rem",
    marginBottom: "0.2rem",
    color: "white",
    fontWeight: 600,
    borderRadius: "3rem",
    padding: "5px 15px",
  };

function TeamCarouselCard({ image, title, description, badgeContent }) {
  return (
    <Card sx={{maxWidth: "100%", borderRadius: "1rem", marginBottom: "1rem"}}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "1rem",
        }}
      >
        <badge style={badgeStyle}>
          <span style={{ fontSize: "15px" }}>{badgeContent}</span>
        </badge>
      </div>
      <CardMedia sx={{ justifyContent: "center", display: "flex" }}>
        <Avatar alt={title} src={imagen} sx={{ width: 80, height: 80 }} />
      </CardMedia>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TeamCarouselCard;
