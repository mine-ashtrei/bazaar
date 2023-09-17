import { Box } from "@mui/material";
import MinimalFooter from "../footer/minimalFooter";
import MinimalHeader from "../header/minimalHeader";

export default function MinimalLayout({
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
      <MinimalHeader />
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
      <MinimalFooter />
    </Box>
  );
}
