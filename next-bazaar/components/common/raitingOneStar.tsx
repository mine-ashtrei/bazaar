import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import StarSvg from "./icons/star";

const RaitingOneStar = ({ value }: { value: number }) => {
  return (
    <Stack direction={"row"}>
      <StarSvg fill="yellow" />
      <Typography>{value}</Typography>
    </Stack>
  );
};

export default RaitingOneStar;
