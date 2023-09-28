import {
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Order } from "../../lib/api/orders";

export default function OrdersTable({ orders }: { orders: Order[] }) {
  return (
    <Stack>
      <Stack
        sx={{ padding: 2 }}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Typography variant="h5">Recent Activity</Typography>
        <Stack
          direction={"row"}
          sx={{ maxWidth: "200px" }}
          spacing={2}
          justifyContent={"center"}
        >
          {/* TODO add icon buttons here */}
          <Typography variant="body2">Sort</Typography>
          <Typography variant="body2">Filter</Typography>
        </Stack>
      </Stack>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Retailer</TableCell>
              <TableCell>Payment</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell>{order.orderId}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.retailerId}</TableCell>
                <TableCell>{order.payment}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}