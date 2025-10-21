interface TechStackItem {
  category: string;
  description: string;
  technologies: string[];
  proficiency: number; // 1-5 scale
}

export const expertiseData: TechStackItem[] = [
  {
    category: "Frontend Development",
    description:
      "Modern, responsive user interfaces built with cutting-edge frameworks and libraries.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Three.js",
    ],
    proficiency: 5,
  },
  {
    category: "Backend Development",
    description:
      "Scalable server-side solutions and APIs that power robust applications.",
    technologies: [
      "Node.js",
      "Python",
      "Express",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
    ],
    proficiency: 5,
  },
  {
    category: "Cloud & DevOps",
    description:
      "Deployment, scaling, and infrastructure management for optimal performance.",
    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Terraform",
      "Nginx",
    ],
    proficiency: 4,
  },
  {
    category: "Design & Animation",
    description:
      "Visual storytelling through motion graphics, UI/UX design, and brand identity.",
    technologies: [
      "Figma",
      "After Effects",
      "Blender",
      "Cinema 4D",
      "Photoshop",
      "Illustrator",
    ],
    proficiency: 4,
  },
  {
    category: "AI & Machine Learning",
    description:
      "Intelligent solutions leveraging artificial intelligence and data science.",
    technologies: [
      "OpenAI API",
      "TensorFlow",
      "PyTorch",
      "LangChain",
      "Pandas",
      "Scikit-learn",
    ],
    proficiency: 3,
  },
  {
    category: "Mobile Development",
    description:
      "Cross-platform mobile applications with native performance and user experience.",
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Expo",
      "Firebase",
    ],
    proficiency: 4,
  },
];
