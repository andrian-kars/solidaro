import { Seo } from "@/components/Seo";
import { content, getLocale, type Locale } from "@/content";
import { ArrowLeft } from "lucide-react";
import type { GetStaticPropsContext } from "next";
import Link from "next/link";

export default function NotFound({ locale }: { locale: Locale }) {
  const text = content[locale].notFound;
  return <><Seo locale={locale} title={text.title} description={text.text} noindex /><section className="error-page wrap"><p className="error-code">404<span aria-hidden="true">*</span></p><h1>{text.heading}</h1><p>{text.text}</p><Link className="button button-dark" href="/" locale={locale}><ArrowLeft size={18} aria-hidden="true" />{text.cta}</Link></section></>;
}
export function getStaticProps({ locale }: GetStaticPropsContext) { return { props: { locale: getLocale(locale) } }; }