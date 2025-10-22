"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "Web Development", href: "/services/web" },
      { label: "Mobile Apps", href: "/services/mobile" },
      { label: "Branding", href: "/services/branding" },
      { label: "AI Solutions", href: "/services/ai" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Documentation", href: "/docs" },
      { label: "Support", href: "/support" },
    ],
    legal: [
      {
        label: "Privacy Policy",
        href: "https://www.privacypolicies.com/live/7159b8ac-d3a9-4910-b7e8-9be078f6be8c",
      },
      {
        label: "Terms of Service",
        href: "https://www.freeprivacypolicy.com/live/fa18778c-83b0-4636-847f-6a37bb276e1a",
      },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  };

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/profile.php?id=61579347043810",
      label: "Facebook",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/forgenest.services/",
      label: "Instagram",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/forgenest-services-pvt-ltd/",
      label: "LinkedIn",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "contact@forgenestservices.com.np",
      href: "mailto:contact@forgenestservices.com.np",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "+977 9868211546",
      href: "tel:+9779868211546",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Kathmandu, Nepal",
      href: "https://maps.app.goo.gl/xCAuz6MTKa1PW5ZJ6",
    },
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo & Description - Takes 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <div className="relative w-48 h-16 flex items-center justify-center">
                {/* Placeholder for logo - Replace with your actual logo */}
                <Image
                  src="/images/logo-white.png"
                  alt="Forgenest Services"
                  width={180}
                  height={60}
                  className="object-contain"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.classList.remove(
                      "hidden"
                    );
                  }}
                />
                <span className="hidden font-oswald text-2xl font-bold">
                  FORGENEST
                </span>
              </div>
            </Link>

            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Where innovation meets execution. We forge digital experiences
              that inspire growth and transformation.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-foreground transition-all duration-300 group"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections - Takes 6 columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <h3 className="font-oswald text-sm md:text-lg font-normal mb-4 uppercase">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-xs md:text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-0 h-4 group-hover:w-4 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-oswald text-sm md:text-lg font-normal mb-4 uppercase">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-xs md:text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-0 h-4 group-hover:w-4 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-oswald text-sm md:text-lg font-normal mb-4 uppercase">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-xs md:text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-0 h-4 group-hover:w-4 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info - Takes 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="font-oswald text-sm md:text-lg font-normal mb-4 uppercase">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    target="_blank"
                    className="flex items-start gap-3 text-white/70 hover:text-white transition-colors duration-300 text-xs md:text-sm group"
                  >
                    <span className="flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-white/50 text-sm text-center md:text-left">
              © {currentYear} Forgenest Services. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white/50 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
