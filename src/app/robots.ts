import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const host = "https://www.forgenestservices.com.np";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dashboard/", "/_next/", "/static/", "/login"],
      },
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
    ],
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
