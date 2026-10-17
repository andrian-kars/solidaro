import { getLocale, locales } from "@/content";
import type { GetStaticPropsContext } from "next";

// English lives at the root; every other language gets a /<locale> copy of each page.
export function getStaticPaths() {
  return { paths: locales.filter((locale) => locale !== "en").map((locale) => ({ params: { locale } })), fallback: false };
}
export function getStaticProps({ params }: GetStaticPropsContext) {
  return { props: { locale: getLocale(params?.locale as string | undefined) } };
}
