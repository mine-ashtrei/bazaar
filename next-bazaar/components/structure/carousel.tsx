import { useState } from "react";
import { Box, Button, Grid, IconButton } from "@mui/material";
import React from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

type CarouselProps = {
  cards: React.ReactNode[];
};

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 1 >= cards.length) {
      setStartIndex(0); // Wrap around to the beginning
    } else {
      setStartIndex((prev) => (prev + 1) % cards.length);
    }
  };

  const handlePrev = () => {
    if (startIndex === 0) {
      setStartIndex(cards.length - 1); // Wrap around to the end
    } else {
      setStartIndex((prev) => (prev - 1) % cards.length);
    }
  };

  const diff = cards.length - startIndex;
  const visibleCards = [...cards.slice(startIndex, startIndex + 4)];
  if (diff < 4) {
    visibleCards.push(...cards.slice(0, 4 - diff));
  }
  console.log(startIndex);
  console.log(visibleCards);
  // TODO: make arrow buttons smaller
  return (
    <Box sx={{ margin: 2, position: "relative" }}>
      <Button
        variant="contained"
        endIcon={<ArrowBack />}
        onClick={handlePrev}
        style={{
          width: "44px",
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          zIndex: 2,
        }}
      />
      <Grid container spacing={2}>
        {visibleCards.map((card, index) => (
          <Grid key={index} item xs={3}>
            {card}
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        startIcon={<ArrowForward />}
        onClick={handleNext}
        style={{
          position: "absolute",
          width: "44px",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 2,
        }}
      />
    </Box>
  );
};

export default Carousel;
