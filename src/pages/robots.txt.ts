import type { APIRoute } from "astro";

const body = `User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

Sitemap: https://www.ltjanitorial.us/sitemap-index.xml
`;

export const GET: APIRoute = () => new Response(body, {
  headers: { "Content-Type": "text/plain; charset=utf-8" },
});
