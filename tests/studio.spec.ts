import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { content, languageNames, localeStorageKey, locales, localizedPath, pageUrl, site } from "../src/content";

// The export is served under /solidaro, as andrian-kars.com proxies it.
const base = "/solidaro";
const at = (locale: (typeof locales)[number], path = "/") => {
  const localized = localizedPath(locale, path);
  return `${base}${localized === "/" ? "" : localized}`;
};

for (const locale of locales) {
  const text = content[locale];
  test(`${locale}: homepage, SEO, assets and accessibility`, async ({ page }, testInfo) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(at(locale));
    expect(response?.status()).toBe(200);
    await expect(page.locator("html")).toHaveAttribute("lang", locale);
    await expect(page).toHaveTitle(text.title);
    await expect(page.locator("h1")).toHaveText("Solidaro*");
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", text.description);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", pageUrl(locale));
    await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(5);
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute("content", text.description);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", `${site.url}/social.png`);
    const schema = JSON.parse(await page.locator('script[type="application/ld+json"]').innerText());
    expect(schema["@graph"][0].name).toBe("Solidaro");
    for (const image of await page.locator("main img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toBeVisible();
      await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
    }
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator(".services-grid article")).toHaveCount(3);
    await expect(page.locator(".projects article")).toHaveCount(3);
    await expect(page.locator(".projects h3 a")).toHaveText(["Antelu", "Sharkies", "andrian-kars.com"]);
    await expect(page.locator(".projects h3 a").last()).toHaveAttribute("href", site.portfolio);
    await expect(page.locator(".faq-list details")).toHaveCount(6);
    await expect(page.locator(".footer-email")).toHaveAttribute("href", `mailto:${site.email}`);
    const audit = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(audit.violations).toEqual([]);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.screenshot({ path: testInfo.outputPath(`${locale}-home.png`), fullPage: true });
    expect(errors).toEqual([]);
  });

  test(`${locale}: booking, privacy, and not found`, async ({ page }) => {
    await page.goto(at(locale));
    await page.getByRole("link", { name: text.hero.cta, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`${at(locale, "/schedule")}$`));
    await expect(page).toHaveTitle(text.schedule.title);
    await expect(page.locator("h1")).toHaveText(text.schedule.heading);
    await expect(page.getByRole("link", { name: text.schedule.book, exact: true })).toHaveAttribute("href", site.booking);
    await expect(page.getByRole("link", { name: text.schedule.email, exact: true })).toHaveAttribute("href", `mailto:${site.email}`);
    await expect(page.locator("iframe")).toHaveCount(0);
    expect((await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze()).violations).toEqual([]);
    await page.getByRole("link", { name: text.footer.privacy, exact: true }).click();
    await expect(page.locator("h1")).toHaveText(text.privacy.heading);
    await expect(page.locator(".prose-page")).toContainText(site.email);
    const missing = await page.goto(at(locale, "/this-page-does-not-exist"));
    expect(missing?.status()).toBe(404);
    await expect(page.locator("html")).toHaveAttribute("lang", locale);
    await expect(page.locator("h1")).toHaveText(text.notFound.heading);
    await expect(page.getByRole("link", { name: text.notFound.cta, exact: true })).toHaveAttribute("href", at(locale));
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex, follow");
  });

  test(`${locale}: responsive geometry`, async ({ page }, testInfo) => {
    for (const viewport of [{ width: 320, height: 720 }, { width: 768, height: 1024 }, { width: 1024, height: 768 }, { width: 1920, height: 1080 }]) {
      await page.setViewportSize(viewport);
      await page.goto(at(locale));
      await page.evaluate(() => document.fonts.ready);
      const geometry = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        stripTop: document.querySelector(".studio-strip")!.getBoundingClientRect().top,
        clipped: Array.from(document.querySelectorAll("h1, h2, h3, .button, summary, .footer-email")).filter((element) => element.clientWidth > 0 && element.scrollWidth > element.clientWidth + 1).map((element) => element.textContent),
      }));
      expect(geometry.overflow).toBe(false);
      expect(geometry.clipped).toEqual([]);
      expect(geometry.stripTop).toBeLessThan(viewport.height);
      if (viewport.width === 320) await page.screenshot({ path: testInfo.outputPath(`${locale}-small.png`) });
      await page.goto(at(locale, "/schedule"));
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
  });
}

test("language changes preserve route, query, hash and preference", async ({ page }) => {
  await page.goto(`${base}/schedule?from=home#main`);
  for (const locale of ["uk", "de", "ja", "en"] as const) {
    await page.locator(".language-menu > summary").click();
    await page.locator(".language-options").getByRole("link", { name: `${locale.toUpperCase()} ${languageNames[locale]}` }).click();
    await expect(page.locator("html")).toHaveAttribute("lang", locale);
    await expect(page.locator("h1")).toHaveText(content[locale].schedule.heading);
    expect(new URL(page.url()).pathname).toBe(at(locale, "/schedule"));
    expect(new URL(page.url()).search).toBe("?from=home");
    expect(new URL(page.url()).hash).toBe("#main");
    expect(await page.evaluate((key) => localStorage.getItem(key), localeStorageKey)).toBe(locale);
  }
});

test("the home page follows the browser language until a language is chosen", async ({ browser }) => {
  const context = await browser.newContext({ locale: "uk-UA" });
  const page = await context.newPage();
  await page.goto(base);
  await expect(page).toHaveURL(new RegExp(`${at("uk")}$`));
  await expect(page.locator("html")).toHaveAttribute("lang", "uk");
  await page.locator(".language-menu > summary").click();
  await page.locator(".language-options").getByRole("link", { name: `EN ${languageNames.en}` }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.goto(base);
  await expect(page.locator("#services-title")).toHaveText(content.en.services.title);
  await expect(page).toHaveURL(new RegExp(`${base}$`));
  await context.close();
});

test("native FAQs, keyboard dismissal and anchor offset", async ({ page, isMobile }) => {
  await page.goto(base);
  await page.locator(".language-menu > summary").click();
  await page.keyboard.press("Escape");
  await expect(page.locator(".language-menu")).not.toHaveAttribute("open");
  await expect(page.locator(".language-menu > summary")).toBeFocused();
  if (isMobile) await page.locator(".mobile-menu > summary").click();
  const nav = page.locator(isMobile ? ".mobile-menu nav" : ".desktop-nav");
  await nav.getByRole("link", { name: content.en.nav.faq, exact: true }).click();
  await expect.poll(() => page.locator("#questions").evaluate((element) => Math.round(element.getBoundingClientRect().top - document.querySelector("header")!.getBoundingClientRect().height) || 0)).toBe(0);
  const questions = page.locator(".faq-list details");
  await questions.nth(0).locator("summary").click();
  await expect(questions.nth(0)).toHaveAttribute("open");
  await questions.nth(1).locator("summary").click();
  await expect(questions.nth(1)).toHaveAttribute("open");
  await expect(questions.nth(0)).not.toHaveAttribute("open");
});

test("prerendered localization works without JavaScript", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, locale: "en-US" });
  const page = await context.newPage();
  for (const locale of locales) {
    await page.goto(`${baseURL}${at(locale)}`);
    await expect(page.locator("html")).toHaveAttribute("lang", locale);
    await expect(page.locator("h1")).toHaveText("Solidaro*");
    await expect(page.locator("#services-title")).toHaveText(content[locale].services.title);
    await page.locator(".faq-list summary").first().click();
    await expect(page.locator(".faq-list details").first().locator("p")).toBeVisible();
    await page.getByRole("link", { name: content[locale].hero.cta, exact: true }).click();
    await expect(page.locator("h1")).toHaveText(content[locale].schedule.heading);
  }
  await context.close();
});

test("sitemap and static assets", async ({ request, page }) => {
  const sitemap = await request.get(`${base}/sitemap.xml`);
  expect(sitemap.status()).toBe(200);
  expect(sitemap.headers()["content-type"]).toContain("application/xml");
  const xml = await sitemap.text();
  const parsed = await page.evaluate((source) => {
    const document = new DOMParser().parseFromString(source, "application/xml");
    return { errors: document.querySelectorAll("parsererror").length, urls: Array.from(document.getElementsByTagName("loc"), (loc) => loc.textContent), alternates: document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "link").length };
  }, xml);
  expect(parsed.errors).toBe(0);
  expect(parsed.urls).toHaveLength(12);
  expect(parsed.urls).toContain(site.url);
  expect(parsed.urls).toContain(`${site.url}/uk/schedule`);
  expect(parsed.alternates).toBe(60);
  for (const path of ["/social.png", "/favicon.svg", "/apple-touch-icon.png", "/images/work/personal.webp"]) expect((await request.get(`${base}${path}`)).status()).toBe(200);
});
