import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import { navLinks } from '@/lib/constants/navlinks';
import gsap from 'gsap';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.to(menuRef.current, {
          x: 0,
          duration: 0.6,
          ease: 'power3.inOut',
        });

        gsap.fromTo(
          linksRef.current,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.2,
          }
        );
      } else {
        gsap.to(menuRef.current, {
          x: '100%',
          duration: 0.6,
          ease: 'power3.inOut',
        });
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed top-0 right-0 h-screen w-full md:w-[400px] bg-foreground text-white z-50 translate-x-full"
    >
      <div className="flex flex-col h-full p-6 sm:p-8 md:p-12">
        <button
          onClick={onClose}
          className="self-end mb-12 hover:rotate-90 transition-transform duration-300"
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        <nav className="flex-1 flex flex-col justify-center gap-6 sm:gap-8">
          {navLinks.map((link, index) => (
            <div
              key={link.href}
              ref={(el) => {
                if (el) linksRef.current[index] = el;
              }}
              className="overflow-hidden"
            >
              <Link
                href={link.href}
                onClick={onClose}
                className="group flex items-center justify-between text-3xl sm:text-4xl md:text-5xl font-oswald uppercase hover:translate-x-4 transition-transform duration-300"
              >
                <span>{link.label}</span>
                <ArrowRight
                  size={32}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}