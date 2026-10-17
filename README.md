# Solidaro

[![Checks and deploy](https://github.com/andrian-kars/solidaro/actions/workflows/ci.yml/badge.svg)](https://github.com/andrian-kars/solidaro/actions/workflows/ci.yml)

Website of Solidaro, a small founder-led web development studio, in English, Ukrainian, German and Japanese.

**Live:** [andrian-kars.com/solidaro](https://andrian-kars.com/solidaro)

## Stack

- Next.js 16 (Pages Router) exported as static HTML, React 19, strict TypeScript
- Plain CSS with self-hosted variable fonts (Manrope, Space Grotesk, Noto Sans JP)
- Copy for all four languages in `src/content.ts`

## Hosting

Every push to `master` that passes the checks deploys `out/` to GitHub Pages at
`andrian-kars.github.io/solidaro`. andrian-kars.com proxies `/solidaro` to that build (see the rewrites in
the `personal` repository), so the site is built for the `/solidaro` base path and its canonical URLs point to
andrian-kars.com.

Static hosting has no server, so:

- English is at the root and other languages at `/uk`, `/de` and `/ja`, each prerendered.
- The English home page sends first-time visitors to their browser's language in the browser; a language
  picked in the menu is saved in local storage and wins afterwards.
- `404.html` is shared by all languages and switches to the language in the address after loading.
- `sitemap.xml` is written after the build by `scripts/sitemap.mts`.

## Development

Requires Node.js 24 (see `.nvmrc`) and Yarn Classic.

```bash
yarn install --frozen-lockfile
yarn dev            # http://localhost:3000/solidaro
yarn build          # static export in out/
yarn start          # serves out/ like the production proxy, on http://localhost:3000/solidaro
yarn lint
yarn typecheck
yarn test:e2e       # Playwright against the export (run yarn build first)
```
