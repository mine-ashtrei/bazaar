import { Box, Stack, Divider } from "@mui/material";
import react from "react";

type InformationPanelProps = {
  children: react.ReactNode[];
};

export default function InformationPanel({ children }: InformationPanelProps) {
  const childrenArray = react.Children.toArray(children);

  if (childrenArray.length !== 2) {
    throw new Error("The component must have exactly two children.");
  }
  const MARGIN = 10;
  return (
    <Stack
      direction="row"
      width={"100%"}
      sx={{ backgroundColor: "#E4D6A7", height: "30vh" }}
      alignItems="center"
      justifyContent="space-around"
    >
      <Box margin={MARGIN}>{children![0]}</Box>
      <Divider
        orientation="vertical"
        sx={{
          transform: "scaleY(0.8)",
          //   borderRightWidth: 1,
          borderColor: "black",
        }}
        flexItem
      />
      <Box margin={MARGIN}>{children![1]}</Box>
    </Stack>
  );
}
