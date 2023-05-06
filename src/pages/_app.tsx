import "@/styles/index.scss";
import type { AppProps } from "next/app";
import { Layout } from "@/components/layouts/Layout";
import "./style.scss";
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

// This default export is required
export default appWithTranslation(App);
