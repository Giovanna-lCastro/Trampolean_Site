import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://trampolean.net";

const routes = [
  "",
  "/sobre",
  "/produtos",
  "/solucoes",
  "/educacao",
  "/carreira",
  "/contato",
  "/privacidade",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
