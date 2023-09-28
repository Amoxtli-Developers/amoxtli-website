import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import Badge from "react-bootstrap/Badge"; // Import the Badge component
import "./PortfolioCards.css";

const buttonStyle = {
  backgroundColor: "white",
  border: "none",
  color: "#fa206f",
  transition: "background-color 0.3s, box-shadow 0.3s",
};

const arrowStyle = {
  transition: "transform 0.3s",
};

const arrowHoverStyle = {
  transform: "rotate(-45deg)",
};

const badgeStyle = {
  backgroundColor: "#ffcc00", // Set your personalized background color here
  marginRight: "0.5rem",
  marginBottom: "0.5rem",
  color: "black",
  borderRadius: "3rem",
  padding: 0,
};

function PortfolioCard({ title, description, imageSrc, categories }) {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <Card>
      <Card.Body>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {categories.map((category, index) => (
              <Badge key={index} bg="light" style={badgeStyle}>
                <p style={{ margin: "1rem", fontWeight: 400 }}>{category}</p>
              </Badge>
            ))}
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button
            style={buttonStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Learn more{" "}
            <ArrowForwardIcon
              style={{ ...arrowStyle, ...(isHovered && arrowHoverStyle) }}
            />
          </Button>
        </div>
        <div style={{ flex: 1 }}>
          <Card.Img variant="top" src={imageSrc} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default PortfolioCard;
