export interface NavLink {
  label: string;
  href?: string;
  children?: NavLinkChild[];
  columns?: SolutionColumn[];
}

export interface NavLinkChild {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface SolutionColumn {
  title: string;
  solutions: NavLinkChild[];
}

export const navLinks: NavLink[] = [
  {
    label: "Solutions",
    href: "#",
    columns: [
      {
        title: "Development Services",
        solutions: [
          {
            label: "Custom Web Applications",
            href: "/request-quote",
            description: "Scalable web apps tailored to your needs",
            icon: "Code",
          },
          {
            label: "Mobile App Development",
            href: "/request-quote",
            description: "Native iOS and Android applications",
            icon: "Smartphone",
          },
          {
            label: "SaaS Development",
            href: "/request-quote",
            description: "Multi-tenant cloud-based platforms",
            icon: "Cloud",
          },
          {
            label: "API Development",
            href: "/request-quote",
            description: "RESTful and GraphQL API solutions",
            icon: "Zap",
          },
        ],
      },
      {
        title: "Design & Experience",
        solutions: [
          {
            label: "Modern Website Design",
            href: "/request-quote",
            description: "High-converting websites and landing pages",
            icon: "Palette",
          },
          {
            label: "UI/UX Design",
            href: "/request-quote",
            description: "User-centered design experiences",
            icon: "Figma",
          },
          {
            label: "Brand Identity",
            href: "/request-quote",
            description: "Logo and visual identity design",
            icon: "Sparkles",
          },
          {
            label: "Product Design",
            href: "/request-quote",
            description: "End-to-end product design solutions",
            icon: "Layers",
          },
        ],
      },
      {
        title: "Business Solutions",
        solutions: [
          {
            label: "Digital Transformation",
            href: "/request-quote",
            description: "Modernize your business processes",
            icon: "TrendingUp",
          },
          {
            label: "Business Intelligence",
            href: "/request-quote",
            description: "Data-driven insights and analytics",
            icon: "BarChart3",
          },
          {
            label: "E-Commerce Solutions",
            href: "/request-quote",
            description: "Online stores and marketplaces",
            icon: "ShoppingCart",
          },
          {
            label: "IT Consulting",
            href: "/request-quote",
            description: "Strategic technology guidance",
            icon: "Lightbulb",
          },
        ],
      },
    ],
  },
  { label: "About", href: "/about-us" },
  { label: "Pricing", href: "/pricing" },
  { label: "Our Work", href: "/portfolio" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact-us" },
];
