import { Stack } from "@mui/material";
import Footer from "../footer";
import Header from "../header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack
      direction={"column"}
      sx={{
        minHeight: "100vh",
      }}
    >
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </Stack>
  );
}
