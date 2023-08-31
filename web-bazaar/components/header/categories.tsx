import { Stack, Link } from "@mui/material";

const CATEGORIES = [
  "Men",
  "Women",
  "Home & Decor",
  "Beauty & Wellness",
  "Jewelry",
];

type CategoryProps = {
  name: string;
};

function Category({ name }: CategoryProps) {
  return (
    <Link color="inherit" noWrap href="#" underline="hover">
      {name}
    </Link>
  );
}

export default function Categories() {
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="space-around"
      alignItems="center"
    >
      {CATEGORIES.map((category) => (
        <Category key={category} name={category} />
      ))}
    </Stack>
  );
}
