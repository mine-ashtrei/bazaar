import Box from "@mui/material/Box";
import Actions from "./actions";
import Categories from "./categories";
import LogoHeader from "./logo-header";
import SearchBar from "./search-bar";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { Toolbar } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <Stack spacing={2}>
      <Stack
        sx={{
          backgroundColor: "#E4D6A7",
          padding: 2,
        }}
        direction="row"
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <LogoHeader></LogoHeader>
        <SearchBar></SearchBar>
        <Actions></Actions>
      </Stack>
      <Categories></Categories>
    </Stack>
  );
}
