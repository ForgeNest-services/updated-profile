import type { Metadata } from "next";
import {
  About,
  Hero,
  OurProcess,
  Newsletter,
  Services,
  FeaturedBlogs,
  FAQ,
} from "@/components/home";
import {
  generateLocalBusinessSchema,
  generateWebsiteSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/constants/seo";
import { homeFAQs } from "@/lib/constants/faqs";

export const revalidate = 3600;

export const dynamic = "force-static";

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
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.forgenestservices.com.np" },
  ]);
  const faqSchema = generateFAQSchema(homeFAQs);
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <main className="bg-background text-foreground font-oswald space-y-20 md:space-y-32">
        <Hero />
        <About />
        <Services />
        <OurProcess />
        <FeaturedBlogs />
        <FAQ
          items={homeFAQs}
          title="Frequently Asked Questions"
          description="Everything you need to know about Forgenest Services"
        />
        <Newsletter />
      </main>
    </>
  );
}
