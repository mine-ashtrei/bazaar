import { AppBar, Box, Toolbar } from "@mui/material";
import LogoHeader from "./logoHeader";

export default function MinimalHeader() {
  return (
    <AppBar>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <LogoHeader />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
