import { site } from "@/content";
import type { GetServerSideProps } from "next";

export default function Robots() { return null; }

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=3600");
  res.end(`User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
  return { props: {} };
};