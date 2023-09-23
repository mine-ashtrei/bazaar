import { Box, Stack, Typography, styled } from "@mui/material";
import { Product } from "../../lib/products";
import ProductImage from "./productImage";
import { Supplier } from "../../lib/suppliers";

const GrayTextTypography = styled(Typography)(({ theme }) => ({
  color: "#707070",
}));

const ProductPage = ({
  product,
  supplier,
}: {
  product: Product;
  supplier: Supplier;
}) => {
  return (
    <Stack direction={"row"}>
      <ProductImage images={product.images} />
      <Box
        sx={{
          width: "450px",
        }}
      >
        <Typography variant="h2">{product.name}</Typography>
        <GrayTextTypography variant="h4">{supplier.name}</GrayTextTypography>
      </Box>
    </Stack>
  );
};

export default ProductPage;
