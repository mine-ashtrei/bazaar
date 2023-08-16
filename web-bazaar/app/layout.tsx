import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "./theme-registry";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
