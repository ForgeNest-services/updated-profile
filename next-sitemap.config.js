/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.forgenestservices.com.np",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "monthly",
  priority: 0.8,
  exclude: ["/api/*", "/dashboard/*", "/_next/*", "/static/*", "/login"],
  generateIndexSitemap: false,
  additionalPaths: async (config) => {
    const staticPaths = [
      await config.transform(config, "/", {
        priority: 1.0,
        changefreq: "daily",
        lastmod: new Date().toISOString(),
      }),
      await config.transform(config, "/blogs", {
        priority: 0.9,
        changefreq: "weekly",
        lastmod: new Date().toISOString(),
      }),
      await config.transform(config, "/our-services", {
        priority: 0.8,
        changefreq: "monthly",
        lastmod: new Date().toISOString(),
      }),
      await config.transform(config, "/about-us", {
        priority: 0.7,
        changefreq: "monthly",
        lastmod: new Date().toISOString(),
      }),
      await config.transform(config, "/contact-us", {
        priority: 0.6,
        changefreq: "yearly",
        lastmod: new Date().toISOString(),
      }),
    ];

    return staticPaths;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dashboard/", "/_next/", "/static/", "/login"],
      },
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "Google-Extended",
        disallow: "/",
      },
    ],
  },
  trailingSlash: false,
  outDir: "./public",
  sitemapBaseFileName: "sitemap",
  transform: async (config, path) => {
    // Custom priority and changefreq for different page types
    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    if (path === "/blogs") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    if (path.startsWith("/blogs/")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    if (path === "/our-services") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    if (path === "/about-us" || path === "/contact-us") {
      return {
        loc: path,
        changefreq: "yearly",
        priority: 0.6,
        lastmod: new Date().toISOString(),
      };
    }

    // Default return for other pages
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
