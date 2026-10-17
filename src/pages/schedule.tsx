import { Seo } from "@/components/Seo";
import { asset, content, localizedPath, site, type Locale } from "@/content";
import { ArrowLeft, ArrowUpRight, Check, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Schedule({ locale }: { locale: Locale }) {
  const text = content[locale];
  const copy = text.schedule;
  return <><Seo locale={locale} title={copy.title} description={copy.description} path="/schedule" /><section className="schedule-page wrap">
    <Link href={localizedPath(locale, "/")} className="text-link back-link"><ArrowLeft size={18} aria-hidden="true" />{copy.back}</Link>
    <div className="schedule-grid"><div className="schedule-intro"><p className="eyebrow">{copy.label}</p><h1>{copy.heading}</h1><p>{copy.text}</p><div className="schedule-founder"><Image src={asset("/images/founder.webp")} alt={text.about.image} width={72} height={72} /><div><strong>{site.founder}</strong><span>{text.about.founder}</span></div></div></div>
      <div className="booking-panel"><span className="booking-star" aria-hidden="true">*</span><h2>{copy.details}</h2><ul>{copy.points.map((point) => <li key={point}><Check size={19} aria-hidden="true" />{point}</li>)}</ul><a href={site.booking} target="_blank" rel="noreferrer" className="button button-dark" aria-describedby="booking-provider" title={copy.external}>{copy.book}<ArrowUpRight size={19} aria-hidden="true" /></a><p className="booking-note">{copy.note}</p><div className="booking-alternative"><p>{copy.alternative}</p><a className="text-link" href={`mailto:${site.email}`}><Mail size={18} aria-hidden="true" />{copy.email}</a></div><p className="provider-note" id="booking-provider">{copy.provider}</p></div>
    </div></section></>;
}
export function getStaticProps() { return { props: { locale: "en" } }; }
