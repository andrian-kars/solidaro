import { content, languageNames, locales, site, type Locale } from "@/content";
import { ArrowUp, ArrowUpRight, ChevronDown, Globe2, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, type ReactNode } from "react";

export function SiteLayout({ children, locale }: { children: ReactNode; locale: Locale }) {
  const { nav, footer, hero } = content[locale];
  const router = useRouter();
  const languageMenu = useRef<HTMLDetailsElement>(null);
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  const navigation = [
    { id: "service", label: nav.services }, { id: "work", label: nav.work },
    { id: "team", label: nav.about }, { id: "questions", label: nav.faq },
  ];
  useEffect(() => {
    function dismiss(event: PointerEvent | KeyboardEvent) {
      for (const ref of [languageMenu, mobileMenu]) {
        const menu = ref.current;
        if (!menu?.open) continue;
        if (event instanceof KeyboardEvent) {
          if (event.key === "Escape") { menu.open = false; menu.querySelector("summary")?.focus(); }
        } else if (!menu.contains(event.target as Node)) { menu.open = false; }
      }
    }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", dismiss);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", dismiss);
    };
  }, []);
  function closeMenus() {
    if (languageMenu.current) languageMenu.current.open = false;
    if (mobileMenu.current) mobileMenu.current.open = false;
  }
  return <>
    <a className="skip-link" href="#main">{nav.skip}</a>
    <header className="site-header" id="top"><div className="header-inner wrap">
      <Link href="/" locale={locale} className="wordmark" aria-label={nav.home} onClick={closeMenus}>solidaro<span aria-hidden="true">*</span></Link>
      <nav className="desktop-nav" aria-label={nav.home}>{navigation.map(({ id, label }) => <Link key={id} href={`/#${id}`} locale={locale}>{label}</Link>)}</nav>
      <div className="header-actions">
        <details className="language-menu" ref={languageMenu}>
          <summary aria-label={`${nav.language}: ${locale.toUpperCase()} (${languageNames[locale]})`} title={nav.language}><Globe2 size={17} aria-hidden="true" /><span>{locale.toUpperCase()}</span><ChevronDown size={13} aria-hidden="true" /></summary>
          <nav className="language-options" aria-label={nav.language}>{locales.map((language) => <Link key={language} href={router.asPath} locale={language} lang={language} hrefLang={language} aria-current={locale === language ? "true" : undefined} onClick={() => {
            document.cookie = `NEXT_LOCALE=${language}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
            closeMenus();
          }}><span>{language.toUpperCase()}</span> {languageNames[language]}</Link>)}</nav>
        </details>
        <Link href="/schedule" locale={locale} className="button button-dark header-contact">{nav.contact}<ArrowUpRight size={17} aria-hidden="true" /></Link>
        <details className="mobile-menu" ref={mobileMenu}>
          <summary title={nav.open} aria-label={nav.open}><Menu className="menu-open-icon" size={22} aria-hidden="true" /><X className="menu-close-icon" size={22} aria-hidden="true" /></summary>
          <nav aria-label={nav.open}>{navigation.map(({ id, label }) => <Link key={id} href={`/#${id}`} locale={locale} onClick={closeMenus}>{label}<ArrowUpRight size={20} aria-hidden="true" /></Link>)}<Link href="/schedule" locale={locale} onClick={closeMenus}>{nav.contact}<ArrowUpRight size={20} aria-hidden="true" /></Link></nav>
        </details>
      </div>
    </div></header>
    <main id="main" tabIndex={-1}>{children}</main>
    <footer className="site-footer">
      <div className="wrap footer-main"><div><Link href="/" locale={locale} className="wordmark" aria-label={nav.home}>solidaro<span aria-hidden="true">*</span></Link><p>{footer.text}</p></div><a className="footer-email" href={`mailto:${site.email}`}>{site.email}<ArrowUpRight size={20} aria-hidden="true" /></a><a className="icon-link" href="#top" aria-label={footer.top} title={footer.top}><ArrowUp size={20} aria-hidden="true" /></a></div>
      <div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Solidaro. {footer.rights}</span><Link href="/privacy" locale={locale}>{footer.privacy}</Link><span>{hero.location}</span></div>
    </footer>
  </>;
}