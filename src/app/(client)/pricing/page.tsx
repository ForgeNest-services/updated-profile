import React from "react";
import { Metadata } from "next";
import TitleAnimation from "@/components/ui/TitleAnimation";
import TextAnimation from "@/components/ui/TextAnimation";
import PricingCards from "@/components/pricing/PricingCards";
import { generateMetadata as generateSEOMetadata } from "@/lib/constants/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Pricing & Packages - Transparent Digital Solutions",
  description:
    "Explore our affordable pricing packages for web development, mobile apps, photography, and digital solutions in Nepal. Foundation (NPR 40K+), Momentum (NPR 120K+), and Peak (NPR 300K+) packages available.",
  keywords: [
    "pricing",
    "packages",
    "web development cost Nepal",
    "digital solutions pricing",
    "affordable web development",
    "Forgenest pricing",
    "IT services packages Nepal",
  ],
  url: "https://www.forgenestservices.com.np/pricing",
  type: "website",
});

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    name: "Forgenest Services Pricing",
    description: "Digital solutions packages for businesses in Nepal",
    priceCurrency: "NPR",
    offers: [
      {
        "@type": "Offer",
        name: "Foundation Package",
        description: "Essential digital presence to launch your brand",
        price: "40000",
        priceCurrency: "NPR",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://www.forgenestservices.com.np/pricing",
      },
      {
        "@type": "Offer",
        name: "Momentum Package",
        description: "Complete digital solution for growing businesses",
        price: "120000",
        priceCurrency: "NPR",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://www.forgenestservices.com.np/pricing",
      },
      {
        "@type": "Offer",
        name: "Peak Package",
        description: "Comprehensive digital transformation package",
        price: "300000",
        priceCurrency: "NPR",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://www.forgenestservices.com.np/pricing",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-foreground text-white py-16 md:py-24">
          <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center flex-col mb-8">
              <TitleAnimation
                as="h1"
                className="text-2xl text-center md:text-4xl lg:text-6xl font-oswald font-normal text-white tracking-tighter leading-tight"
              >
                Simple, Transparent Pricing
              </TitleAnimation>
              <div className="mt-2 lg:mt-6 w-20 lg:w-40 h-1 bg-white" />
            </div>

            <TextAnimation
              className="max-w-3xl mx-auto text-center text-sm md:text-lg text-white/70 leading-relaxed"
              animationType="fadeUp"
              delay={0.2}
            >
              Choose the package that fits your needs. All prices are starting
              rates and can be customized based on your specific requirements.
            </TextAnimation>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 md:py-24">
          <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <PricingCards />
          </div>
        </section>
      </main>
    </>
  );
}
