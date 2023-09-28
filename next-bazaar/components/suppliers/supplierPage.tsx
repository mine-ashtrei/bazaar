import { Box, Grid, Stack } from "@mui/material";
import { Product } from "../../lib/api/products";
import { Supplier } from "../../lib/api/suppliers";
import SupplierAboutCard from "./supplierAboutCard";
import SupplierProducts from "./supplierProducts";

const SupplierPage = ({
  supplier,
  products,
}: {
  supplier: Supplier;
  products: Product[];
}) => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={5}>
        <SupplierAboutCard supplier={supplier} />
      </Grid>
      <Grid item xs={12} md={7}>
        <SupplierProducts products={products} supplier={supplier} />
      </Grid>
    </Grid>
  );
};

export default SupplierPage;
