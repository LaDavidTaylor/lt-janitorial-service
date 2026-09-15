const siteUrl = process.env.PUBLIC_SITE_URL ?? "https://www.ltjanitorial.us";
const indexNowKey = "1e8413bda8f58c4939f63923c4306a76";
const keyLocation = new URL(`/${indexNowKey}.txt`, siteUrl).href;
const sitemapUrl = new URL("/sitemap-0.xml", siteUrl).href;

const sitemapResponse = await fetch(sitemapUrl);

if (!sitemapResponse.ok) {
  throw new Error(`Unable to read ${sitemapUrl}: HTTP ${sitemapResponse.status}`);
}

const sitemapXml = await sitemapResponse.text();
const urlList = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

if (urlList.length === 0) {
  throw new Error(`No URLs were found in ${sitemapUrl}`);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(siteUrl).host,
    key: indexNowKey,
    keyLocation,
    urlList,
  }),
});

if (!response.ok) {
  const body = await response.text();
  throw new Error(`IndexNow rejected the submission: HTTP ${response.status} ${body}`.trim());
}

console.log(`Submitted ${urlList.length} URLs to IndexNow for ${new URL(siteUrl).host}.`);
