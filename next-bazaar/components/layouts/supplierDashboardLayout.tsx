import { Grid } from "@mui/material";
import React from "react";
import DefaultLayout from "./defaultLayout";
import SupplierMenu from "../suppliers/supplierMenu";
import SupplierHeader from "../header/supplier";

export default function SupplierDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DefaultLayout>
      <Grid container spacing={2} sx={{ padding: 5 }}>
        {/* <Grid item xs={12}>
            Header
        </Grid> */}
        <Grid sx={{ padding: 2 }} item xs={12}>
          <SupplierHeader />
        </Grid>
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
