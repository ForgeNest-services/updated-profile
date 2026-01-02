"use client";

import Image from "next/image";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/lib/constants/navlinks";
import NewMobileNav from "./NewMobileNav";
import { cn } from "@/lib/utils";

export default function NewNavbar() {
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className="w-5 h-5" /> : null;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background backdrop-blur supports-backdrop-filter:bg-background/95 py-2">
      <div className="max-w-screen-2xl mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dpnhdq9eg/image/upload/v1756144318/Primary_RGB_kwha6h.png"
            alt="Forgenest Services"
            width={180}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                {link.columns ? (
                  <>
                    <NavigationMenuTrigger className="font-oswald text-base bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[900px] p-6 bg-background">
                        <div className="grid grid-cols-3 gap-8">
                          {link.columns.map((column, idx) => (
                            <div key={idx}>
                              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground/70 font-oswald">
                                {column.title}
                              </h3>
                              <div className="space-y-2">
                                {column.solutions.map((solution) => (
                                  <Link
                                    key={solution.href}
                                    href={solution.href}
                                    className="group block rounded-lg p-3 hover:bg-accent/50 transition-all duration-200"
                                  >
                                    <div className="flex items-center gap-2 mb-1">
                                      {solution.icon && (
                                        <div className="text-foreground/80 group-hover:text-foreground transition-colors">
                                          {getIcon(solution.icon)}
                                        </div>
                                      )}
                                      <div className="font-oswald text-sm font-semibold text-foreground">
                                        {solution.label}
                                      </div>
                                    </div>
                                    {solution.description && (
                                      <div className="text-xs text-muted-foreground leading-relaxed">
                                        {solution.description}
                                      </div>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : link.children ? (
                  <>
                    <NavigationMenuTrigger className="font-oswald text-base bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[500px] p-6 bg-background">
                        <div className="grid grid-cols-1 gap-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group block rounded-lg p-4 hover:bg-accent/50 transition-all duration-200"
                            >
                              <div className="flex items-start gap-3">
                                {child.icon && (
                                  <div className="flex-shrink-0 mt-0.5 text-foreground/80 group-hover:text-foreground transition-colors">
                                    {getIcon(child.icon)}
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <div className="font-oswald text-base font-semibold text-foreground mb-1">
                                    {child.label}
                                  </div>
                                  {child.description && (
                                    <div className="text-sm text-muted-foreground leading-relaxed">
                                      {child.description}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link
                    href={link.href || "#"}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-oswald text-base bg-transparent hover:bg-transparent focus:bg-transparent"
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Link
            href="/contact-us"
            className="hidden lg:block rounded-full bg-foreground  px-6 py-3 text-sm font-oswald uppercase text-white transition-colors shadow-sm hover:shadow-md"
          >
            Get Started
          </Link>

          <NewMobileNav />
        </div>
      </div>
    </nav>
  );
}
