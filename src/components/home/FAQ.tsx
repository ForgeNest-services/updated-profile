"use client";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  description?: string;
}

export default function FAQ({ items, title, description }: FAQProps) {
  return (
    <section className="w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {(title || description) && (
          <div className="mb-12 md:mb-16 text-center">
            {title && (
              <h2 className="font-oswald text-3xl md:text-4xl lg:text-5xl font-normal mb-4 tracking-tighter leading-tight text-foreground">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        {/* FAQ Items */}
        <Accordion type="single" collapsible className="w-full space-y-3 mb-2">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-foreground/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-foreground/40"
            >
              <AccordionTrigger className="font-oswald text-lg md:text-xl font-normal text-foreground text-left tracking-tight px-6 py-4 md:py-5 bg-background hover:bg-foreground/5 transition-colors duration-200">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-5 md:py-6 bg-foreground/2 border-t border-foreground/10">
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-foreground/60 mb-6">Didn't find your answer?</p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 rounded-full font-oswald text-sm uppercase hover:opacity-90 transition-opacity duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
