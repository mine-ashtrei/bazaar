import { Stack, Link } from "@mui/material";

const CATEGIRUES = [
  "Men",
  "Women",
  "Home & Decor",
  "Beauty & Wellness",
  "Jewelry",
];

function Category(name: string) {
  return (
    <Link color="inherit" noWrap href="#" underline="hover">
      {name}
    </Link>
  );
  // <Chip size="small" label={name} />;
}

export default function Categories() {
  const categories = [];
  for (let category of CATEGIRUES) {
    categories.push(Category(category));
  }
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="space-around"
      alignItems="center"
    >
      {categories}
    </Stack>
  );
}
