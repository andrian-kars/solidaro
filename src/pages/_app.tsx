import { SiteLayout } from "@/components/SiteLayout";
import { getLocale, isLocale, type Locale } from "@/content";
import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/noto-sans-jp";
import "@/styles/site.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useSyncExternalStore } from "react";

const subscribe = () => () => {};

function localeFromAddress(pathname: string): Locale {
  const segment = pathname.slice((process.env.NEXT_PUBLIC_BASE_PATH ?? "").length).split("/")[1];
  return isLocale(segment) ? segment : "en";
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // The prerendered 404 page is English; in the browser it follows the language in the address.
  const address = useSyncExternalStore(subscribe, () => window.location.pathname, () => "");
  const locale = router.pathname === "/404" ? localeFromAddress(address) : getLocale(pageProps.locale);
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);
  return <SiteLayout locale={locale}><Component {...pageProps} locale={locale} /></SiteLayout>;
}
