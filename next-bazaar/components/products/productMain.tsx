import { Product } from "../../lib/products";
import { Supplier } from "../../lib/suppliers";
import { Box, Stack, Typography, styled } from "@mui/material";

const GrayTextTypography = styled(Typography)(({ theme }) => ({
  color: "#707070",
}));

const ProductMain = ({
  product,
  supplier,
}: {
  product: Product;
  supplier: Supplier;
}) => {
  return (
    <Box
      sx={{
        minWidth: "300px",
        flex: 1,
      }}
    >
      <Typography variant="h2">{product.name}</Typography>
      <GrayTextTypography variant="h4">{supplier.name}</GrayTextTypography>
      <Typography paragraph sx={{ marginTop: 5 }}>
        {product.description}
      </Typography>
    </Box>
  );
};

export default ProductMain;
