import { Seo } from "@/components/Seo";
import { content, getLocale, type Locale } from "@/content";
import type { GetStaticPropsContext } from "next";

export default function Privacy({ locale }: { locale: Locale }) {
  const text = content[locale].privacy;
  return <><Seo locale={locale} title={text.title} description={text.intro} path="/privacy" /><article className="prose-page wrap"><p className="eyebrow">Solidaro / {content[locale].footer.privacy}</p><h1>{text.heading}</h1><p className="prose-intro">{text.intro}</p>{text.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}</article></>;
}
export function getStaticProps({ locale }: GetStaticPropsContext) { return { props: { locale: getLocale(locale) } }; }