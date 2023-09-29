import { Paper } from "@mui/material";

import { Order } from "../../../lib/api/orders";
import RetailersTable from "../retailersTable";
import { RetailerData } from "../../../lib/api/retailers";

const SupplierRetailers = ({ retailers }: { retailers: RetailerData[] }) => {
  return (
    <Paper elevation={3}>
      <RetailersTable retailers={retailers} />
    </Paper>
  );
};

export default SupplierRetailers;
