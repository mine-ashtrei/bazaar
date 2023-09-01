import { Grid } from "@mui/material";
import Categories from "./categories";
import LogoHeader from "./logo-header";
import SearchBar from "./search-bar";
import LanguageChangeButton from "./language-change-button";
import SignUpButton from "./sign-up-button";
import SignInButton from "./sign-in-button";
import React from "react";
import { useTheme } from "@mui/material/styles";

export default function Header() {
  // const theme = useTheme();
  return (
    <Grid container spacing={2}>
      {/* First row: Logo, SearchBar, Actions */}
      <Grid
        // sx={{ backgroundColor: theme.palette.secondary }}
        container
        item
        spacing={2}
        alignItems="center"
        justifyContent="space-evenly"
      >
        {/* Logo */}
        <Grid item>
          <LogoHeader />
        </Grid>

        {/* SearchBar */}
        <Grid item xs={5}>
          <SearchBar />
        </Grid>

        {/* Spacer to center SignIn button */}
        {/* <Grid item xs={2}></Grid> */}

        {/* Actions */}
        <Grid item>
          <LanguageChangeButton />
        </Grid>
        <Grid item>
          <SignInButton />
        </Grid>
        <Grid item>
          <SignUpButton signupVariant="md" />
        </Grid>
      </Grid>

      {/* Second row: Categories */}
      <Grid item xs={12}>
        <Categories />
      </Grid>
    </Grid>
  );
}
