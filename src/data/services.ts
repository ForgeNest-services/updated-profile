export interface ServiceFeature {
  title: string;
  description: string;
  iconName?: keyof typeof import("lucide-react");
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  details?: string[];
  iconName?: keyof typeof import("lucide-react");
  image?: string;
}

export interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  features: string[];
  detailedFeatures: ServiceFeature[];
  mediaUrl: string;
  mediaType: "video" | "image";
  process: ProcessStep[];
  whatWeDo: {
    title: string;
    description: string;
    benefits: string[];
  };
  technologies?: Array<{
    slug: string;
    name: string;
  }>;
  caseStudies?: {
    title: string;
    description: string;
    results: string[];
  }[];
}

export const services: Service[] = [
  {
    id: 1,
    slug: "custom-web-applications",
    title: "Custom Web Applications",
    description:
      "Build powerful, scalable web applications tailored to your business needs. From admin dashboards to full-featured SaaS platforms, we create robust solutions that streamline operations and drive growth.",
    excerpt:
      "Powerful, scalable web applications designed specifically for your business needs.",
    features: [
      "Admin dashboards & control panels",
      "SaaS platforms & portals",
      "Real-time collaboration tools",
      "Custom integrations & APIs",
      "Scalable architecture",
      "Cloud deployment & hosting",
    ],
    detailedFeatures: [
      {
        title: "Admin Dashboards & Control Panels",
        description:
          "Intuitive interfaces for managing your business operations with real-time analytics and reporting.",
        iconName: "LayoutDashboard",
      },
      {
        title: "SaaS Platforms & Portals",
        description:
          "Multi-tenant applications designed to scale with your business and user base.",
        iconName: "Cloud",
      },
      {
        title: "Real-time Collaboration Tools",
        description:
          "Enable teams to work together seamlessly with live updates and synchronization.",
        iconName: "Users",
      },
      {
        title: "Custom Integrations & APIs",
        description:
          "Connect your application with third-party services and build APIs for external integrations.",
        iconName: "Link",
      },
      {
        title: "Scalable Architecture",
        description:
          "Built with microservices and cloud-native technologies that grow with your needs.",
        iconName: "TrendingUp",
      },
      {
        title: "Cloud Deployment & Hosting",
        description:
          "Deploy on AWS, Azure, or Google Cloud with automatic scaling and high availability.",
        iconName: "Rocket",
      },
    ],
    mediaUrl: "/video/custom-software.mp4",
    mediaType: "video" as const,
    whatWeDo: {
      title: "What We Do in Custom Web Application Development",
      description:
        "We create end-to-end web applications that solve real business problems. Our team works closely with you to understand your requirements and deliver solutions that exceed expectations.",
      benefits: [
        "Full-stack development with modern technologies",
        "Responsive design that works on all devices",
        "Performance optimization for fast load times",
        "Security best practices and data protection",
        "Scalable database design",
        "User-friendly interfaces",
        "Comprehensive testing and quality assurance",
        "Ongoing maintenance and support",
      ],
    },
    process: [
      {
        number: 1,
        title: "Discovery & Planning",
        description:
          "We begin by understanding your business, goals, and technical requirements.",
        iconName: "Lightbulb",
        details: [
          "Initial consultation and requirement gathering",
          "Market research and competitive analysis",
          "Technology stack selection",
          "Project scope and timeline definition",
          "Resource allocation and team assignment",
        ],
      },
      {
        number: 2,
        title: "Design & Architecture",
        description:
          "Our team creates detailed designs and system architecture for your application.",
        iconName: "Pencil",
        details: [
          "Wireframing and mockups",
          "Database schema design",
          "API endpoint definition",
          "Security architecture planning",
          "Performance optimization strategy",
          "Design system creation",
        ],
      },
      {
        number: 3,
        title: "Development",
        description:
          "We build your application using best practices and modern technologies.",
        iconName: "Code",
        details: [
          "Frontend development with React, Vue, or Angular",
          "Backend development with Node.js, Python, or other languages",
          "Database implementation",
          "API development and integration",
          "Real-time features using WebSockets",
          "Code reviews and quality checks",
        ],
      },
      {
        number: 4,
        title: "Testing & QA",
        description:
          "Comprehensive testing ensures your application is reliable and bug-free.",
        iconName: "CheckSquare",
        details: [
          "Unit testing",
          "Integration testing",
          "End-to-end testing",
          "Performance testing",
          "Security testing and penetration testing",
          "User acceptance testing (UAT)",
        ],
      },
      {
        number: 5,
        title: "Deployment & Launch",
        description:
          "We deploy your application to production with minimal downtime.",
        iconName: "Rocket",
        details: [
          "Environment setup (staging and production)",
          "CI/CD pipeline configuration",
          "Data migration planning",
          "Launch monitoring and support",
          "Post-launch optimization",
          "Team training and documentation",
        ],
      },
      {
        number: 6,
        title: "Maintenance & Support",
        description:
          "We provide ongoing support to keep your application running smoothly.",
        iconName: "Wrench",
        details: [
          "Bug fixes and issue resolution",
          "Performance monitoring and optimization",
          "Security updates and patches",
          "Feature enhancements and updates",
          "Backup and disaster recovery",
          "24/7 technical support",
        ],
      },
    ],
    technologies: [
      { slug: "react", name: "React" },
      { slug: "html5", name: "HTML5" },
      { slug: "css3", name: "CSS3" },
      { slug: "nextdotjs", name: "Next.js" },
      { slug: "python", name: "Python" },
      { slug: "fastapi", name: "FastApi" },
      { slug: "nodedotjs", name: "Node.js" },
      { slug: "slack", name: "Slack" },
      { slug: "cloudflare", name: "Cloudflare" },
      { slug: "githubactions", name: "GithubActions" },
      { slug: "owasp", name: "OWASP" },
      { slug: "express", name: "Express" },
      { slug: "typescript", name: "TypeScript" },
      { slug: "postgresql", name: "PostgreSQL" },
      { slug: "mongodb", name: "MongoDB" },
      { slug: "git", name: "GIT" },
      { slug: "amazonaws", name: "AWS" },
      { slug: "docker", name: "Docker" },
      { slug: "kubernetes", name: "Kubernetes" },
      { slug: "prisma", name: "Prisma" },
      { slug: "jest", name: "Jest" },
      { slug: "firebase", name: "Firebase" },
      { slug: "nginx", name: "Nginx" },
      { slug: "vercel", name: "Vercel" },
      { slug: "figma", name: "Figma" },
    ],
    caseStudies: [
      {
        title: "Fintech Startup Dashboard",
        description:
          "Built a real-time dashboard for a fintech startup to manage transactions and user analytics.",
        results: [
          "Launched MVP in 8 weeks",
          "Supports 10,000+ monthly active users",
          "Reduced manual reporting time by 80%",
        ],
      },
      {
        title: "Task Management App",
        description:
          "Created a collaborative task management tool for remote teams.",
        results: [
          "Intuitive interface adopted by 50+ teams",
          "Real-time collaboration features",
          "Successfully scaled from 0 to 5,000 users",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "modern-website-design-development",
    title: "Modern Website Design & Development",
    description:
      "Your website is your digital presence. We create stunning, high-performance websites that captivate visitors and convert them into customers. Beautiful design meets powerful functionality.",
    excerpt:
      "Stunning, high-performance websites that convert visitors into customers.",
    features: [
      "Responsive & fast-loading",
      "SEO optimized structure",
      "High-converting design",
      "CMS integration options",
      "Analytics & tracking",
      "Ongoing support & updates",
    ],
    detailedFeatures: [
      {
        title: "Responsive & Fast-Loading",
        description:
          "Optimized for all devices with lightning-fast load times and smooth user experience.",
        iconName: "Zap",
      },
      {
        title: "SEO Optimized Structure",
        description:
          "Built with search engine optimization in mind to improve your online visibility.",
        iconName: "Search",
      },
      {
        title: "High-Converting Design",
        description:
          "Beautiful, user-centered design that guides visitors toward your goals.",
        iconName: "Palette",
      },
      {
        title: "CMS Integration",
        description:
          "Easy-to-use content management system for managing your website content.",
        iconName: "FileText",
      },
      {
        title: "Analytics & Tracking",
        description:
          "Built-in analytics to understand visitor behavior and optimize performance.",
        iconName: "BarChart3",
      },
      {
        title: "Ongoing Support",
        description:
          "Continuous maintenance, updates, and technical support included.",
        iconName: "Wrench",
      },
    ],
    mediaUrl: "/video/modern_web.mp4",
    mediaType: "video" as const,
    whatWeDo: {
      title: "What We Do in Website Design & Development",
      description:
        "We create websites that are not just beautiful, but also effective business tools. Our websites are optimized for conversions, SEO, and user experience.",
      benefits: [
        "Mobile-first responsive design",
        "SEO-friendly technical architecture",
        "Fast load times and performance",
        "Accessibility compliance (WCAG)",
        "Brand consistency and visual identity",
        "User experience optimization",
        "Conversion rate optimization",
        "Integration with marketing tools",
      ],
    },
    process: [
      {
        number: 1,
        title: "Strategy & Discovery",
        description:
          "We understand your business, target audience, and goals for the website.",
        iconName: "Target",
        details: [
          "Business goal definition",
          "Target audience analysis",
          "Competitor research",
          "Keyword research for SEO",
          "User persona development",
          "Content strategy planning",
        ],
      },
      {
        number: 2,
        title: "Design & Wireframing",
        description:
          "Creating intuitive layouts and beautiful visual designs for your website.",
        iconName: "Palette",
        details: [
          "Sitemap creation",
          "Wireframing key pages",
          "Visual design mockups",
          "Brand identity application",
          "Interactive prototyping",
          "User testing and refinement",
        ],
      },
      {
        number: 3,
        title: "Development",
        description:
          "Building your website with clean, efficient, and SEO-friendly code.",
        iconName: "Code",
        details: [
          "Frontend development (HTML, CSS, JavaScript)",
          "CMS integration (Contentful, Strapi, etc.)",
          "Database setup for dynamic content",
          "API integrations",
          "Form handling and validation",
          "Image optimization and lazy loading",
        ],
      },
      {
        number: 4,
        title: "SEO & Performance Optimization",
        description: "Ensuring your website ranks well and loads quickly.",
        iconName: "Zap",
        details: [
          "On-page SEO optimization",
          "Meta tags and schema markup",
          "Performance optimization (minification, compression)",
          "Mobile optimization",
          "Core Web Vitals optimization",
          "Speed testing and benchmarking",
        ],
      },
      {
        number: 5,
        title: "Testing & Launch",
        description:
          "Thorough testing and deployment to get your website live.",
        iconName: "CheckCircle",
        details: [
          "Cross-browser testing",
          "Mobile device testing",
          "Functionality testing",
          "Security testing",
          "Domain setup and SSL",
          "Launch and monitoring",
        ],
      },
      {
        number: 6,
        title: "Maintenance & Growth",
        description:
          "Ongoing support and optimization for continuous improvement.",
        iconName: "TrendingUp",
        details: [
          "Content updates and management",
          "Performance monitoring",
          "Security updates and backups",
          "A/B testing and optimization",
          "Traffic analysis and reporting",
          "Feature enhancements",
        ],
      },
    ],
    technologies: [
      { slug: "react", name: "React" },
      { slug: "html5", name: "HTML5" },
      { slug: "css3", name: "CSS3" },
      { slug: "nextdotjs", name: "Next.js" },
      { slug: "python", name: "Python" },
      { slug: "fastapi", name: "FastApi" },
      { slug: "nodedotjs", name: "Node.js" },
      { slug: "slack", name: "Slack" },
      { slug: "cloudflare", name: "Cloudflare" },
      { slug: "githubactions", name: "GithubActions" },
      { slug: "owasp", name: "OWASP" },
      { slug: "express", name: "Express" },
      { slug: "typescript", name: "TypeScript" },
      { slug: "postgresql", name: "PostgreSQL" },
      { slug: "mongodb", name: "MongoDB" },
      { slug: "git", name: "GIT" },
      { slug: "amazonaws", name: "AWS" },
      { slug: "docker", name: "Docker" },
      { slug: "kubernetes", name: "Kubernetes" },
      { slug: "prisma", name: "Prisma" },
      { slug: "jest", name: "Jest" },
      { slug: "firebase", name: "Firebase" },
      { slug: "nginx", name: "Nginx" },
      { slug: "vercel", name: "Vercel" },
      { slug: "figma", name: "Figma" },
    ],
    caseStudies: [
      {
        title: "Startup Portfolio Website",
        description:
          "Designed and developed a modern portfolio website for a tech startup to showcase their services.",
        results: [
          "Launched in 4 weeks",
          "Mobile-responsive design with fast load times",
          "Integrated contact forms and inquiry system",
        ],
      },
      {
        title: "Local Business Website",
        description:
          "Created a professional website for a local service business with online booking system.",
        results: [
          "Easy-to-update content management system",
          "SEO optimization for local search",
          "Increased online inquiries by 3x",
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
