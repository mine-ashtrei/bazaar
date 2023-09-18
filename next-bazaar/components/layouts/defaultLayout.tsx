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
      <main>{children}</main>
      <Footer />
    </Box>
  );
}
