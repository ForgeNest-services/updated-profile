import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Navbar, SmoothScroll } from "@/components/commons";
import { Footer } from "@/components/home";
import NewNav from "@/components/commons/NewNav";

const oswald = localFont({
  src: "../../../public/fonts/oswald/Oswald-VariableFont_wght.ttf",
  variable: "--font-oswald",
  weight: "200 700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.forgenestservices.com.np"),
  title: {
    default: "Forgenest Services - Leading IT Solutions Provider in Nepal",
    template: "%s | Forgenest Services",
  },
  description:
    "Transform your business with Forgenest Services, Nepal's premier IT company. We deliver custom software development, web applications, mobile solutions, and digital transformation services to businesses worldwide.",
  keywords: [
    "IT company Nepal",
    "software development Nepal",
    "web development",
    "mobile app development",
    "digital transformation",
    "custom software solutions",
    "IT services Kathmandu",
    "technology consulting",
    "UI/UX design",
    "cloud solutions",
  ],
  authors: [{ name: "Forgenest Services Team" }],
  creator: "Forgenest Services Pvt. Ltd.",
  publisher: "Forgenest Services Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.forgenestservices.com.np",
    siteName: "Forgenest Services",
    title: "Forgenest Services - Leading IT Solutions Provider in Nepal",
    description:
      "Transform your business with cutting-edge IT solutions. Custom development, web apps, mobile solutions & digital transformation services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Forgenest Services - IT Solutions Provider",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forgenest Services - Leading IT Solutions Provider in Nepal",
    description:
      "Transform your business with cutting-edge IT solutions. Custom development, web apps, mobile solutions & digital transformation services.",
    images: ["/twitter-image.jpg"],
    creator: "@forgenestservices",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION,
  },
  alternates: {
    canonical: "https://www.forgenestservices.com.np",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Forgenest Services Pvt. Ltd.",
    description:
      "Leading IT solutions provider in Nepal specializing in custom software development, web applications, and digital transformation.",
    url: "https://www.forgenestservices.com.np",
    logo: "https://res.cloudinary.com/dpnhdq9eg/image/upload/v1756144318/Primary_RGB_kwha6h.png",
    foundingDate: "2021",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+977-9868211546",
      contactType: "customer service",
      availableLanguage: ["English", "Nepali"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "Nepal",
    },
    sameAs: [
      "https://facebook.com/forgenestservices",
      "https://twitter.com/forgenestservices",
      "https://linkedin.com/company/forgenest-services",
    ],
    services: [
      {
        "@type": "Service",
        name: "Custom Software Development",
        description: "Tailored software solutions for businesses",
      },
      {
        "@type": "Service",
        name: "Web Application Development",
        description: "Modern, responsive web applications",
      },
      {
        "@type": "Service",
        name: "Mobile App Development",
        description: "iOS and Android mobile applications",
      },
      {
        "@type": "Service",
        name: "Video Editing",
        description: "video editing",
      },
      {
        "@type": "Service",
        name: "Motion Graphics",
        description: "motion graphics editing",
      },
      {
        "@type": "Service",
        name: "Photography",
        description: "photography",
      },
    ],
  };
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);} 
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={`${oswald.variable} font-sans antialiased`}>
        <NewNav />
        {/* <SmoothScroll> */}
        {children}
        <Footer />
        {/* </SmoothScroll> */}
      </body>
    </html>
  );
}
