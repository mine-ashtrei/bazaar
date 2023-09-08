import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";

const font = Noto_Sans_Arabic({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Ashtrei",
  description: "One stop shop for Egypt retailers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>
    <html dir="rtl" className="ligth">
      <body className={font.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
