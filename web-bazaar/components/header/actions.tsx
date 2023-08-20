import { Stack, Select, Button, Box, MenuItem, Link } from "@mui/material";
import React from "react";

export default function Actions() {
  return (
    // <Stack
    //   direction="row"
    //   spacing={2}
    //   justifyContent="space-around"
    //   alignItems="center"
    // >
    //   <Select sx={{ minWidth: "72px", maxHeight: "32px" }} value={"EN"}>
    //     <MenuItem value={"AR"}>AR</MenuItem>
    //     <MenuItem value={"EN"}>EN</MenuItem>
    //   </Select>
    //   <Link color="inherit" href="#">
    //     Sign in
    //   </Link>
    //   <Button
    //     disableElevation
    //     sx={{ minWidth: 0 }}
    //     variant="contained"
    //     size="small"
    //   >
    //     Sign up
    //   </Button>
    // </Stack>
    <React.Fragment>
      <Select
        sx={{ minWidth: "72px", maxHeight: "32px", textTransform: "none" }}
        value={"EN"}
      >
        <MenuItem value={"AR"}>AR</MenuItem>
        <MenuItem value={"EN"}>EN</MenuItem>
      </Select>
      <Link noWrap color="inherit" href="#">
        Sign in
      </Link>
      <Button
        disableElevation
        sx={{ minWidth: "72px", textTransform: "none" }}
        variant="contained"
      >
        Sign up
      </Button>
    </React.Fragment>
  );
}
