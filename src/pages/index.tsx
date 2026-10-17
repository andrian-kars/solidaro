import { Seo } from "@/components/Seo";
import { asset, content, localizedPath, site, type Locale } from "@/content";
import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Plus, RefreshCw, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const serviceIcons = [Code2, RefreshCw, Users];
const projects = [
  { name: "Antelu", url: "https://antelu.es", image: asset("/images/work/antelu.webp"), className: "project-yellow", stack: "Next.js / TypeScript" },
  { name: "Sharkies", url: "https://andrian-kars.com/sharkies", image: asset("/images/work/sharkies-v2.webp"), className: "project-blue", stack: "React / TMDB API" },
  { name: "andrian-kars.com", url: site.portfolio, image: asset("/images/work/personal.webp"), className: "project-green", stack: "Next.js / TypeScript" },
];

export default function Home({ locale }: { locale: Locale }) {
  const text = content[locale];
  return <>
    <Seo locale={locale} title={text.title} description={text.description} />
    <section className="hero" id="landing" aria-labelledby="hero-title">
      <Image src={asset("/images/studio-work-v4.webp")} alt="" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-copy wrap"><p className="eyebrow"><span className="status-dot" />{text.hero.eyebrow}</p><h1 id="hero-title">Solidaro<span>*</span></h1><p className="hero-lead">{text.hero.lead}</p><p className="hero-description">{text.hero.text}</p><div className="hero-actions"><Link className="button button-coral" href={localizedPath(locale, "/schedule")}>{text.hero.cta}<ArrowUpRight size={19} aria-hidden="true" /></Link><a className="text-link" href="#work">{text.hero.work}<ArrowDown size={18} aria-hidden="true" /></a></div></div>
    </section>
    <div className="studio-strip"><div className="wrap"><span>{text.hero.caption}</span><span><span className="ukraine-mark" aria-hidden="true" />{text.hero.location}</span></div></div>
    <section className="section wrap" id="service" aria-labelledby="services-title">
      <p className="eyebrow section-label">{text.services.label}</p><div className="section-heading"><h2 id="services-title">{text.services.title}</h2><p>{text.services.intro}</p></div>
      <div className="services-grid">{text.services.items.map((service, index) => {
        const Icon = serviceIcons[index];
        return <article className="service" key={service.title}><div className="service-top"><Icon size={26} strokeWidth={1.5} aria-hidden="true" /><span>0{index + 1}</span></div><h3>{service.title}</h3><p>{service.text}</p><ul className="tag-list">{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>;
      })}</div>
    </section>
    <section className="work-section section" id="work" aria-labelledby="work-title"><div className="wrap">
      <p className="eyebrow section-label">{text.work.label}</p><div className="section-heading"><h2 id="work-title">{text.work.title}</h2><p>{text.work.intro}</p></div>
      <div className="projects">{projects.map((project, index) => <article className="project" key={project.name}>
        <a className={`project-image ${project.className}`} href={project.url} target="_blank" rel="noreferrer" aria-label={`${text.work.visit}: ${project.name}`}><Image src={project.image} alt={text.work.items[index].alt} width={1440} height={1000} sizes="(max-width: 700px) 100vw, 50vw" /><span className="project-visit"><ArrowUpRight size={24} aria-hidden="true" /></span></a>
        <div className="project-meta"><p className="eyebrow">{text.work.items[index].kind}</p><span>{project.stack}</span></div><h3><a href={project.url} target="_blank" rel="noreferrer">{project.name}<ArrowUpRight size={24} aria-hidden="true" /></a></h3><p className="project-description">{text.work.items[index].text}</p>
      </article>)}</div>
    </div></section>
    <section className="section wrap about-section" id="team" aria-labelledby="about-title">
      <div className="about-copy"><p className="eyebrow section-label">{text.about.label}</p><h2 id="about-title">{text.about.title}</h2><p>{text.about.text}</p><p>{text.about.second}</p><a className="text-link" href={site.portfolio} target="_blank" rel="noreferrer">{text.about.portfolio}<ArrowUpRight size={19} aria-hidden="true" /></a></div>
      <figure className="founder"><div className="founder-image"><Image src={asset("/images/founder.webp")} alt={text.about.image} width={800} height={1165} sizes="(max-width: 700px) 90vw, 400px" /><span className="founder-asterisk" aria-hidden="true">*</span></div><figcaption><strong>{site.founder}</strong><span>{text.about.founder}</span></figcaption></figure><p className="about-note">{text.about.note}</p>
    </section>
    <section className="process-section section" id="info" aria-labelledby="process-title"><div className="wrap"><p className="eyebrow section-label">{text.process.label}</p><h2 id="process-title">{text.process.title}</h2><ol className="process-list">{text.process.steps.map((step, index) => <li key={step.title}><div className="process-number"><span>0{index + 1}</span>{index < 3 && <ArrowRight size={20} aria-hidden="true" />}</div><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div></section>
    <section className="section wrap faq-section" id="questions" aria-labelledby="faq-title"><div className="faq-heading"><p className="eyebrow section-label">{text.faq.label}</p><h2 id="faq-title">{text.faq.title}</h2><p>{text.faq.contact}</p><a className="text-link" href={`mailto:${site.email}`}>{site.email}<ArrowUpRight size={18} aria-hidden="true" /></a></div><div className="faq-list">{text.faq.items.map((item) => <details key={item.question} name="faq"><summary>{item.question}<Plus size={20} aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div></section>
    <section className="contact-section" aria-labelledby="contact-title"><div className="wrap"><p className="eyebrow">{text.contact.eyebrow}</p><h2 id="contact-title">{text.contact.title}</h2><p>{text.contact.text}</p><div className="contact-actions"><Link href={localizedPath(locale, "/schedule")} className="button button-dark">{text.contact.cta}<ArrowUpRight size={19} aria-hidden="true" /></Link><a href={`mailto:${site.email}`} className="text-link">{text.contact.email}<ArrowUpRight size={18} aria-hidden="true" /></a></div></div></section>
  </>;
}
export function getStaticProps() { return { props: { locale: "en" } }; }
