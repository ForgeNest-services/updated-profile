export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  mediaType: "image" | "video";
  mediaUrl: string;
}

export const services: ServiceItem[] = [
  {
    id: 1,
    title: "Website Development",
    description:
      "We build high-performance, modern, and scalable websites tailored to brand identity and business needs. From portfolio websites to enterprise-level platforms, our solutions are responsive, SEO-optimized, secure, and capable of seamless integrations like e-commerce, booking systems, dashboards, and automation tools.",
    mediaType: "video",
    mediaUrl: "/videos/website-showcase.mp4",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "We craft intuitive and engaging mobile applications for Android and iOS using cutting-edge frameworks. Our apps ensure great performance, a smooth user journey, and smart backend connectivity — designed to scale with your growing audience and business ecosystem.",
    mediaType: "image",
    mediaUrl: "/images/mobile-apps.jpg",
  },
  {
    id: 3,
    title: "Videography & Production",
    description:
      "We bring your stories to life through compelling cinematic visuals. Whether it’s events, commercials, or corporate videos, our production team handles every stage — scripting, shooting, lighting, audio, and drone operations — delivering professional and captivating content.",
    mediaType: "video",
    mediaUrl: "/videos/videography.mp4",
  },
  {
    id: 4,
    title: "Video Editing",
    description:
      "Our editors take raw footage and carefully transform it into polished storytelling content. Using advanced editing, color grading, visual effects, motion text, transitions, and sound mixing — we ensure your final video stands out with style and clarity.",
    mediaType: "image",
    mediaUrl: "/images/video-editing.jpg",
  },
  {
    id: 5,
    title: "Motion Graphics & Animation",
    description:
      "We design professional motion graphics, animations, and explainer videos that elevate your brand’s communication. Perfect for social media ads, intro animations, product showcases, and educational content — delivered with a strong visual impact and fluid movement.",
    mediaType: "video",
    mediaUrl: "/videos/motion-graphics.mp4",
  },
  {
    id: 6,
    title: "Graphic Design & Branding",
    description:
      "Every brand has a story, and we turn that story into a visual expression. From logos and social media creatives to complete branding systems, we design visually pleasing and memorable graphics that help your business make an instant and lasting impression.",
    mediaType: "image",
    mediaUrl: "/images/graphic-design.jpg",
  },
  {
    id: 7,
    title: "Cloud & Infrastructure Solutions",
    description:
      "We enable businesses to migrate, deploy, and operate confidently on the cloud. With services across AWS, Azure, GCP, and private cloud environments, we ensure scalability, performance, automation, backups, and security — so your systems run smoothly, 24/7.",
    mediaType: "image",
    mediaUrl: "/images/cloud-services.jpg",
  },
];
