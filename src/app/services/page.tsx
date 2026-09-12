import type { Metadata } from "next";
import ServicesPageView from "@/components/Services/ServicesPageView";
import JsonLd from "@/components/JsonLd";
import { services } from "@/data";

export const metadata: Metadata = {
  title: "MVP, SaaS, AI, Mobile App & Custom Software Services",
  description:
    "Explore Frontail Technologies engineering services: MVP development, SaaS & web applications, mobile app development, AI solutions, custom software, and UI/UX design.",
  alternates: {
    canonical: "https://frontail.com/services",
  },
  openGraph: {
    title: "MVP, SaaS, AI, Mobile App & Custom Software Services",
    description:
      "Full-cycle MVP, SaaS, AI, mobile app, and custom software development services for startups and growing businesses.",
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
        name: "Frontail Technologies Services",
        itemListElement: services.map((service, index) => {
          const url = `https://frontail.com/services/${service.slug}`;
          return {
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              url: url,
              provider: {
                "@type": "Organization",
                name: "Frontail Technologies",
                url: "https://frontail.com",
              },
            },
          };
        }),
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
