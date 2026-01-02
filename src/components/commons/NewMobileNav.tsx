"use client";

import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navLinks } from "@/lib/constants/navlinks";

export default function NewMobileNav() {
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className="w-4 h-4" /> : null;
  };

  const solutionsLink = navLinks.find((link) => link.label === "Solutions");
  const otherLinks = navLinks.filter((link) => link.label !== "Solutions");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="size-6" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] overflow-y-auto"
      >
        <SheetHeader className="pb-4">
          <SheetTitle className="font-oswald">Menu</SheetTitle>
        </SheetHeader>
        <div className="space-y-2">
          <Accordion type="single" collapsible className="w-full">
            {solutionsLink && solutionsLink.columns && (
              <AccordionItem value="solutions">
                <AccordionTrigger className="font-oswald font-semibold text-foreground py-3 hover:no-underline">
                  {solutionsLink.label}
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="space-y-4">
                    {solutionsLink.columns.map((column, idx) => (
                      <div key={idx}>
                        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 font-oswald">
                          {column.title}
                        </div>
                        <div className="space-y-1 pl-2">
                          {column.solutions.map((solution) => (
                            <Link
                              key={solution.href}
                              href={solution.href}
                              className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {solution.icon && getIcon(solution.icon)}
                              {solution.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>

          {otherLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href || "#"}
              className="block font-oswald font-semibold text-foreground hover:text-foreground/80 transition-colors py-3 border-b border-border/40"
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4">
            <Link
              href="/contact-us"
              className="block w-full text-center rounded-full bg-[#dd4f43] hover:bg-[#c44539] px-6 py-3 text-sm font-oswald uppercase font-medium text-white transition-colors shadow-sm hover:shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
