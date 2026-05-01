/**
 * Rasterize public/clearfeed-wordmark.svg → public/clearfeed-wordmark-email.png
 * for email headers (Buttondown, etc.). Run: npm run export:wordmark
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const svgPath = path.join(root, "public", "clearfeed-wordmark.svg");
const outPath = path.join(root, "public", "clearfeed-wordmark-email.png");

const svg = fs.readFileSync(svgPath);
await sharp(svg).png().toFile(outPath);
console.log("Wrote", outPath);
