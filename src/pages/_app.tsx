import { CustomHead } from "@/components";
import { Layout } from "@/components/layouts/Layout";
import "@/styles/index.scss";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import "./style.scss";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <CustomHead />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

// This default export is required
export default appWithTranslation(App);
