import type { Metadata } from "next";
import ServicesPageView from "@/components/Services/ServicesPageView";
import JsonLd from "@/components/JsonLd";
import { services } from "@/data";

export const metadata: Metadata = {
  title: "MVP, SaaS, AI, Web3 & Mobile App Development Services",
  description:
    "Explore Frontail Technology services: MVP development, SaaS development, mobile app development, Web3 development, AI development, and custom tools.",
  alternates: {
    canonical: "https://frontail.com/services",
  },
  openGraph: {
    title: "MVP, SaaS, AI, Web3 & Mobile App Development Services",
    description:
      "Startup-ready product development services for founders and businesses.",
    url: "https://frontail.com/services",
  },
};

export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
            name: "Services",
            item: "https://frontail.com/services",
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Frontail Technology Services",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            url: `https://frontail.com/services/${service.slug}`,
            provider: {
              "@type": "Organization",
              name: "Frontail Technology",
              url: "https://frontail.com",
            },
          },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={servicesSchema} />
      <ServicesPageView />
    </>
  );
}
