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
          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuOutlined />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
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

          {authenticated && <UserIcon />}
        </Toolbar>
      </Container>
      <CategoriesHeader categories={categories} />
    </AppBar>
  );
};
export default Header;
