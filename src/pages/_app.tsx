import "@/styles/index.scss";
import type { AppProps } from "next/app";
import { Layout } from "@/components/layouts/Layout";
import "./style.scss";

// This default export is required
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
