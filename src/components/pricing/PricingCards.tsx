"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Package {
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export default function PricingCards() {
  const packages: Package[] = [
    {
      name: "Foundation",
      tagline: "Perfect for Starting Out",
      price: "40,000",
      description: "Essential digital presence to launch your brand",
      features: [
        "1-2 core services of your choice",
        "Basic strategy consultation",
        "Responsive design",
        "3 weeks dedicated support",
        "Launch assistance",
        "Basic analytics setup",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Momentum",
      tagline: "Accelerate Your Growth",
      price: "120,000",
      description: "Complete digital solution for growing businesses",
      features: [
        "3-4 combined services",
        "Strategic planning & execution",
        "Custom design & development",
        "2 months support & updates",
        "Performance tracking & reports",
        "Priority response time",
        "Social media integration",
        "SEO optimization",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Peak",
      tagline: "Transform Your Business",
      price: "300,000",
      description: "Comprehensive digital transformation package",
      features: [
        "Full-service digital package",
        "Unlimited service combinations",
        "6 months partnership",
        "Dedicated project manager",
        "Advanced analytics & insights",
        "Ongoing optimization",
        "Training & documentation",
        "24/7 priority support",
        "Quarterly strategy reviews",
      ],
      cta: "Get Started",
      popular: false,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative bg-white border-2 rounded-2xl p-8 flex flex-col ${
              pkg.popular
                ? "border-[#dd4f43] shadow-xl scale-105"
                : "border-foreground/10 shadow-lg hover:shadow-xl transition-shadow"
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#dd4f43] text-white px-6 py-2 rounded-full text-sm font-oswald uppercase">
                Most Popular
              </div>
            )}

            {/* Package Name */}
            <h3 className="text-3xl font-oswald font-bold text-foreground mb-2">
              {pkg.name}
            </h3>

            {/* Tagline */}
            <p className="text-sm text-foreground/60 mb-6">{pkg.tagline}</p>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-foreground/60">Starting at</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm text-foreground/80">NPR</span>
                <span className="text-4xl md:text-5xl font-oswald font-bold text-foreground">
                  {pkg.price}
                </span>
                <span className="text-sm text-foreground/60">+</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-foreground/70 mb-6">
              {pkg.description}
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-grow">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#dd4f43] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href="/request-quote"
              className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-oswald text-base uppercase transition-all duration-300 group ${
                pkg.popular
                  ? "bg-[#dd4f43] text-white hover:bg-[#c44539]"
                  : "bg-foreground text-white hover:bg-foreground/90"
              }`}
            >
              {pkg.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        ))}
      </div>

      {/* Custom Solutions Note */}
      <div className="mt-16 text-center max-w-2xl mx-auto">
        <p className="text-sm md:text-base text-foreground/70 mb-6">
          Need something specific? We create custom packages tailored to your
          unique requirements.
        </p>
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 text-[#dd4f43] font-oswald text-base uppercase hover:gap-3 transition-all duration-300"
        >
          Talk to Our Team
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </>
  );
}
