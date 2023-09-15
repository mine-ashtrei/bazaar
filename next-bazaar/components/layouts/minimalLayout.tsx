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
      <main className="flex-1">{children}</main>
      <MinimalFooter />
    </>
  );
}
