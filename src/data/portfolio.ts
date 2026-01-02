export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  featured: boolean;
  thumbnail: string;
  images: string[];
  url: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  services: string[];
  technologies: string[];
  features: string[];
}

export const projectCategories = [
  "All",
  "E-commerce",
  "Management System",
  "Booking Platform",
  "Educational Portal",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projects: Project[] = [
  {
    id: "ietc-ecommerce",
    title: "Complete E-commerce Platform",
    client: "Indrayani Enterprises & Trade Concern",
    category: "E-commerce",
    year: "2024",
    featured: true,
    thumbnail: "/images/portfolio/ietc.png",
    images: [
      "/images/portfolio/ietc-1.jpg",
      "/images/portfolio/ietc-2.jpg",
      "/images/portfolio/ietc-3.jpg",
    ],
    url: "https://ietc.com.np",
    description:
      "A full-featured e-commerce platform for home appliances and professional services. Built with modern technologies to provide seamless shopping experience with brand management, product catalog, and secure checkout.",
    challenge:
      "IETC needed a robust e-commerce solution to showcase multiple brands (Baltra, TCL, CG, Godrej, IPM, NepaTop, Neo International) with comprehensive product management, secure payment processing, and an intuitive admin panel for inventory management.",
    solution:
      "Developed a full-stack e-commerce application with advanced product filtering, brand categorization, shopping cart functionality, and a powerful admin dashboard. Integrated secure payment gateways and implemented responsive design for optimal mobile shopping experience.",
    results: [
      "500+ products managed seamlessly",
      "Multiple brand integrations",
      "Secure payment processing",
      "24/7 customer support integration",
      "Real-time inventory management",
    ],
    services: [
      "Full-Stack Development",
      "E-commerce Solutions",
      "Admin Dashboard",
      "Payment Integration",
      "SEO Optimization",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Cloudinary",
    ],
    features: [
      "Product catalog with advanced filtering",
      "Shopping cart and checkout",
      "Brand management system",
      "Admin panel for inventory",
      "Order management",
      "Customer accounts",
      "Responsive design",
      "SEO optimized",
    ],
  },
  {
    id: "bhattaguru-booking",
    title: "Astrology Portfolio & Booking System",
    client: "Bhattaguru - Expert Vedic Astrologer",
    category: "Booking Platform",
    year: "2024",
    featured: true,
    thumbnail: "/images/portfolio/bhattaguru.png",
    images: [
      "/images/portfolio/bhattaguru-1.jpg",
      "/images/portfolio/bhattaguru-2.jpg",
      "/images/portfolio/bhattaguru-3.jpg",
    ],
    url: "https://bhattaguru.com",
    description:
      "Professional astrology consultation platform featuring portfolio showcase, service listings, booking system, and client testimonials. Designed to highlight expertise while making consultation booking seamless.",
    challenge:
      "Nava Raj Bhatta (Bhattaguru), an award-winning Vedic astrologer, needed a professional online presence to showcase his expertise, awards, and services while enabling clients to easily book consultations. The platform needed to reflect trust, tradition, and professionalism.",
    solution:
      "Created an elegant portfolio website with integrated booking system for astrology consultations. Implemented service categorization, gallery showcase for awards and events, video integration, and an admin panel for managing bookings and content.",
    results: [
      "30,000+ happy clients reached",
      "24/7 consultation booking available",
      "Professional brand presence established",
      "International award showcase",
      "Streamlined appointment management",
    ],
    services: [
      "Web Development",
      "Booking System",
      "CMS Integration",
      "Portfolio Design",
      "Admin Dashboard",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Video Integration",
    ],
    features: [
      "Service listings and categorization",
      "Online booking system",
      "Gallery for awards and events",
      "Video testimonials",
      "Admin panel for bookings",
      "Client reviews management",
      "Responsive design",
      "SEO optimized for astrology keywords",
    ],
  },
  {
    id: "mataindrayani-management",
    title: "Cooperative Management System",
    client: "Mata Indrayani Savings & Credit Cooperative",
    category: "Management System",
    year: "2024",
    featured: true,
    thumbnail: "/images/portfolio/mts.png",
    images: [
      "/images/portfolio/mataindrayani-1.jpg",
      "/images/portfolio/mataindrayani-2.jpg",
      "/images/portfolio/mataindrayani-3.jpg",
    ],
    url: "https://mataindrayanisaccos.com.np",
    description:
      "Comprehensive cooperative management application for member management, employee tracking, event organization, and community engagement. Features include gallery management, activity tracking, and public information portal.",
    challenge:
      "Mata Indrayani Savings and Credit Cooperative, established in 1997 with 450+ members, needed a digital platform to manage members, employees, showcase community activities, and maintain transparency while promoting their cooperative values.",
    solution:
      "Developed a full-stack management system with member directory, employee management, event calendar, gallery for community activities, and a content management system. Implemented admin dashboard for complete organizational control.",
    results: [
      "450+ members managed digitally",
      "Community activities documented",
      "Transparent financial communication",
      "Event management streamlined",
      "Enhanced member engagement",
    ],
    services: [
      "Web Development",
      "Management System",
      "CMS Integration",
      "Database Design",
      "Admin Dashboard",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Image Optimization",
    ],
    features: [
      "Member management system",
      "Employee directory",
      "Event and activity tracking",
      "Photo gallery management",
      "Chairperson message section",
      "Social contribution showcase",
      "Admin panel for content",
      "Responsive design",
    ],
  },
  {
    id: "school-management",
    title: "School Management & Portfolio System",
    client: "Educational Institutions in Nepal",
    category: "Educational Portal",
    year: "2025",
    featured: true,
    thumbnail: "/images/portfolio/demo-school.png",
    images: [
      "/images/portfolio/school-1.jpg",
      "/images/portfolio/school-2.jpg",
      "/images/portfolio/school-3.jpg",
    ],
    url: "https://school-demo.forgenestservices.com.np",
    description:
      "Complete school profile management system tailored for educational institutions in Nepal. Features include admissions, events, notices, gallery, blog system, and comprehensive admin panel for school management.",
    challenge:
      "Schools in Nepal needed an affordable, comprehensive digital solution to manage their online presence, showcase achievements, manage admissions, and communicate with parents and students effectively.",
    solution:
      "Built a feature-rich school management portal with programs showcase, event calendar, notice board, photo gallery, blog system, leadership profiles, and a powerful admin panel. Designed specifically for Nepali education system with support for Bikram Sambat calendar.",
    results: [
      "36+ years of school heritage showcased",
      "2000+ student information managed",
      "95% pass rate highlighted",
      "50+ faculty profiles displayed",
      "Complete admission system",
    ],
    services: [
      "Web Development",
      "School Management System",
      "CMS Integration",
      "Admin Dashboard",
      "SEO Optimization",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Cloudinary",
      "Calendar Integration",
    ],
    features: [
      "Program/course management (School, +2, Bachelor)",
      "Event calendar with BS date support",
      "Notice board system",
      "Photo gallery with categories",
      "Blog and article publishing",
      "Leadership profile showcase",
      "Admission management",
      "Contact and inquiry system",
      "Comprehensive admin panel",
      "Responsive design",
      "SEO optimized",
    ],
  },
];

export function getProjectByCategory(category: ProjectCategory): Project[] {
  if (category === "All") {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
