import { Html, Head, Main, NextScript } from "next/document";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ashtrei",
  description: "One stop shop for Egypt retailers",
};

export default function Document() {
  return (
    <Html dir="rtl" className="ligth">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
