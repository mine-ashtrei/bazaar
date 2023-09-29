import Stack from "@mui/material/Stack";
import MinimalFooter from "../footer/minimalFooter";
import MinimalHeader from "../header/minimalHeader";

export default function MinimalLayout({
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
      <MinimalHeader />
      {/* 
        We put justify-center in order to center all the contents that do not take full width
        If we want to align vertically we can modify the align-self attribute
      */}
      <main className="flex-1 p-5 flex justify-center">{children}</main>
      <MinimalFooter />
    </Stack>
  );
}
