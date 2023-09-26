import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

const RaitingOneStar = ({ value }: { value: number }) => {
  return (
    <Stack direction={"row"}>
      <Image src="/icons/Star_light.svg" alt="star" width={24} height={24} />
      <Typography>{value}</Typography>
    </Stack>
  );
};

export default RaitingOneStar;
