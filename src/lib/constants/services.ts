export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  features: string[];
  mediaUrl: string;
  mediaType: "video" | "image";
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Custom Software Solutions",
    description:
      "We craft tailored software solutions that perfectly align with your business goals. From concept to deployment, we build scalable, efficient, and reliable applications that drive growth and innovation. Our expertise spans web applications, mobile apps, and enterprise systems, all designed to solve your unique challenges.",
    features: [
      "Scalable Architecture",
      "Modern Tech Stack",
      "API Integration",
      "Cloud-Ready Solutions",
    ],
    mediaUrl: "/video/custom-software.mp4",
    mediaType: "video",
  },
  {
    id: 2,
    title: "Website Development",
    description:
      "Your website is your digital storefront. We create stunning, high-performance websites that captivate visitors and convert them into customers. With responsive design, lightning-fast load times, and intuitive user experiences, we ensure your online presence stands out in the crowded digital landscape.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Performance",
      "CMS Integration",
    ],
    mediaUrl: "/video/website.mp4",
    mediaType: "video",
  },
  {
    id: 3,
    title: "Product Videography",
    description:
      "Bring your products to life with stunning 3D visualizations and cinematic videography. We combine cutting-edge 3D modeling with professional motion graphics in After Effects to create product videos that mesmerize and sell. Perfect for e-commerce, product launches, and marketing campaigns.",
    features: [
      "3D Product Modeling",
      "After Effects Magic",
      "Cinematic Quality",
      "Brand Storytelling",
    ],
    mediaUrl: "/video/product-videography.mp4",
    mediaType: "video",
  },
  {
    id: 4,
    title: "Photography Services",
    description:
      "Capture the essence of your brand through professional photography that tells your story. From product shots to lifestyle imagery, our photography services deliver high-quality visuals that engage audiences and elevate your brand identity across all platforms.",
    features: [
      "Product Photography",
      "Lifestyle Shoots",
      "Post-Production",
      "Brand Consistency",
    ],
    mediaUrl: "/video/photography.mp4",
    mediaType: "video",
  },
  {
    id: 5,
    title: "Social Media Management",
    description:
      "Build a powerful social media presence that drives engagement and grows your audience. Our comprehensive social media management services include content creation, strategy development, community management, and analytics to ensure your brand thrives in the digital conversation.",
    features: [
      "Content Strategy",
      "Community Engagement",
      "Analytics & Insights",
      "Multi-Platform Management",
    ],
    mediaUrl: "/video/social-media.mp4",
    mediaType: "video",
  },
];
