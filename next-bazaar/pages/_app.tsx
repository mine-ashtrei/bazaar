import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_Arabic } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import { CategoryProvider } from "../components/categories/categoriesContext";
import DefaultLayout from "../components/layouts/defaultLayout";

const font = Noto_Sans_Arabic({ subsets: ["arabic"] });

export default function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).layout || DefaultLayout;

  return (
    <div className={`${font.className} flex flex-col min-h-screen`}>
      <CategoryProvider>
        <SessionProvider session={pageProps.session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </CategoryProvider>
    </div>
  );
}
