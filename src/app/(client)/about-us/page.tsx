import React from "react";
import type { Metadata } from "next";
import {
  AboutUsHero,
  AboutUsStory,
  AboutUsTeam,
  AboutUsValues,
} from "@/components/about";
import FAQ from "@/components/home/FAQ";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/constants/seo";
import { aboutFAQs } from "@/lib/constants/faqs";

export const metadata: Metadata = {
  title: "About Us | Forgenest Services",
  description:
    "Learn about Forgenest Services - Our journey, mission, values, and expert team dedicated to delivering exceptional IT solutions and digital transformation in Nepal.",
  keywords: [
    "about Forgenest Services",
    "IT company story",
    "digital transformation",
    "software development team",
    "company values",
    "mission statement",
    "Kathmandu",
    "Nepal IT solutions",
  ],
  authors: [{ name: "Forgenest Services Team" }],
  creator: "Forgenest Services Pvt. Ltd.",
  publisher: "Forgenest Services Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.forgenestservices.com.np/about-us",
    siteName: "Forgenest Services",
    title: "About Forgenest Services",
    description:
      "Discover our mission, values, and the team behind Forgenest Services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Forgenest Services - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Forgenest Services",
    description:
      "Learn about our mission, values, and team dedicated to digital transformation.",
    images: ["/twitter-image.jpg"],
    creator: "@forgenestservices",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.forgenestservices.com.np/about-us",
  },
};

export default function AboutUsPage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema(aboutFAQs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.forgenestservices.com.np" },
    { name: "About Us", url: "https://www.forgenestservices.com.np/about-us" },
  ]);
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <main className="bg-background text-foreground font-oswald max-w-screen-4xl mx-auto space-y-6">
        <Breadcrumb
          items={[
            { label: "Home", url: "/" },
            { label: "About Us", url: "/about-us", current: true },
          ]}
        />
        <AboutUsHero />
        <AboutUsStory />
        {/* <AboutUsTeam /> */}
        <AboutUsValues />
        <FAQ
          items={aboutFAQs}
          title="Frequently Asked Questions"
          description="Common questions about our company and how we work"
        />
      </main>
    </>
  );
}
