import type { Metadata } from "next";
import { ContactManager } from "@/components/contact";
import React from "react";
import { generateLocalBusinessSchema } from "@/lib/constants/seo";

export const metadata: Metadata = {
  title: "Contact Us | Forgenest Services",
  description:
    "Get in touch with Forgenest Services. We're here to help with your software development, web applications, and digital transformation needs. Contact us today.",
  keywords: [
    "contact Forgenest Services",
    "IT support Nepal",
    "software development inquiry",
    "web development contact",
    "digital transformation consulting",
    "Kathmandu contact",
    "technology partner",
  ],
  authors: [{ name: "Forgenest Services Team" }],
  creator: "Forgenest Services Pvt. Ltd.",
  publisher: "Forgenest Services Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.forgenestservices.com.np/contact-us",
    siteName: "Forgenest Services",
    title: "Contact Forgenest Services",
    description:
      "Reach out to Forgenest Services for your IT and software development needs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Forgenest Services - Contact Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Forgenest Services",
    description: "Get in touch with us for your IT and development needs.",
    images: ["/twitter-image.jpg"],
    creator: "@forgenestservices",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.forgenestservices.com.np/contact-us",
  },
};

export default function ContactUsPage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <main className="bg-background text-foreground font-oswald max-w-screen-4xl mx-auto space-y-6">
        <ContactManager />
      </main>
    </>
  );
}
