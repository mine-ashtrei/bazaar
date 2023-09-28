import { Box, Stack, Typography, styled } from "@mui/material";
import { Product } from "../../lib/api/products";
import ProductImage from "./productImage";
import { Supplier } from "../../lib/api/suppliers";
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
    <Stack direction={"row"} spacing={5} justifyContent={"space-between"}>
      <ProductImage images={product.images} />
      <ProductMain product={product} supplier={supplier} />
      <ProductHighlight product={product} supplier={supplier} />
    </Stack>
  );
};

export default ProductPage;
