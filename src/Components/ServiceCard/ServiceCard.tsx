import React from "react";
import { Card, CardContent, Typography, Box, Grid, Chip } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

interface ServiceCardProps {
  title: string;
  icon: SvgIconComponent;
  services: string[];
  chipColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon: Icon,
  services,
  chipColor,
}) => {
  return (
    <Card
      sx={{
        borderRadius: "2rem",
        backgroundColor: "rgba(42, 42, 42, .05)",
        boxShadow: "none",
        padding: "2rem",
      }}
      className="shadow"
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          marginBottom={2}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{
              marginBottom: "1rem",
              textAlign: "left",
              fontFamily: "Poppins",
              fontSize: { xs: "16px", mg: "20px", lg: "32px" },
            }}
          >
            {title}
          </Typography>

          <Icon sx={{ fontSize: 40 }} />
        </Box>
        <Grid container spacing={1}>
          {services.map((service, index) => (
            <Grid item key={index}>
              <Chip
                label={service}
                sx={{
                  backgroundColor: chipColor,
                  borderRadius: "1rem",
                  fontWeight: "light",
                  padding: "1.2rem",
                  fontSize: { xs: "16px", mg: "18px" },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
