// Serves out/ the way andrian-kars.com proxies GitHub Pages: under /solidaro, pages without
// the .html extension, and 404.html with a 404 status for anything missing.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const base = "/solidaro";
const root = join(import.meta.dirname, "..", "out");
const port = Number(process.argv[2] ?? 3000);
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".xml": "application/xml; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".webp": "image/webp", ".ico": "image/x-icon", ".woff2": "font/woff2", ".txt": "text/plain; charset=utf-8" };

async function file(path) {
  try { return await readFile(join(root, normalize(path))); } catch { return null; }
}

createServer(async (request, response) => {
  const { pathname } = new URL(request.url ?? "/", "http://localhost");
  let body = null;
  let path = "/404.html";
  if (pathname === base || pathname.startsWith(`${base}/`)) {
    const relative = decodeURIComponent(pathname.slice(base.length)) || "/";
    path = relative === "/" ? "/index.html" : extname(relative) ? relative : `${relative}.html`;
    body = await file(path);
  }
  if (!body) { path = "/404.html"; body = await file(path); response.statusCode = 404; }
  response.setHeader("Content-Type", types[extname(path)] ?? "application/octet-stream");
  response.end(body);
}).listen(port, () => console.log(`Serving out/ at http://localhost:${port}${base}`));
