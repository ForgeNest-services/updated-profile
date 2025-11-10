import type { Metadata } from "next";
import {
  About,
  Hero,
  OurProcess,
  Newsletter,
  Services,
  FeaturedBlogs,
} from "@/components/home";
import {
  generateLocalBusinessSchema,
  generateWebsiteSchema,
} from "@/lib/constants/seo";

// ISR - Revalidate every 1 hour
export const revalidate = 3600;

// Optimize dynamic rendering
export const dynamic = "force-static";

// SEO Metadata
export const metadata: Metadata = {
  title: "Forgenest Services - Leading IT Solutions Provider in Nepal",
  description:
    "Transform your business with Forgenest Services. Custom software development, web applications, mobile solutions, and digital transformation services in Nepal.",
  keywords: [
    "Forgenest Services",
    "IT company Nepal",
    "software development",
    "web development",
    "mobile app development",
    "digital transformation",
    "custom software",
    "web applications",
    "IT solutions",
    "technology consulting",
  ],
  authors: [{ name: "Forgenest Services Team" }],
  creator: "Forgenest Services Pvt. Ltd.",
  publisher: "Forgenest Services Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.forgenestservices.com.np",
    siteName: "Forgenest Services",
    title: "Forgenest Services - Leading IT Solutions Provider in Nepal",
    description:
      "Transform your business with cutting-edge IT solutions and digital transformation services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Forgenest Services - IT Solutions Provider",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forgenest Services - IT Solutions Provider",
    description:
      "Custom software development, web apps, mobile solutions & digital transformation services.",
    images: ["/twitter-image.jpg"],
    creator: "@forgenestservices",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.forgenestservices.com.np",
  },
};

export default function Home() {
  const websiteSchema = generateWebsiteSchema();
  const localBusinessSchema = generateLocalBusinessSchema();
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <main className="bg-background text-foreground font-oswald space-y-20 md:space-y-32">
        <Hero />
        <About />
        <Services />
        <OurProcess />
        <FeaturedBlogs />
        <Newsletter />
      </main>
    </>
  );
}
