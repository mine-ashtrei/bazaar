import { AppBar, Box, Container, Toolbar } from "@mui/material";
import LogoHeader from "./logoHeader";
import React from "react";
import CategoriesHeader from "./categoriesHeader";
import { useSession } from "next-auth/react";
import { useCategories } from "../categories/categoriesContext";
import SignUpButton from "../buttons/signUpButton";
import SignInButton from "../buttons/signInButton";
import UserIcon from "./userIcon";
import SearchBar from "./searchBar";
import SignOutButton from "../buttons/signOutButton";

const Header = () => {
  const { data: session, status } = useSession();
  const { categories } = useCategories();

  const authenticated = status === "authenticated";

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            gap: 2,
          }}
        >
          <LogoHeader />
          <SearchBar />
          {/* TODO: Add for small displays*/}
          {!authenticated && (
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "flex-end",
                gap: 2,
                alignItems: "center",
                display: "flex",
                // display: { xs: "none", md: "flex" },
              }}
            >
              <SignInButton />
              <SignUpButton />
            </Box>
          )}

          {authenticated && (
            <>
              {" "}
              <UserIcon /> <SignOutButton />
            </>
          )}
        </Toolbar>
      </Container>
      <CategoriesHeader categories={categories} />
    </AppBar>
  );
};
export default Header;
