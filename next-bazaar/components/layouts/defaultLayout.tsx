import { Box } from "@mui/material";
import Footer from "../footer";
import Header from "../header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box
        sx={{
          flexGrow: "1",
          display: "flex", // Add this line
          alignItems: "center", // Center content vertically
          justifyContent: "center", // Center content horizontally
        }}
      >
        <main>{children}</main>
      </Box>
      <Footer />
    </Box>
  );
}
