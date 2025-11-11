import React from "react";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import { notFound } from "next/navigation";
import TitleAnimation from "@/components/ui/TitleAnimation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import OptimizedVideo from "@/components/ui/OptimizedVideo";
import ProcessSection from "@/components/services/ProcessSection";
import WhatWeDo from "@/components/services/WhatWeDoSection";
import FeaturesSection from "@/components/services/FeaturesSection";
import CaseStudiesSection from "@/components/services/CaseStudiesSection";
import TechnologiesSection from "@/components/services/TechnologiesSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  const siteUrl = "https://www.forgenestservices.com.np";
  const canonical = `${siteUrl}/services/${service.slug}`;

  return {
    title: service.title,
    description: service.excerpt,
    alternates: { canonical },
    openGraph: {
      title: service.title,
      description: service.excerpt,
      url: canonical,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.excerpt,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-background text-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Home", url: "/" },
              { label: "Services", url: "/our-services" },
              {
                label: service.title,
                url: `/services/${service.slug}`,
                current: true,
              },
            ]}
          />

          {/* Header */}
          <div className="mt-8 md:mt-12">
            <TitleAnimation
              as="h1"
              className="text-3xl md:text-5xl lg:text-7xl font-oswald font-normal text-foreground tracking-tighter leading-tight mb-6"
            >
              {service.title}
            </TitleAnimation>
            <div className="w-20 h-1 bg-foreground mb-8" />
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl">
              {service.description}
            </p>
          </div>

          {/* Featured Media */}
          {service.mediaType === "video" && (
            <div className="mt-12 md:mt-16">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-foreground/5">
                <OptimizedVideo
                  src={service.mediaUrl}
                  poster={`/images/poster-${service.id}.jpg`}
                  className="w-full h-full object-cover"
                  alt={service.title}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent pointer-events-none" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      {service.detailedFeatures && service.detailedFeatures.length > 0 && (
        <FeaturesSection features={service.detailedFeatures} />
      )}

      {/* What We Do Section */}
      <WhatWeDo whatWeDo={service.whatWeDo} />

      {/* Process Section */}
      <ProcessSection steps={service.process} />

      {/* Case Studies Section */}
      {service.caseStudies && service.caseStudies.length > 0 && (
        <CaseStudiesSection caseStudies={service.caseStudies} />
      )}

      {/* Technologies Section */}
      {service.technologies && service.technologies.length > 0 && (
        <TechnologiesSection technologies={service.technologies} />
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-foreground to-foreground/90 text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-oswald font-normal tracking-tighter leading-tight mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-base md:text-lg text-background/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you achieve your goals with{" "}
            {service.title.toLowerCase()}.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-oswald text-sm uppercase hover:opacity-90 transition-opacity duration-300 group"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 md:py-32 bg-background text-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TitleAnimation
            as="h2"
            className="text-3xl md:text-5xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight mb-4"
          >
            Explore Other Services
          </TitleAnimation>
          <div className="w-20 h-1 bg-foreground mb-12 md:mb-16" />

          <div className="grid md:grid-cols-2 gap-8">
            {/* You can import services from data/services.ts and filter out current service */}
            <div className="p-8 rounded-2xl border border-foreground/10 hover:border-foreground/30 transition-colors duration-300">
              <h3 className="text-xl md:text-2xl font-oswald font-normal text-foreground mb-3 tracking-tight">
                Browse All Services
              </h3>
              <p className="text-foreground/70 text-sm md:text-base leading-relaxed mb-6">
                Explore our complete range of digital solutions and services.
              </p>
              <Link
                href="/our-services"
                className="inline-flex items-center gap-2 text-foreground hover:gap-3 transition-all duration-300 font-medium group"
              >
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
