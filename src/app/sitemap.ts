import { MetadataRoute } from "next";
import { labItems } from "./lab/items";

export default function sitemap(): MetadataRoute.Sitemap {
  const _labItems = labItems.map((item) => {
    const name = item.path;
    if (name === null) return null;
    return {
      url: `https://kebabhan.vercel.app/${item.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    };
  });
  return [
    {
      url: "https://kebabhan.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://kebabhan.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://kebabhan.vercel.app/lab",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://kebabhan.vercel.app/works",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
