import { Paper } from "@mui/material";
import OrdersTable from "../ordersTable";
import { Order } from "../../../lib/api/orders";

const SupplierOrders = ({ orders }: { orders: Order[] }) => {
  return (
    <Paper elevation={3}>
      ORDERS
      <OrdersTable orders={orders} />
    </Paper>
  );
};

export default SupplierOrders;
