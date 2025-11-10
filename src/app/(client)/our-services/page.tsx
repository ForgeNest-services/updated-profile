import type { Metadata } from "next";
import {
  generateLocalBusinessSchema,
  generateServiceSchema,
} from "@/lib/constants/seo";
import { servicesData } from "@/lib/constants/services";
import ServicesPageClient from "@/components/pages/ServicesPageClient";

export const metadata: Metadata = {
  title: "Our Services | Forgenest Services",
  description:
    "Explore our comprehensive IT services: Custom Web Applications, Modern Website Design & Development, and Digital Transformation solutions tailored to your business needs.",
  keywords: [
    "IT services Nepal",
    "web development services",
    "custom software development",
    "web applications",
    "digital transformation services",
    "mobile app development",
    "SaaS development",
    "technology consulting",
    "software solutions",
  ],
  authors: [{ name: "Forgenest Services Team" }],
  creator: "Forgenest Services Pvt. Ltd.",
  publisher: "Forgenest Services Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.forgenestservices.com.np/our-services",
    siteName: "Forgenest Services",
    title: "Our Services | Forgenest Services",
    description:
      "Discover our full range of IT and digital transformation services designed for your business success.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Forgenest Services - Our Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Forgenest Services",
    description:
      "Custom software, web development, and digital transformation services.",
    images: ["/twitter-image.jpg"],
    creator: "@forgenestservices",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.forgenestservices.com.np/our-services",
  },
};

export default function ServicesPage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const serviceSchemas = servicesData.map((service) =>
    generateServiceSchema({
      name: service.title,
      description: service.description,
      category: "IT Services",
    })
  );

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      {serviceSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <ServicesPageClient />
    </>
  );
}
