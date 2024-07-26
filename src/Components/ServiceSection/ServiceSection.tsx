import React from "react";
import { Grid, Box } from "@mui/material";
import ServiceCard from "../ServiceCard/ServiceCard";
import WebIcon from "@mui/icons-material/Web";
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const servicesWeb = [
  "Landing pages",
  "Multipage websites",
  "Blogs",
  "On-site SEO",
  "Webflow",
  "Animations & interactions",
  "Hosting",
  "CMS",
];

const servicesBranding = [
  "Logo Design",
  "Brand Identity",
  "Marketing Materials",
  "Social Media Branding",
  "Packaging Design",
  "Print Design",
  "Brand Guidelines",
];

interface ServiceSectionProps {
  title: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title }) => {
  return (
    <Box className="section">
      <h3 className="section-title" style={{ textAlign: "right" }}>
        {title}
      </h3>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ServiceCard
            title="Web Development"
            icon={WebIcon}
            services={servicesWeb}
            chipColor="rgba(255, 153, 200, 0.8)"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ServiceCard
            title="Branding"
            icon={DesignServicesIcon}
            services={servicesBranding}
            chipColor="rgba(247, 198, 255, 0.8)"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceSection;
