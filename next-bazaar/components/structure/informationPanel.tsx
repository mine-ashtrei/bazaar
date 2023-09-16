import { Box, Divider, PaletteColor, Stack } from "@mui/material";
import react from "react";

export default function InformationPanel({
  children,
  backgroundColor,
}: {
  children: react.ReactNode;
  backgroundColor?: PaletteColor;
}) {
  const childrenArray = react.Children.toArray(children);
  if (childrenArray.length !== 2) {
    throw new Error("The component must have exactly two children.");
  }
  return (
    <Stack
      direction={"row"}
      sx={{
        backgroundColor: backgroundColor?.main,
        height: "450px",
        justifyContent: "space-evenly",
      }}
    >
      <Box
        sx={{
          flex: "1 1 0%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginY: {
            xs: 8,
            md: 0,
          },
          marginX: 8,
        }}
      >
        {childrenArray[0]}
      </Box>
      <Divider
        sx={{
          height: "80%",
          margin: "auto 0",
          backgroundColor: "black",
        }}
        orientation="vertical"
        flexItem
      />
      <Box
        sx={{
          flex: "1 1 0%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginY: {
            xs: 8,
            md: 0,
          },
          marginX: 8,
        }}
      >
        {childrenArray[1]}
      </Box>
    </Stack>
  );
}
