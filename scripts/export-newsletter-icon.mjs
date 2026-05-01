/**
 * Rasterize src/app/icon.svg → public/clearfeed-newsletter-512.png
 * for newsletter hosts that reject SVG or URL import.
 * Run: node scripts/export-newsletter-icon.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const svgPath = path.join(root, "src", "app", "icon.svg");
const outPath = path.join(root, "public", "clearfeed-newsletter-512.png");

const svg = fs.readFileSync(svgPath);
await sharp(svg).resize(512, 512).png().toFile(outPath);
console.log("Wrote", outPath);
