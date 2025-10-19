'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { TbMenu4 } from "react-icons/tb";
import { navLinks } from '@/lib/constants/navlinks';
import MobileNav from './MobileNav';
import { gsap } from 'gsap';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldBeScrolled = scrollPosition > 50;

      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);

        // Only animate on large screens
        if (window.innerWidth >= 1024) {
          if (shouldBeScrolled) {
            // Transition to hamburger - hide logo and nav links
            if (navLinksRef.current && hamburgerRef.current && logoRef.current) {
              gsap.to([navLinksRef.current, logoRef.current], {
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
            // Transition to nav links - show logo and nav links
            if (navLinksRef.current && hamburgerRef.current && logoRef.current) {
              gsap.to(hamburgerRef.current, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.inOut',
                onComplete: () => {
                  gsap.fromTo(
                    [navLinksRef.current, logoRef.current],
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
        <div className="w-full max-w-screen-2xl mx-auto px-2 sm:px-4 lg:px-6 py-2 sm:py-4">
          <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            {/* Logo */}
            <Link 
              ref={logoRef}
              href="/" 
              className={`font-oswald text-foreground text-sm text-wrap sm:text-sm lg:text-lg font-medium tracking-wider hover:opacity-70 transition-opacity duration-300 ${
                isScrolled ? 'lg:opacity-0 pointer-events-none' : 'lg:opacity-100'
              }`}
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
                  className="font-oswald text-foreground text-sm lg:text-base xl:text-lg capitalize relative group"
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
              className={`flex items-center justify-center bg-foreground text-white rounded-full p-2 hover:opacity-80 transition-opacity duration-300 lg:absolute lg:right-8 ${
                isScrolled ? 'lg:scale-100 lg:opacity-100' : 'lg:scale-0 lg:opacity-0'
              }`}
              aria-label="Open menu"
            >
              <TbMenu4 size={24} className="sm:w-7 sm:h-7" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}