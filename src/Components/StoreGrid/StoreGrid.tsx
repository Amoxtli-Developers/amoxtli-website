import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import hoodieImage from "../../assets/store/hoodie-front.png";
import hoodieBackImage from "../../assets/store/hoodie-back.png";
import tshirtImage from "../../assets/store/tshirt-front.png";
import tshirtBackImage from "../../assets/store/tshirt-back.png";
import hatImage from "../../assets/store/hat.png";
import ProductModal from "../ProductModal/ProductModal";

gsap.registerPlugin(ScrollTrigger);

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

function StoreGrid() {
  const valuesRef = useRef<HTMLDivElement[]>([]);
  const meetRef = useRef(null);
  const fadeInRef = useRef(null);
  const isInView = useInView(fadeInRef, { once: true });
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
      id: number;
      type: string;
      title: string;
      frontImage: string;
      backImage: string;
      price: number;
    } | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      type: "Amoxtli Hoodie",
      title: "Code Guardian",
      frontImage: hoodieImage,
      backImage: hoodieBackImage,
      price: 65,
    },
    {
      id: 2,
      type: "Amoxtli T-Shirt",
      title: "Axolotl Dev Spirit",
      frontImage: tshirtImage,
      backImage: tshirtBackImage,
      price: 45,
    },
    {
      id: 3,
      type: "Amoxtli Hat",
      title: "The Axolotl Byte",
      frontImage: hatImage,
      backImage: hatImage,
      price: 25,
    },
  ];

  useEffect(() => {
    valuesRef.current.forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.7,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top center",
        },
      });
    });

    if (meetRef.current) {
      gsap.from(meetRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.1,
        scrollTrigger: {
          trigger: meetRef.current,
          start: "top center",
        },
      });
    }
  }, []);

  const handleOpenModal = (
    product: React.SetStateAction<{
      id: number;
      type: string;
      title: string;
      frontImage: string;
      backImage: string;
      price: number;
    } | null>
  ) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProduct(null);
  };

  const handleMouseEnter = (productId: React.SetStateAction<number | null>) => {
    setHoveredProduct(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  return (
    <Box className="main-header">
      <Typography
        className="header-title title-edited"
        sx={{
          textAlign: "left",
          fontSize: { xs: "60px", md: "100px" },
          fontFamily: "Poppins",
        }}
      >
        AWD <span className="underlined-text">Store</span>
      </Typography>
      <motion.div
        ref={fadeInRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInVariant}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "24px", lg: "32px" },
            marginBottom: "8rem",
            fontFamily: "Poppins",
            textAlign: "left",
          }}
        >
          <br />A percentage of the sales from Amoxtli merchandise will be
          donated to{" "}
          <a
            href="https://www.google.com/maps/place/Reptilario+Quetzal/@19.2749484,-99.1016485,15z/data=!4m2!3m1!1s0x0:0xcfd9cb61cdd8ad60?sa=X&ved=1t:2428&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="underlined-text"
          >
            Reptilario Quetzal
          </a>{" "}
          in Xochimilco. This donation will support their efforts to preserve
          the Mexican endemic species, the axolotl.
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={12} md={4} key={product.id}>
            <Card
              onClick={() => handleOpenModal(product)}
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}
              sx={{
                cursor: "pointer",
                borderRadius: "2rem",
                position: "relative",
                padding: "1rem",
              }}
              className="shadow"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  zIndex: 1,
                  padding: "1rem",
                }}
              >
                <Chip
                  label={product.type}
                  sx={{
                    color: "white",
                    backgroundColor: "#ffb6c1",
                    fontWeight: 700,
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "23px",
                  backgroundColor: "transparent",
                  color: "#ffb6c1",
                  borderRadius: "50%",
                  width: "80px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "40px",
                  zIndex: 1,
                  padding: "2rem",
                }}
              >
                ${product.price}
              </Box>
              <CardMedia
                component="img"
                height="200"
                image={
                  hoveredProduct === product.id
                    ? product.backImage
                    : product.frontImage
                }
                alt={product.title}
                sx={{
                  transition: "transform 0.5s ease, opacity 0.5s ease",
                  transform:
                    hoveredProduct === product.id ? "scale(1.05)" : "scale(1)",
                  opacity: hoveredProduct === product.id ? 0.9 : 1,
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: "#00000de", fontWeight: 500, fontSize: "24px" }}
                >
                  {product.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <ProductModal
        open={openModal}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </Box>
  );
}

export default StoreGrid;
