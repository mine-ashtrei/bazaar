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
  useTheme,
} from "@mui/material";

import SortButton from "../common/buttons/sortButton";
import FilterButton from "../common/buttons/filterButton";
import { RetailerData } from "../../lib/api/retailers";

export default function RetailersTable({
  retailers,
}: {
  retailers: RetailerData[];
}) {
  const theme = useTheme();
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
          <SortButton />
          <FilterButton />
        </Stack>
      </Stack>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Retailer</TableCell>
              <TableCell>Account Number</TableCell>
              <TableCell>No. of Orders</TableCell>
              <TableCell>Total Spent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {retailers.map((retailer: RetailerData, index: number) => (
              <TableRow
                key={retailer.retailerId}
                sx={{
                  backgroundColor:
                    index % 2
                      ? theme.palette.grey[200]
                      : theme.palette.grey[50],
                }}
              >
                <TableCell>{retailer.name}</TableCell>
                <TableCell>{retailer.accountNumber}</TableCell>
                <TableCell>{retailer.orderCount}</TableCell>
                <TableCell>EGP {retailer.totalSpent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
