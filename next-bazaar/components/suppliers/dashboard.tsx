import { Grid, Paper, Typography } from "@mui/material";
import OrdersTable from "./ordersTable";
import { Order } from "../../lib/api/orders";
import SupplierMenu from "./supplierMenu";

const Dashboard = ({ orders }: { orders: Order[] }) => {
  return (
    <Grid container spacing={3}>
      {/* Table Section */}
      <Grid item xs={9}>
        <Paper elevation={3}>
          <OrdersTable orders={orders} />
        </Paper>
      </Grid>

      {/* Right Side Section */}
      <Grid item xs={3}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <SupplierMenu />
          {/* Statistic Frames will go here */}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
