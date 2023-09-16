import { Category } from "../../lib/categories";
import { Box, Link as MUILink, useTheme } from "@mui/material";
import NextLink from "next/link";

function Category({ category }: { category: Category }) {
  return (
    <MUILink component={NextLink} href="#" underline="hover">
      {category.name}
    </MUILink>
  );
}

export default function CategoriesHeader({
  categories,
}: {
  categories: Category[];
}) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 1,
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: theme.palette.grey[200],
      }}
    >
      {categories.map((category) => (
        <Category key={category.name} category={category} />
      ))}
    </Box>
  );
}
