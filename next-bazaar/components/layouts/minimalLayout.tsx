import MinimalFooter from "../footer/minimalFooter";
import MinimalHeader from "../header/minimalHeader";

export default function MinimalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MinimalHeader />
      <main>{children}</main>
      <MinimalFooter />
    </>
  );
}
