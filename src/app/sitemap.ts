import type { MetadataRoute } from "next";
import { listAllPublishedBlogSlugs } from "@/server/blog";

export const revalidate = 3600; // Re-generate sitemap every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.forgenestservices.com.np";

  // Core static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  // Dynamic blog routes
  const blogDocs = await listAllPublishedBlogSlugs();
  const blogRoutes: MetadataRoute.Sitemap = blogDocs.map(
    ({ slug, updatedAt }) => ({
      url: `${baseUrl}/blogs/${slug}`,
      lastModified: updatedAt || new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [...staticRoutes, ...blogRoutes];
}
