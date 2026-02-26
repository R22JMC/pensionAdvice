import puppeteer from "puppeteer";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");

// Every public route to prerender
const routes = [
  "/",
  "/services/pension-transfers",
  "/services/directors-pensions",
  "/services/pension-reviews",
  "/services/uk-pension-transfers",
  "/services/early-retirement",
  "/services/redundancy-pensions",
  "/resources",
  "/about",
  "/contact",
  "/thank-you",
  "/privacy-statement",
  "/terms-of-business",
  "/pension-review-calculator",
  "/early-retirement-calculator",
  "/directors-pension-calculator",
  "/redundancy-calculator",
  "/pension-transfer-calculator",
  "/uk-pension-transfer-calculator",
];

// Simple static file server for the dist folder
function startServer(port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST, req.url === "/" ? "index.html" : req.url);
      if (!existsSync(filePath) || !filePath.includes(".")) {
        filePath = join(DIST, "index.html"); // SPA fallback
      }
      try {
        const content = readFileSync(filePath);
        const ext = filePath.split(".").pop();
        const mimeTypes = {
          html: "text/html",
          js: "application/javascript",
          css: "text/css",
          svg: "image/svg+xml",
          png: "image/png",
          jpg: "image/jpeg",
          webp: "image/webp",
          json: "application/json",
          woff: "font/woff",
          woff2: "font/woff2",
        };
        res.writeHead(200, {
          "Content-Type": mimeTypes[ext] || "application/octet-stream",
        });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });
    server.listen(port, () => resolve(server));
  });
}

async function prerender() {
  console.log(`Prerendering ${routes.length} routes...`);

  const PORT = 9222;
  const server = await startServer(PORT);

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
    ],
  });

  for (const route of routes) {
    const page = await browser.newPage();

    // Block heavy external requests that slow rendering
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const url = req.url();
      if (
        url.includes("googletagmanager") ||
        url.includes("google-analytics") ||
        url.includes("gtag") ||
        url.includes("reviews.io") ||
        url.includes("matterport") ||
        url.includes("youtube.com/embed")
      ) {
        req.abort();
      } else {
        req.continue();
      }
    });

    try {
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });

      // Wait for React Helmet to update <head> and content to render
      await page.waitForFunction(
        () => {
          const title = document.querySelector("title");
          const h1 = document.querySelector("h1");
          return title && title.textContent && h1;
        },
        { timeout: 10000 }
      ).catch(() => {});

      // Small extra buffer for any final async renders
      await new Promise((r) => setTimeout(r, 1000));

      const html = await page.content();
      await page.close();

      const outDir = route === "/" ? DIST : join(DIST, route);
      if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
      writeFileSync(join(outDir, "index.html"), html, "utf-8");
      console.log(`  ✓ ${route}`);
    } catch (err) {
      console.error(`  ✗ ${route}: ${err.message}`);
      await page.close();
    }
  }

  await browser.close();
  server.close();
  console.log(`\nDone! Prerendered ${routes.length} routes.`);
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
