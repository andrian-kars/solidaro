import { locales, localizedPath, site } from "@/content";
import type { GetServerSideProps } from "next";

export default function Sitemap() { return null; }

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const pages = ["/", "/schedule", "/privacy"];
  const urls = pages.flatMap((path) => locales.map((locale) => {
    const alternates = locales.map((language) => `<xhtml:link rel="alternate" hreflang="${language}" href="${site.url}${localizedPath(language, path)}" />`).join("");
    return `<url><loc>${site.url}${localizedPath(locale, path)}</loc>${alternates}<xhtml:link rel="alternate" hreflang="x-default" href="${site.url}${localizedPath("en", path)}" /></url>`;
  }));
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=3600");
  res.end(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join("")}</urlset>`);
  return { props: {} };
};