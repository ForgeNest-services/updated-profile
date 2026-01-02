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
            href: "/solutions/custom-web-applications",
            description: "Scalable web apps tailored to your needs",
            icon: "Code",
          },
          {
            label: "Mobile App Development",
            href: "/solutions/mobile-app-development",
            description: "Native iOS and Android applications",
            icon: "Smartphone",
          },
          {
            label: "SaaS Development",
            href: "/solutions/saas-development",
            description: "Multi-tenant cloud-based platforms",
            icon: "Cloud",
          },
          {
            label: "API Development",
            href: "/solutions/api-development",
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
            href: "/solutions/modern-website-design-development",
            description: "High-converting websites and landing pages",
            icon: "Palette",
          },
          {
            label: "UI/UX Design",
            href: "/solutions/ui-ux-design",
            description: "User-centered design experiences",
            icon: "Figma",
          },
          {
            label: "Brand Identity",
            href: "/solutions/brand-identity",
            description: "Logo and visual identity design",
            icon: "Sparkles",
          },
          {
            label: "Product Design",
            href: "/solutions/product-design",
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
            href: "/solutions/digital-transformation",
            description: "Modernize your business processes",
            icon: "TrendingUp",
          },
          {
            label: "Business Intelligence",
            href: "/solutions/business-intelligence",
            description: "Data-driven insights and analytics",
            icon: "BarChart3",
          },
          {
            label: "E-Commerce Solutions",
            href: "/solutions/ecommerce-solutions",
            description: "Online stores and marketplaces",
            icon: "ShoppingCart",
          },
          {
            label: "IT Consulting",
            href: "/solutions/it-consulting",
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
