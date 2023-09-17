import { Box, PaletteColor, Stack } from "@mui/material";
import react from "react";

export default function Panel({
  children,
  backgroundColor,
}: {
  children: react.ReactNode;
  backgroundColor?: PaletteColor;
}) {
  // TODO make dark theam compatible
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      sx={{
        height: "450px",
        width: "100%",
        backgroundColor: backgroundColor?.main,
      }}
    >
      {children}
    </Stack>
  );
}
