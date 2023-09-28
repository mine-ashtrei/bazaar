import Image from "next/image";
import NextLink from "next/link";
import { Category } from "../../lib/api/categories";
import { Box, Typography, Link as MuiLink } from "@mui/material";

export default function CategoryCard({ item }: { item: Category }) {
  const categoryUrl = "#";
  return (
    <Box
      sx={{
        "&:hover img": {
          opacity: 0.8,
        },
        "&:hover a": {
          textDecoration: "underline",
        },
        transition: "opacity 0.4s",
      }}
    >
      <MuiLink component={NextLink} href={categoryUrl}>
        <Image src={item.imgUrl} width={245} height={309} alt={item.name} />
      </MuiLink>
      <MuiLink component={NextLink} href={categoryUrl} underline="hover">
        <Typography variant="h6" align="center">
          {item.name}
        </Typography>
      </MuiLink>
    </Box>
  );
}
