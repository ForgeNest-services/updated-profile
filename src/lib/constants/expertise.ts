interface ExpertiseItem {
  title: string;
  description: string;
  icons: string[];
}

export const expertiseData: ExpertiseItem[] = [
  {
    title: "Custom Software Solutions",
    description:
      "We design and develop scalable web and mobile applications tailored to your business goals — efficient, reliable, and built for growth.",
    icons: ["React", "Node.js", "Next.js", "MongoDB"],
  },
  {
    title: "Video Production & Editing",
    description:
      "From concept to post-production, we create visually engaging videos that tell your story with creativity and precision.",
    icons: [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "Final Cut Pro",
    ],
  },
  {
    title: "Motion Graphics & Animation",
    description:
      "We bring ideas to life through smooth, modern motion graphics — perfect for brand promos, explainers, and digital ads.",
    icons: ["Adobe After Effects", "Blender", "Cinema 4D"],
  },
  {
    title: "Graphic Design & Branding",
    description:
      "Crafting designs that speak your brand's language — from logos and posters to complete visual identity systems.",
    icons: ["Adobe Photoshop", "Illustrator", "Figma", "Canva"],
  },
  {
    title: "Digital Transformation",
    description:
      "We help businesses evolve digitally with smart strategies, automation, and innovative technology integrations.",
    icons: [
      "AI Integration",
      "Business Automation",
      "Cloud Migration",
      "Data Analytics",
    ],
  },
  {
    title: "Cloud Solutions",
    description:
      "Empowering your business with secure, scalable cloud infrastructure and seamless migration for maximum performance.",
    icons: ["AWS", "Microsoft Azure", "Google Cloud Platform", "DigitalOcean"],
  },
];
