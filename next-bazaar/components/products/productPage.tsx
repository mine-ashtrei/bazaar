import { Box, Stack, Typography, styled } from "@mui/material";
import { Product } from "../../lib/products";
import ProductImage from "./productImage";
import { Supplier } from "../../lib/suppliers";
import ProductHighlight from "./productHighlight";
import ProductMain from "./productMain";

const ProductPage = ({
  product,
  supplier,
}: {
  product: Product;
  supplier: Supplier;
}) => {
  return (
    <Stack direction={"row"} sx={{ padding: 5 }} spacing={5}>
      <ProductImage images={product.images} />
      <ProductMain product={product} supplier={supplier} />
      <ProductHighlight product={product} supplier={supplier} />
    </Stack>
  );
};

export default ProductPage;
