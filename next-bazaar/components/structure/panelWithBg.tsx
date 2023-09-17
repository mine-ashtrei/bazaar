import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function PanelWithBg({
  imgSrc,
  title,
  subtitle,
}: {
  imgSrc: string;
  title: string;
  subtitle?: string;
}) {
  const HEIGHT = "450px";
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        height: HEIGHT,
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: HEIGHT,
          zIndex: -20,
          position: "absolute",
          top: 0,
        }}
      >
        <Image src={imgSrc} fill={true} alt="img" />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: HEIGHT,
          zIndex: -19,
          position: "absolute",
          top: 0,
          backgroundColor: "black",
          opacity: "30%",
        }}
      />
      <Typography color={"common.white"} variant="h1">
        {title}
      </Typography>
      <Typography color={"common.white"} variant="h2">
        {subtitle}
      </Typography>
    </Stack>
  );
}
