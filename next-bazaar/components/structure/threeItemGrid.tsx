import React from "react";
import { Grid, Typography, Link as MuiLink, Box, Stack } from "@mui/material";
import NextLink from "next/link";

type ThreeItemGridProps = {
  title: string;
  href: string;
  items: React.ReactNode[];
};

const ThreeItemGrid: React.FC<ThreeItemGridProps> = ({
  items,
  title,
  href,
}) => {
  if (items.length !== 3) {
    console.error("ThreeItemGrid expects exactly 3 items.");
    return null;
  }

  return (
    <Box
      sx={{
        padding: 2,
        paddingX: 4,
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">
          <MuiLink component={NextLink} href={href} underline="always">
            See all
          </MuiLink>
        </Typography>
      </Stack>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid item xs={4} key={index}>
            {item}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ThreeItemGrid;
