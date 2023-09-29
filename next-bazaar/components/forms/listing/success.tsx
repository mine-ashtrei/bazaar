import { Box, Button, Stack, Typography } from "@mui/material";
import { Product } from "../../../lib/api/products";
import ProductCard from "../../products/card";
import { ButtonLg, ButtonMd } from "../../common/buttons";

export default function ProductListingSuccess({
  product,
}: {
  product: Product | undefined;
}) {
  return (
    <Stack spacing={1} alignItems={"center"}>
      <Typography variant="h4">Awesome job! Just listed a product</Typography>
      <Typography variant="body2">
        You will get notified via email when your product was accepted to be
        published
      </Typography>

      {product && (
        <Box sx={{ maxWidth: "200px", paddingTop: 2, paddingBottom: 4 }}>
          <ProductCard item={product} />{" "}
        </Box>
      )}
      <Stack direction={"row"} spacing={2} justifyContent={"space-around"}>
        <Button
          sx={{ ...ButtonLg }}
          color="primary"
          variant="contained"
          href="/listing"
        >
          Add More Listings
        </Button>
        <Button sx={{ ...ButtonLg }} variant="outlined" href="/dashboard">
          Dashboard
        </Button>
      </Stack>
    </Stack>
  );
}
