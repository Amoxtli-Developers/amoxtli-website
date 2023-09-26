import React from "react";

import "./Title.css";
import { Box } from "@mui/material";

const Title = ({ title }) => {
  return (
    <Box className="section">
       <h3 className="section-title">{title}</h3>
    </Box>
  );
};

export default Title;
