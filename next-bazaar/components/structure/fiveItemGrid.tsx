import React from "react";
import {
  Grid,
  Typography,
  Link as MuiLink,
  Box,
  Stack,
  LinearProgress,
} from "@mui/material";
import NextLink from "next/link";

type FiveItemGridProps = {
  title: string;
  href: string;
  items: React.ReactNode[];
};

const FiveItemGrid: React.FC<FiveItemGridProps> = ({ items, title, href }) => {
  if (!items) {
    return <LinearProgress />; // or return a spinner or other placeholder
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
      <Grid columns={10} container spacing={2}>
        {items.map((item, index) => (
          <Grid item xs={2} key={index}>
            {item}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FiveItemGrid;
