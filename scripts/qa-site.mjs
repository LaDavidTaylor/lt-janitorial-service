import fs from "node:fs";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "..");
const distRoot = path.join(projectRoot, "dist");

function walk(directory, extension) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(fullPath, extension);
    return !extension || entry.name.endsWith(extension) ? [fullPath] : [];
  });
}

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replace(/&#(\d+);/g, (_, number) => String.fromCodePoint(Number(number)));
}

function visibleMain(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? html;
  return decodeHtml(
    main
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function routeExists(urlPath) {
  const clean = decodeURIComponent(urlPath.split(/[?#]/)[0]);
  if (!clean || clean === "/") return fs.existsSync(path.join(distRoot, "index.html"));
  const relative = clean.replace(/^\//, "");
  const candidates = [
    path.join(distRoot, relative),
    path.join(distRoot, relative, "index.html"),
    path.join(distRoot, `${relative}.html`),
  ];
  return candidates.some((candidate) => fs.existsSync(candidate));
}

function shingles(text, width = 5) {
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
  const result = new Set();
  for (let index = 0; index <= words.length - width; index += 1) {
    result.add(words.slice(index, index + width).join(" "));
  }
  return result;
}

function jaccard(left, right) {
  let intersection = 0;
  for (const value of left) if (right.has(value)) intersection += 1;
  const union = left.size + right.size - intersection;
  return union ? intersection / union : 0;
}

const htmlFiles = walk(distRoot, ".html");
const errors = [];
const notices = [];
const titles = new Map();
const descriptions = new Map();
const canonicals = new Map();
let internalLinks = 0;
let imageReferences = 0;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const relative = path.relative(distRoot, file);
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  if (h1Count !== 1) errors.push(`${relative}: expected one h1, found ${h1Count}`);

  const title = decodeHtml(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "");
  const description = decodeHtml(html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1]?.trim() ?? "");
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i)?.[1]?.trim() ?? "";

  if (!title) errors.push(`${relative}: missing title`);
  if (!description) errors.push(`${relative}: missing description`);
  if (!canonical) errors.push(`${relative}: missing canonical`);

  for (const [map, value, label] of [[titles, title, "title"], [descriptions, description, "description"], [canonicals, canonical, "canonical"]]) {
    if (!value) continue;
    if (map.has(value)) errors.push(`${relative}: duplicate ${label} also used by ${map.get(value)}`);
    else map.set(value, relative);
  }

  for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/gi)) {
    const href = match[1];
    if (href.startsWith("tel:")) {
      if (href !== "tel:+14695977230") errors.push(`${relative}: unexpected phone link ${href}`);
      continue;
    }
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    internalLinks += 1;
    if (!routeExists(href)) errors.push(`${relative}: broken internal link ${href}`);
  }

  for (const match of html.matchAll(/<img\b([^>]*)>/gi)) {
    imageReferences += 1;
    const attributes = match[1];
    const source = attributes.match(/\bsrc="([^"]+)"/i)?.[1];
    const altMatch = attributes.match(/\balt="([^"]*)"/i);
    if (!altMatch || !altMatch[1].trim()) errors.push(`${relative}: image missing useful alt text ${source ?? "unknown source"}`);
    if (source?.startsWith("/") && !routeExists(source)) errors.push(`${relative}: broken image ${source}`);
  }
}

const locationFiles = htmlFiles.filter((file) => file.includes(`${path.sep}service-areas${path.sep}`) && file.endsWith(`${path.sep}index.html`));
const locationTexts = locationFiles.map((file) => ({ file: path.relative(distRoot, file), shingles: shingles(visibleMain(fs.readFileSync(file, "utf8"))) }));
let strongestPair = { score: 0, left: "", right: "" };
for (let leftIndex = 0; leftIndex < locationTexts.length; leftIndex += 1) {
  for (let rightIndex = leftIndex + 1; rightIndex < locationTexts.length; rightIndex += 1) {
    const left = locationTexts[leftIndex];
    const right = locationTexts[rightIndex];
    const score = jaccard(left.shingles, right.shingles);
    if (score > strongestPair.score) strongestPair = { score, left: left.file, right: right.file };
    if (score > 0.78) errors.push(`Location copy similarity ${score.toFixed(3)} between ${left.file} and ${right.file}`);
  }
}

const caddoHtml = path.join(distRoot, "service-areas", "caddo-mills", "index.html");
if (!fs.existsSync(caddoHtml) || !fs.readFileSync(caddoHtml, "utf8").includes("noindex,nofollow")) {
  errors.push("Caddo Mills preview route must contain noindex,nofollow");
}

const sitemapFiles = walk(distRoot, ".xml");
for (const sitemap of sitemapFiles) {
  if (fs.readFileSync(sitemap, "utf8").includes("service-areas/caddo-mills")) {
    errors.push(`${path.relative(distRoot, sitemap)} includes the noindex Caddo Mills route`);
  }
}

notices.push(`${htmlFiles.length} HTML pages checked`);
notices.push(`${internalLinks} internal links checked`);
notices.push(`${imageReferences} image references checked`);
notices.push(`${titles.size} unique titles and ${descriptions.size} unique descriptions`);
notices.push(`Highest location five word shingle similarity: ${strongestPair.score.toFixed(3)} between ${strongestPair.left} and ${strongestPair.right}`);

for (const notice of notices) console.log(`PASS ${notice}`);
if (errors.length) {
  for (const error of errors) console.error(`FAIL ${error}`);
  process.exitCode = 1;
} else {
  console.log("PASS Site QA completed without failures");
}
