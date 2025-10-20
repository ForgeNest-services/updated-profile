"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

type ServiceContentProps = {
  title: string;
  description: string;
  image: string;
};

const ServiceContent: React.FC<ServiceContentProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </span>{" "}
        {description}
      </p>
      <img
        src={image}
        alt={title}
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

export default function WhatWeDo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="max-w-screen-4xl mx-auto bg-background py-20 md:py-32 text-foreground">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-start flex-col">
          <h2 className="text-2xl text-center lg:text-start md:text-4xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight">
            What We Do
          </h2>
          <div className="mt-2 lg:mt-6 w-20 lg:w-40 h-1 bg-foreground" />
        </div>
        <p className="max-w-3xl pl-4 mx-auto mt-4 text-neutral-800 text-base md:text-lg text-start">
          We craft digital experiences that empower businesses — from web and
          mobile solutions to brand identity and AI-driven innovations.
        </p>
        <Carousel items={cards} />
      </div>
    </section>
  );
}

const data = [
  {
    category: "Web Development",
    title: "Building modern and scalable web apps.",
    src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2000&auto=format&fit=crop",
    content: (
      <ServiceContent
        title="Web Development"
        description="We develop fast, secure, and responsive websites using the latest technologies like Next.js, React, and Node.js. Whether it’s a company portfolio or a full-fledged SaaS product — we’ve got you covered."
        image="https://assets.aceternity.com/macbook.png"
      />
    ),
  },
  {
    category: "Mobile Apps",
    title: "Transforming ideas into mobile experiences.",
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop",
    content: (
      <ServiceContent
        title="Mobile App Development"
        description="From Android to iOS, we design mobile experiences that engage users and drive growth — blending smooth UX with reliable backend architecture."
        image="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />
    ),
  },
  {
    category: "Branding & Design",
    title: "Creating identities that connect.",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
    content: (
      <ServiceContent
        title="Branding & Design"
        description="We build your visual story — from logo design to brand strategy — ensuring every detail aligns with your company’s mission and audience."
        image="https://assets.aceternity.com/brand.png"
      />
    ),
  },
  {
    category: "AI & Automation",
    title: "Smart solutions for modern businesses.",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    content: (
      <ServiceContent
        title="AI & Automation"
        description="Integrate AI tools, automate workflows, and use data-driven insights to improve productivity, customer experience, and decision-making."
        image="https://assets.aceternity.com/ai.png"
      />
    ),
  },
  {
    category: "Digital Marketing",
    title: "Grow your presence, reach your audience.",
    src: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=2000&auto=format&fit=crop",
    content: (
      <ServiceContent
        title="Digital Marketing"
        description="We help you get discovered — through SEO, social media strategy, and data-driven campaigns that deliver measurable results."
        image="https://assets.aceternity.com/marketing.png"
      />
    ),
  },
  {
    category: "Motion Design",
    title: "Bring ideas to life with motion.",
    src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2000&auto=format&fit=crop",
    content: (
      <ServiceContent
        title="Motion Design & Animation"
        description="We create engaging motion graphics, explainer videos, and product animations that elevate your brand and captivate your audience — blending creativity with storytelling."
        image="https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&auto=format&fit=crop"
      />
    ),
  },
];
