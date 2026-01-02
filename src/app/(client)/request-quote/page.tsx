import React from "react";
import { Metadata } from "next";
import TitleAnimation from "@/components/ui/TitleAnimation";
import TextAnimation from "@/components/ui/TextAnimation";
import QuoteForm from "@/components/quote/QuoteForm";
import { generateMetadata as generateSEOMetadata } from "@/lib/constants/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Request a Quote - Get Your Custom Project Estimate",
  description:
    "Request a free quote for your web development, mobile app, or digital project in Nepal. Get a detailed estimate from Forgenest Services within 1-2 business days. Fast, transparent, and tailored to your needs.",
  keywords: [
    "request quote",
    "get estimate",
    "project quote Nepal",
    "web development quote",
    "custom software quote",
    "free consultation",
    "project pricing",
  ],
  url: "https://www.forgenestservices.com.np/request-quote",
  type: "website",
});

export default function RequestQuotePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Request a Quote - Forgenest Services",
    description:
      "Request a custom quote for your digital project with Forgenest Services",
    url: "https://www.forgenestservices.com.np/request-quote",
    provider: {
      "@type": "Organization",
      name: "Forgenest Services Pvt. Ltd.",
      url: "https://www.forgenestservices.com.np",
    },
    potentialAction: {
      "@type": "CommunicateAction",
      name: "Request Quote",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.forgenestservices.com.np/request-quote",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
    },
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
                Request a Quote
              </TitleAnimation>
              <div className="mt-2 lg:mt-6 w-20 lg:w-40 h-1 bg-white" />
            </div>

            <TextAnimation
              className="max-w-3xl mx-auto text-center text-sm md:text-lg text-white/70 leading-relaxed"
              animationType="fadeUp"
              delay={0.2}
            >
              Tell us about your project and we'll send you a detailed quote
              within 1-2 business days. No obligations, completely free.
            </TextAnimation>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-16 md:py-24">
          <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <QuoteForm />
          </div>
        </section>
      </main>
    </>
  );
}
