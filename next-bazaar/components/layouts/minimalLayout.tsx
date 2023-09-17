import { Box } from "@mui/material";
import MinimalFooter from "../footer/minimalFooter";
import MinimalHeader from "../header/minimalHeader";

export default function MinimalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <MinimalHeader />
      <Box flexGrow={1}>
        <main>{children}</main>
      </Box>
      <MinimalFooter />
    </Box>
  );
}
