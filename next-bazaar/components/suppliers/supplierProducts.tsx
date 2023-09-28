import {
  Box,
  Card,
  Grid,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Supplier, suppliers } from "../../lib/api/suppliers";
import { Product } from "../../lib/api/products";
import ProductCard from "../products/card";
import NextLink from "next/link";

const SupplierProducts = ({
  products,
  supplier,
}: {
  products: Product[];
  supplier: Supplier;
}) => {
  const PRODUCTS = Array.from(
    { length: 10 },
    (_, i) => products[i % products.length]
  );

  return (
    <Stack spacing={2}>
      <Typography sx={{ paddingX: 2 }} variant="h4">
        Products
      </Typography>
      <Grid container spacing={2}>
        {PRODUCTS.slice(0, 6).map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard item={product} />
          </Grid>
        ))}
      </Grid>
      <MuiLink
        sx={{ paddingX: 2 }}
        component={NextLink}
        href={`/suppliers/${supplier.supplierId}/products`}
      >
        {" "}
        See all products
      </MuiLink>
    </Stack>
  );
};

export default SupplierProducts;
