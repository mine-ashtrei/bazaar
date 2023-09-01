import { Box, Stack, Divider, Container, Grid, Hidden } from "@mui/material";
import react from "react";

type InformationPanelProps = {
  children: react.ReactNode[];
};

export default function InformationPanel({ children }: InformationPanelProps) {
  const childrenArray = react.Children.toArray(children);

  if (childrenArray.length !== 2) {
    throw new Error("The component must have exactly two children.");
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: "#E4D6A7", minHeight: "40vh" }}
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Grid item xs={12} sm={5}>
        <Box
          display="flex"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          {children![0]}
        </Box>
      </Grid>
      <Hidden smUp>
        <Grid xs={12} sm={false}>
          <Divider variant="middle" />
        </Grid>
      </Hidden>
      <Hidden xsDown>
        <Divider
          orientation="vertical"
          sx={{
            transform: "scaleY(0.8)",
            //   borderRightWidth: 1,
            borderColor: "black",
          }}
          flexItem
        />
      </Hidden>
      <Grid item xs={12} sm={5}>
        <Box
          display="flex"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          {children![1]}
        </Box>
      </Grid>
    </Grid>
  );
}
