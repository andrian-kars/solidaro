// Writes out/sitemap.xml after `next build`; static export cannot serve generated routes.
import { writeFileSync } from "node:fs";
import { locales, pageUrl } from "../src/content.ts";

const pages = ["/", "/schedule", "/privacy"];
const urls = pages.flatMap((path) => locales.map((locale) => {
  const alternates = locales.map((language) => `<xhtml:link rel="alternate" hreflang="${language}" href="${pageUrl(language, path)}" />`).join("");
  return `<url><loc>${pageUrl(locale, path)}</loc>${alternates}<xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl("en", path)}" /></url>`;
}));
writeFileSync("out/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join("")}</urlset>\n`);
