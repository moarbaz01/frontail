import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us — MVP & Software Development Studio",
  description:
    "Frontail Technologies is a product-first studio building scalable SaaS platforms, mobile apps, and business automation led by founder Mohammed Arbaz.",
  alternates: {
    canonical: "https://frontail.com/about",
  },
  openGraph: {
    title: "About Frontail Technologies",
    description:
      "A product engineering studio run by a builder, not a generic IT agency. Scalable SaaS, apps, and automation.",
    url: "https://frontail.com/about",
    siteName: "Frontail Technologies",
    images: [
      {
        url: "https://frontail.com/founder.jpeg",
        width: 1200,
        height: 1200,
        alt: "Mohammed Arbaz, founder of Frontail Technologies",
      },
    ],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Frontail Technologies",
  url: "https://frontail.com/about",
  description:
    "Frontail Technologies is a product-first software studio building MVPs, SaaS platforms, mobile apps, and custom business automation systems.",
  mainEntity: {
    "@type": "Person",
    name: "Mohammed Arbaz",
    alternateName: "ABR",
    jobTitle: "Founder & Full-Stack Developer",
    image: "https://frontail.com/founder.jpeg",
    worksFor: {
      "@type": "Organization",
      name: "Frontail Technologies",
      url: "https://frontail.com",
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://frontail.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://frontail.com/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <JsonLd data={breadcrumbSchema} />
      <AboutContent />
    </>
  );
}
