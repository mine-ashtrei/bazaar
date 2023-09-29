import { Grid } from "@mui/material";
import React from "react";

export default function DashboardLayout({
  menu,
  children,
}: {
  menu: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Grid container spacing={5} sx={{ padding: 5 }}>
      {/* <Grid item xs={12}>
            Header
        </Grid> */}
      <Grid item xs={12} md={3}>
        {/* Menu */}
        {menu}
      </Grid>
      <Grid item xs={12} md={9}>
        {children}
      </Grid>
    </Grid>
  );
}
