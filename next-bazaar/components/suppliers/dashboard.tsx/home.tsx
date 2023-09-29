import { Paper } from "@mui/material";
import OrdersTable from "../ordersTable";
import { Order } from "../../../lib/api/orders";

const SupplierHome = ({ orders }: { orders: Order[] }) => {
  return (
    <Paper elevation={3}>
      <OrdersTable orders={orders} />
    </Paper>
  );
};

export default SupplierHome;
