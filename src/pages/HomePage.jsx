// src/pages/HomePage.jsx
import { useState, useEffect } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

/* ================= HERO CONTAINER ================= */
const Hero = styled(Box)(() => ({
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center", // 👈 centrado vertical
  justifyContent: "center",
  overflow: "hidden",
}));

/* ================= SLIDES ================= */
const slides = [
  {
    image: "/juan1.jpg",
    title: "Juntos por el progreso",
   
  },
  
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));
    }, 5000);
    return () => clearInterval(i);
  }, []);

  return (
    <Box>
      {/* ================= HERO ================= */}
      <Hero
        sx={{
          backgroundImage: `url(${slides[current].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "all 1s ease",
        }}
      >
        {/* Overlay oscuro */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,.9) 20%, rgba(0,0,0,.55) 60%)",
            zIndex: 1,
          }}
        />

        {/* Contenido */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: 1300,
            px: { xs: 2, sm: 4, md: 6 },
            height: "100%",
          }}
        >
          {/* Imagen grande profesional */}
          <Box
            component={motion.img}
            src="/juanfloresme.png"
            alt="Candidato"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{
              width: {
                xs: "100%",
                sm: "80%",
                md: "55%",
                lg: "70%",
              },
              height: {
                md: "100vh",
              },
              objectFit: "contain",
              alignSelf: "flex-end",
              filter: "drop-shadow(0 40px 80px rgba(0,0,0,.9))",
            }}
          />

          {/* Texto 11*/}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            sx={{
              color: "white",
              textAlign: { xs: "center", md: "left" },
              maxWidth: 520,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "2rem", sm: "2.6rem", md: "3.4rem" },
                fontWeight: 900,
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              {slides[current].title}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
                opacity: 0.9,
                mb: 4,
              }}
            >
              {slides[current].description}
            </Typography>

            <Button
              variant="contained"
              href="#redes"
              sx={{
                background: "#e13412",
                px: 5,
                py: 1.8,
                fontWeight: "bold",
                borderRadius: 3,
                "&:hover": { background: "#ff6a00", color: '#FFFFFF',  background: 'linear-gradient(135deg, #0f172a, #1e40af 45%, #991b1b)' },
              }}
            >
              Únete al cambio
            </Button>
          </Box>
        </Stack>
      </Hero>
    </Box>
  );
}
