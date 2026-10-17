import { asset, content, locales, pageUrl, site, type Locale } from "@/content";
import Head from "next/head";

const socialLocales: Record<Locale, string> = { en: "en_US", uk: "uk_UA", de: "de_DE", ja: "ja_JP" };
export function Seo({ locale, title, description, path = "/", noindex = false }: {
  locale: Locale; title: string; description: string; path?: string; noindex?: boolean;
}) {
  const canonical = pageUrl(locale, path);
  return <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#f7f8fa" />
    <meta name="robots" content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"} />
    {!noindex && <link rel="canonical" href={canonical} />}
    {!noindex && locales.map((language) => <link key={`alternate-${language}`} rel="alternate" hrefLang={language} href={pageUrl(language, path)} />)}
    {!noindex && <link rel="alternate" hrefLang="x-default" href={pageUrl("en", path)} />}
    <link rel="icon" href={asset("/favicon.svg")} type="image/svg+xml" />
    <link rel="apple-touch-icon" href={asset("/apple-touch-icon.png")} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Solidaro" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:locale" content={socialLocales[locale]} />
    {locales.filter((language) => language !== locale).map((language) => <meta key={`og-locale-${language}`} property="og:locale:alternate" content={socialLocales[language]} />)}
    <meta property="og:image" content={`${site.url}/social.png`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content={content[locale].title} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`${site.url}/social.png`} />
    {path === "/" && !noindex && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@graph": [
        { "@type": "Organization", "@id": `${site.url}/#organization`, name: "Solidaro", url: site.url, logo: `${site.url}/apple-touch-icon.png`, email: site.email, foundingDate: "2023", description: content[locale].description, founder: { "@type": "Person", name: site.founder, url: site.portfolio } },
        { "@type": "WebSite", "@id": `${site.url}/#website`, name: "Solidaro", url: site.url, inLanguage: locales, publisher: { "@id": `${site.url}/#organization` } },
      ],
    }).replace(/</g, "\\u003c") }} />}
  </Head>;
}