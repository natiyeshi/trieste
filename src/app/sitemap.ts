// src/app/sitemap.ts

import { MetadataRoute } from "next";

export default async function generateSitemap(): Promise<MetadataRoute.Sitemap> {
  const URL = "https://trieste-engineering.com";
  const now = new Date();
  return [
    {
      url: `${URL}/`,
      lastModified: now,
    },
    {
      url: `${URL}/about`,
      lastModified: now,
    },
    {
      url: `${URL}/services`,
      lastModified: now,
    },
    {
      url: `${URL}/contact`,
      lastModified: now,
    },
    {
      url: `${URL}/projects`,
      lastModified: now,
    },
  ];
}
