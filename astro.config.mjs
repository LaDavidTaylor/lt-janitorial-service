import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ltjanitorial.vercel.app",
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/service-areas/caddo-mills"),
      serialize: (item) => {
        const url = new URL(item.url);
        if (url.pathname !== "/" && url.pathname.endsWith("/")) {
          url.pathname = url.pathname.slice(0, -1);
        }
        return { ...item, url: url.href };
      },
    }),
  ],
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
