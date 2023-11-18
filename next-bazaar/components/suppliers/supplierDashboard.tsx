import { Grid, Paper, Typography } from "@mui/material";
import OrdersTable from "./ordersTable";
import { Order } from "../../lib/api/orders";
import SupplierMenu from "./supplierMenu";
import DashboardLayout from "../layouts/supplierDashboardLayout";

const Dashboard = ({ orders }: { orders: Order[] }) => {
  return (
    //menu={<SupplierMenu />}
    <DashboardLayout>
      <Paper elevation={3}>
        <OrdersTable orders={orders} />
      </Paper>
    </DashboardLayout>
  );
};

export default Dashboard;
