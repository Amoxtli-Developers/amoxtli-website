import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

interface PricingPlan {
  title: string;
  description: string;
  price: string;
  attributes: string[];
  color: string;
  buttonLink: string;
}

interface PricingTableProps {
  plans: PricingPlan[];
}

const PricingTable: React.FC<PricingTableProps> = ({ plans }) => {
  const attributes = [
    "Website number",
    "Server storage",
    "Database",
    "Unmetered Bandwidth",
    "SSD Disk",
    "VCPUS Fontworld",
    "WordPress install",
    "Server speed",
  ];

  const attributeDetails = [
    ["01", "10", "50", "Unlimited"],
    ["100 GB", "500 GB", "1 TB", "Unlimited"],
    ["-", "15", "Unlimited", "Unlimited"],
    ["✔️", "✔️", "✔️", "✔️"],
    ["-", "-", "✔️", "✔️"],
    ["-", "-", "✔️", "✔️"],
    ["-", "-", "✔️", "✔️"],
    ["-", "-", "-", "✔️"],
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="pricing table">
        <TableHead>
          <TableRow>
            <TableCell>Features</TableCell>
            {plans.map((plan, index) => (
              <TableCell
                key={index}
                align="center"
                sx={{
                  backgroundColor: plan.color,
                  color: plan.color === "#f8f9fa" ? "black" : "white",
                }}
              >
                <Typography variant="h6">{plan.title}</Typography>
                <Typography variant="body1">{plan.price}/mo</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={plan.buttonLink}
                  sx={{ mt: 1 }}
                  endIcon={<ArrowForward />}
                >
                  Get Started
                </Button>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {attributes.map((attribute, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell component="th" scope="row">
                {attribute}
              </TableCell>
              {plans.map((plan, colIndex) => (
                <TableCell key={colIndex} align="center">
                  {attributeDetails[rowIndex][colIndex]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PricingTable;
