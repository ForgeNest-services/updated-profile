import React from "react";
import { Metadata } from "next";
import TitleAnimation from "@/components/ui/TitleAnimation";
import TextAnimation from "@/components/ui/TextAnimation";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { generateMetadata as generateSEOMetadata } from "@/lib/constants/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Our Portfolio - Successful Projects & Case Studies",
  description:
    "Explore Forgenest Services' portfolio of successful web development, e-commerce, management systems, and educational platforms built for clients in Nepal. View our work including IETC e-commerce, Bhattaguru booking system, and school management solutions.",
  keywords: [
    "portfolio",
    "case studies",
    "web development portfolio Nepal",
    "e-commerce projects",
    "school management system",
    "booking platform",
    "client success stories",
    "Forgenest projects",
  ],
  url: "https://www.forgenestservices.com.np/portfolio",
  type: "website",
});

export default function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Forgenest Services Portfolio",
    description:
      "Showcase of successful web development projects and digital solutions delivered by Forgenest Services",
    url: "https://www.forgenestservices.com.np/portfolio",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "CreativeWork",
          name: "IETC E-commerce Platform",
          description: "Complete e-commerce solution for home appliances",
          url: "https://ietc.com.np",
        },
        {
          "@type": "CreativeWork",
          name: "Bhattaguru Booking System",
          description: "Astrology consultation platform with booking system",
          url: "https://bhattaguru.com",
        },
        {
          "@type": "CreativeWork",
          name: "Mata Indrayani Management System",
          description: "Cooperative management and member portal",
          url: "https://mataindrayanisaccos.com.np",
        },
        {
          "@type": "CreativeWork",
          name: "School Management System",
          description:
            "Comprehensive educational institution management platform",
          url: "https://school-demo.forgenestservices.com.np",
        },
      ],
    },
    provider: {
      "@type": "Organization",
      name: "Forgenest Services Pvt. Ltd.",
      url: "https://www.forgenestservices.com.np",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background ">
        {/* Hero Section */}
        <section className="relative bg-foreground text-white py-12 md:py-16">
          <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center flex-col mb-8">
              <TitleAnimation
                as="h1"
                className="text-2xl text-center md:text-4xl lg:text-6xl font-oswald font-normal text-white tracking-tighter leading-tight"
              >
                Our Portfolio
              </TitleAnimation>
              <div className="mt-2 lg:mt-6 w-20 lg:w-40 h-1 bg-white" />
            </div>

            <TextAnimation
              className="max-w-3xl mx-auto text-center text-sm md:text-lg text-white/70 leading-relaxed"
              animationType="fadeUp"
              delay={0.2}
            >
              Discover our successful projects ranging from e-commerce platforms
              to management systems. Each project showcases our commitment to
              quality, innovation, and client satisfaction.
            </TextAnimation>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 md:py-24">
          <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <PortfolioGrid />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-foreground text-white py-16 max-w-6xl mx-auto rounded-4xl mb-10 ">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-2xl md:text-4xl font-oswald font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/70 mb-8 text-sm md:text-lg">
              Let's discuss how we can bring your vision to life with our
              expertise.
            </p>
            <a
              href="/request-quote"
              className="inline-flex items-center gap-2 bg-white text-foreground px-8 py-4 rounded-full font-oswald text-base uppercase hover:bg-white/90 transition-all duration-300"
            >
              Get Started
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
