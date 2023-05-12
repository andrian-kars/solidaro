import { Layout } from "@/components/layouts/Layout";
import "@/styles/index.scss";
import { Analytics } from "@vercel/analytics/react";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import "./style.scss";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <Analytics />
  </>
);

// This default export is required
export default appWithTranslation(App);
