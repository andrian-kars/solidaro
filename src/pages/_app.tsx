import { SiteLayout } from "@/components/SiteLayout";
import { getLocale } from "@/content";
import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/noto-sans-jp";
import "@/styles/site.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locale = getLocale(pageProps.locale || router.locale);
  return <SiteLayout locale={locale}><Component {...pageProps} locale={locale} /></SiteLayout>;
}
