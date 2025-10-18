'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { navLinks } from '@/lib/constants/navlinks';
import MobileNav from './MobileNav';
import gsap from 'gsap';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldBeScrolled = scrollPosition > 50;

      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);

        // Only animate on large screens
        if (window.innerWidth >= 1024) {
          if (shouldBeScrolled) {
            // Transition to hamburger
            if (navLinksRef.current && hamburgerRef.current) {
              gsap.to(navLinksRef.current, {
                opacity: 0,
                x: 20,
                duration: 0.3,
                ease: 'power2.inOut',
                onComplete: () => {
                  gsap.fromTo(
                    hamburgerRef.current,
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
                  );
                },
              });
            }
          } else {
            // Transition to nav links
            if (navLinksRef.current && hamburgerRef.current) {
              gsap.to(hamburgerRef.current, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.inOut',
                onComplete: () => {
                  gsap.fromTo(
                    navLinksRef.current,
                    { opacity: 0, x: 20 },
                    { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' }
                  );
                },
              });
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 w-full">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
          <nav className="flex justify-between items-center bg-background/80 backdrop-blur-md rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 shadow-lg border border-foreground/10">
            {/* Logo */}
            <Link 
              href="/" 
              className="font-oswald text-foreground text-sm sm:text-base lg:text-lg font-bold tracking-wider hover:opacity-70 transition-opacity duration-300"
            >
              FORGENEST SERVICES
            </Link>

            {/* Desktop Nav Links - Hidden on mobile, shown on large screens when not scrolled */}
            <div
              ref={navLinksRef}
              className={`hidden lg:flex items-center gap-6 xl:gap-8 ${
                isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-oswald text-foreground text-sm lg:text-base xl:text-lg uppercase relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Hamburger Menu - Always visible on mobile/tablet, on desktop only when scrolled */}
            <button
              ref={hamburgerRef}
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:absolute lg:right-8 flex items-center justify-center text-foreground hover:opacity-70 transition-opacity duration-300 ${
                isScrolled ? 'lg:scale-100 lg:opacity-100' : 'lg:scale-0 lg:opacity-0'
              }`}
              aria-label="Open menu"
            >
              <Menu size={24} className="sm:w-7 sm:h-7" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}