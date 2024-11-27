import React, { useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  Grid,
  Card,
  CardMedia,
  Chip,
  Button,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import pinkImage from "../../assets/store/pink.png";
import blackImage from "../../assets/store/black.png";
import whiteImage from "../../assets/store/white.png";

interface Product {
  id: number;
  type: string;
  title: string;
  frontImage: string;
  backImage: string;
  price: number;
}

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  product: Product | null;
}

const ProductModal: React.FC<ProductModalProps> = ({
  open,
  onClose,
  product,
}) => {
  const [mainImage, setMainImage] = useState<string | null>(
    product?.frontImage || null
  );
  const [selectedColor, setSelectedColor] = useState<string>("pink");
  const [selectedSize, setSelectedSize] = useState<string>("S");

  if (!product) return null;

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  const handleColorChange = (
    event: React.MouseEvent<HTMLElement>,
    newColor: string | null
  ) => {
    if (newColor) {
      setSelectedColor(newColor);
    }
  };

  const handleSizeChange = (
    event: React.MouseEvent<HTMLElement>,
    newSize: string | null
  ) => {
    if (newSize) {
      setSelectedSize(newSize);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          "&.MuiDialog-paper": {
            borderRadius: "30px",
          },
        },
      }}
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          padding: 4,
        }}
      >
        <Box sx={{ display: "flex", gap: "1.5rem" }}>
          <Box sx={{ flex: 1, position: "relative" }}>
            <Card
              sx={{ overflow: "hidden", borderRadius: "30px", padding: 2 }}
              className="shadow"
            >
              <CardMedia
                component="img"
                image={mainImage || product.frontImage}
                alt={product.title}
                sx={{ width: "100%", height: "100%" }}
              />
            </Card>
            <Chip
              label={product.type}
              sx={{
                position: "absolute",
                top: "20px",
                left: "20px",
                backgroundColor: "#ffb6c1",
                color: "white",
                fontWeight: 600,
                fontSize: "12px",
                padding: "3px 8px",
              }}
            />
          </Box>
          <Grid container spacing={1} sx={{ flex: 1 }}>
            {[product.frontImage, product.backImage, product.backImage].map(
              (image, index) => (
                <Grid item xs={6} key={index}>
                  <Card
                    sx={{
                      borderRadius: "30px",
                      cursor: "pointer",
                      border:
                        mainImage === image
                          ? "2px solid #ffb6c1"
                          : "2px solid transparent",
                      transition: "border 0.3s ease",
                    }}
                    className="shadow"
                    onClick={() => handleImageClick(image)}
                  >
                    <CardMedia
                      component="img"
                      image={image}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </Card>
                </Grid>
              )
            )}
          </Grid>
        </Box>

        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6} p={2}>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              {product.type}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#fa206f" }}>
              {product.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 2,
                backgroundColor: "#fa206f",
                borderRadius: "20px",
                padding: "15px 20px",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, color: "white", fontSize: "32px" }}
              >
                ${product.price} MXN
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  sx={{
                    color: "white",
                    borderRadius: "10px",
                    padding: "8px",
                  }}
                >
                  <ShoppingCartIcon />
                </IconButton>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "#fa206f",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    padding: "8px 16px",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#f5f5f5" },
                  }}
                >
                  Buy now
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Color
                </Typography>
                <ToggleButtonGroup
                  value={selectedColor}
                  exclusive
                  onChange={handleColorChange}
                  sx={{borderRadius: "100%"}}
                >
                  <ToggleButton
                    value="pink"
                    sx={{ padding: 0, borderRadius: "100%" }}
                  >
                    <img
                      src={pinkImage}
                      alt="Pink"
                      style={{ objectFit: "cover" }}
                    />
                  </ToggleButton>
                  <ToggleButton
                    value="small-pink"
                    sx={{ padding: 0 }}
                  >
                    <img
                      src={whiteImage}
                      alt="Small Pink"
                      style={{ objectFit: "cover" }}
                    />
                  </ToggleButton>
                  <ToggleButton
                    value="black"
                    sx={{ padding: 0 }}
                  >
                    <img
                      src={blackImage}
                      alt="Black"
                      style={{ objectFit: "cover" }}
                    />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Size
                </Typography>
                <ToggleButtonGroup
                  value={selectedSize}
                  exclusive
                  onChange={handleSizeChange}
                >
                  <ToggleButton
                    value="S"
                    sx={{
                      borderColor: "#ffb6c1",
                      color: selectedSize === "S" ? "white" : "black",
                      backgroundColor:
                        selectedSize === "S" ? "#ffb6c1" : "transparent",
                    }}
                  >
                    S
                  </ToggleButton>
                  <ToggleButton value="M">M</ToggleButton>
                  <ToggleButton value="L">L</ToggleButton>
                  <ToggleButton value="XL">XL</ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
            <Typography variant="body1" sx={{ fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              varius, nunc nec lacinia dictum, justo turpis fermentum odio, ut
              lacinia felis neque in justo.
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
