import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_Arabic } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import { CategoryProvider } from "../components/categories/categoriesContext";
import DefaultLayout from "../components/layouts/defaultLayout";

import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import themeOptions from "../lib/theme";
import { ThemeProvider } from "@mui/material/styles";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const font = Noto_Sans_Arabic({ subsets: ["arabic"] });

export default function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).layout || DefaultLayout;

  return (
    <ThemeProvider theme={themeOptions}>
      <CacheProvider value={cacheRtl}>
        <CategoryProvider>
          <SessionProvider session={pageProps.session}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SessionProvider>
        </CategoryProvider>
      </CacheProvider>
    </ThemeProvider>
  );
}
