export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function generateMetadata(config: SEOConfig) {
  const {
    title,
    description,
    keywords,
    image = "/og-image.jpg",
    url,
    type = "website",
    publishedTime,
    author,
    section,
    tags,
  } = config;

  return {
    title: title.includes("Forgenest")
      ? title
      : `${title} | Forgenest Services`,
    description,
    keywords,
    authors: author
      ? [{ name: author }]
      : [{ name: "Forgenest Services Team" }],
    creator: "Forgenest Services Pvt. Ltd.",
    publisher: "Forgenest Services Pvt. Ltd.",
    openGraph: {
      title,
      description,
      type,
      url,
      siteName: "Forgenest Services",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
      ...(tags && { tags }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@forgenestservices",
    },
    alternates: {
      canonical: url,
    },
  };
}

// Generate JSON-LD structured data
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Forgenest Services Pvt. Ltd.",
    url: "https://www.forgenestservices.com.np",
    logo: "https://res.cloudinary.com/dpnhdq9eg/image/upload/v1756144318/Primary_RGB_kwha6h.png",
    description:
      "Leading IT solutions provider in Nepal specializing in custom software development, web applications, and digital transformation.",
    foundingDate: "2021",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+977-1-XXXXXXX",
      contactType: "customer service",
      availableLanguage: ["English", "Nepali"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati Province",
      addressCountry: "Nepal",
    },
    sameAs: [
      "https://facebook.com/forgenestservices",
      "https://twitter.com/forgenestservices",
      "https://linkedin.com/company/forgenest-services",
      "https://github.com/forgenest-services",
    ],
    services: [
      {
        "@type": "Service",
        name: "Custom Software Development",
        description: "Tailored software solutions for businesses of all sizes.",
        provider: {
          "@type": "Organization",
          name: "Forgenest Services Pvt. Ltd.",
        },
      },
      {
        "@type": "Service",
        name: "Web Application Development",
        description:
          "Modern, responsive web applications using latest technologies.",
        provider: {
          "@type": "Organization",
          name: "Forgenest Services Pvt. Ltd.",
        },
      },
      {
        "@type": "Service",
        name: "Mobile App Development",
        description: "Native and cross-platform mobile applications.",
        provider: {
          "@type": "Organization",
          name: "Forgenest Services Pvt. Ltd.",
        },
      },
      {
        "@type": "Service",
        name: "Digital Transformation Consulting",
        description: "Strategic guidance for business digital transformation.",
        provider: {
          "@type": "Organization",
          name: "Forgenest Services Pvt. Ltd.",
        },
      },
    ],
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  price?: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Forgenest Services Pvt. Ltd.",
      url: "https://www.forgenestservices.com.np",
      logo: "https://res.cloudinary.com/dpnhdq9eg/image/upload/v1756144318/Primary_RGB_kwha6h.png",
    },
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    serviceType: service.category,
    ...(service.price && {
      offers: {
        "@type": "Offer",
        price: service.price,
        priceCurrency: "NPR",
      },
    }),
  };
}

export function generateBlogPostSchema(post: {
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  image: string;
  url: string;
  category: string;
  tags: string[];
  readTime: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Forgenest Services Pvt. Ltd.",
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/dpnhdq9eg/image/upload/v1756144318/Primary_RGB_kwha6h.png",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    wordCount: post.content.split(" ").length,
    timeRequired: `PT${post.readTime}M`,
    inLanguage: "en-US",
  };
}

// Website schema for homepage
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Forgenest Services",
    alternateName: "Forgenest Services Pvt. Ltd.",
    url: "https://www.forgenestservices.com.np",
    description: "Leading IT solutions provider in Nepal",
    publisher: {
      "@type": "Organization",
      name: "Forgenest Services Pvt. Ltd.",
    },
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://www.forgenestservices.com.np/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

// Breadcrumb schema
export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  };
}

// FAQ schema for service pages
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Local business schema
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.forgenestservices.com.np/#organization",
    name: "Forgenest Services Pvt. Ltd.",
    image:
      "https://res.cloudinary.com/dpnhdq9eg/image/upload/v1756144318/Primary_RGB_kwha6h.png",
    url: "https://www.forgenestservices.com.np",
    telephone: "+977-1-XXXXXXX",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati Province",
      postalCode: "44600",
      addressCountry: "Nepal",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.7172,
      longitude: 85.324,
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
    serviceArea: {
      "@type": "Country",
      name: "Nepal",
    },
  };
}

// Performance monitoring utilities
export function generatePerformanceConfig() {
  return {
    // Core Web Vitals thresholds
    webVitals: {
      fcp: 1.8, // First Contentful Paint (seconds)
      lcp: 2.5, // Largest Contentful Paint (seconds)
      fid: 100, // First Input Delay (milliseconds)
      cls: 0.1, // Cumulative Layout Shift
      ttfb: 0.8, // Time to First Byte (seconds)
    },
    // Image optimization settings
    images: {
      formats: ["webp", "avif"],
      quality: 85,
      sizes: {
        mobile: 640,
        tablet: 1024,
        desktop: 1920,
      },
    },
    // Critical resources
    criticalResources: ["/fonts/raleway.woff2", "/images/logo.svg"],
  };
}

// SEO-friendly URL generator
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim()
    .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens
}

// Meta tags validation
export function validateSEOTags(metadata: any) {
  const errors: string[] = [];

  // Title validation
  if (!metadata.title) {
    errors.push("Title is required");
  } else if (metadata.title.length > 60) {
    errors.push("Title should be under 60 characters");
  }

  // Description validation
  if (!metadata.description) {
    errors.push("Description is required");
  } else if (metadata.description.length > 160) {
    errors.push("Description should be under 160 characters");
  } else if (metadata.description.length < 120) {
    errors.push("Description should be at least 120 characters for better SEO");
  }

  // Keywords validation
  if (!metadata.keywords || metadata.keywords.length === 0) {
    errors.push("Keywords are required");
  } else if (metadata.keywords.length > 10) {
    errors.push("Too many keywords (max 10)");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
