import { Grid } from "@mui/material";
import React from "react";
import DefaultLayout from "./defaultLayout";
import SupplierMenu from "../suppliers/supplierMenu";

export default function SupplierDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DefaultLayout>
      <Grid container spacing={5} sx={{ padding: 5 }}>
        {/* <Grid item xs={12}>
            Header
        </Grid> */}
        <Grid item xs={12} md={3}>
          {/* Menu */}
          <SupplierMenu />
        </Grid>
        <Grid item xs={12} md={9}>
          {children}
        </Grid>
      </Grid>
    </DefaultLayout>
  );
}
