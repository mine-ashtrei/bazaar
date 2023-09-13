import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_Arabic } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import Header from "../components/header";
import Footer from "../components/footer";
import { CategoryProvider } from "../components/categories/categoriesContext";

const font = Noto_Sans_Arabic({ subsets: ["arabic"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${font.className} flex flex-col min-h-screen`}>
      <CategoryProvider>
        <SessionProvider session={pageProps.session}>
          <Header />
          <main className="flex-1">
            <Component {...pageProps} />
          </main>
          <Footer />
        </SessionProvider>
      </CategoryProvider>
    </div>
  );
}
