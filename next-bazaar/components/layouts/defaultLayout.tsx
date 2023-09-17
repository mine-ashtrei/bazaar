import { Box } from "@mui/material";
import Footer from "../footer";
import Header from "../header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box flexGrow={1}>
        <main>{children}</main>
      </Box>
      <Footer />
    </Box>
  );
}
