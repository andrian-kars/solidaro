import { getLocale } from "@/content";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class SiteDocument extends Document {
  render() {
    const locale = getLocale(this.props.__NEXT_DATA__.props?.pageProps?.locale);
    return <Html lang={locale} data-scroll-behavior="smooth"><Head /><body><Main /><NextScript /></body></Html>;
  }
}
