import Card from "react-bootstrap/Card";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import "./PortfolioCards.css";
import { Link } from "react-router-dom";

const arrowStyle = {
  transition: "transform 0.3s",
};

const arrowHoverStyle = {
  transform: "rotate(-45deg)",
};

function PortfolioCard({
  id,
  title,
  description,
  imageSrc,
  categories,
  btnColor,
  cardColor,
  titleColor,
  textColor,
  badgeColor,
  badgeTextColor,
}) {
  const [isHovered, setHovered] = React.useState(false);

  const badgeStyle = {
    backgroundColor: badgeColor, // Set your personalized background color here
    marginRight: "1rem",
    marginBottom: "0.2rem",
    color: badgeTextColor,
    borderRadius: "3rem",
    padding: "5px 15px",
  };

  return (
    <Card style={{ backgroundColor: cardColor }}>
      <Card.Body>
        <div
          className="card-text-container"
          style={{ flex: 1, paddingTop: "2rem", paddingBottom: "2rem" }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginBottom: "1rem",
            }}
          >
            {categories.map((category, index) => (
              <badge key={index} style={badgeStyle}>
                <span style={{ fontWeight: 400, fontSize: "15px" }}>
                  {category}
                </span>
              </badge>
            ))}
          </div>
          <Card.Title style={{ color: titleColor }}>{title}</Card.Title>
          <Card.Text style={{ color: textColor }}>{description}</Card.Text>
          <div className="learn-more-container">
            <Link
              to={`/client-case/${id}`}
              className="learn-more"
              style={{ color: btnColor }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Learn more{" "}
              <ArrowForwardIcon
                style={{ ...arrowStyle, ...(isHovered && arrowHoverStyle) }}
              />
            </Link>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <Card.Img
            className="card-image-container"
            variant="top"
            src={imageSrc}
            alt="project-img"
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default PortfolioCard;
