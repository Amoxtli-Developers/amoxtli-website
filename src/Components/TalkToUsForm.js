import { Box } from "@mui/material";
import React, { useEffect } from "react";

function TalkToUsForm() {
  useEffect(() => {
    // The Typeform script
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;

    // The Typeform div container
    const typeformContainer = document.querySelector(
      '[data-tf-live="01HC3PAXNKF5E37ADY86Z8JXDS"]'
    );

    if (typeformContainer) {
      typeformContainer.appendChild(script);
    }

    return () => {
      // Clean up the script when the component unmounts
      if (typeformContainer) {
        typeformContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <Box className="main-header">
      <div data-tf-live="01HC3PAXNKF5E37ADY86Z8JXDS"></div>
    </Box>
  );
}

export default TalkToUsForm;
