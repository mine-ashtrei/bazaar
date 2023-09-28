import { Grid, Paper, Typography } from "@mui/material";
import OrdersTable from "./ordersTable";
import { Order } from "../../lib/api/orders";
import SupplierMenu from "./supplierMenu";
import DashboardLayout from "../layouts/dashboardLayout";

const Dashboard = ({ orders }: { orders: Order[] }) => {
  return (
    <DashboardLayout menu={<SupplierMenu />}>
      <Paper elevation={3}>
        <OrdersTable orders={orders} />
      </Paper>
    </DashboardLayout>
  );
};

export default Dashboard;
