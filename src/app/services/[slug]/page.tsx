import React from "react";
import { detailedServices } from "@/detailedServices";
import ServiceDetailsView from "@/components/Services/ServiceDetailsView";
import JsonLd from "@/components/JsonLd";

interface ServiceDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = detailedServices.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords.join(", "),
    alternates: {
      canonical: `https://frontail.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://frontail.com/services/${service.slug}`,
    },
  };
}

export function generateStaticParams() {
  return detailedServices.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetails({ params }: ServiceDetailsProps) {
  const { slug } = await params;
  const service = detailedServices.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="max-w-screen-lg mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Service Not Found
        </h1>
        <p className="text-gray-600">
          The service you are looking for does not exist or has been moved.
        </p>
      </div>
    );
  }

  const serviceUrl = `https://frontail.com/services/${service.slug}`;
  const serviceSchema = {
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
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: serviceUrl,
          },
        ],
      },
      {
        "@type": "Service",
        name: service.title,
        serviceType: service.title,
        description: service.metaDescription,
        url: serviceUrl,
        image: `https://frontail.com${service.image}`,
        areaServed: "Worldwide",
        provider: {
          "@type": "Organization",
          name: "Frontail Technology",
          url: "https://frontail.com",
          logo: "https://frontail.com/favicon.png",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.title} offerings`,
          itemListElement: service.whatWeOffer.map((offer) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: typeof offer === "string" ? offer : offer.title,
              description: typeof offer === "string" ? undefined : offer.description,
            },
          })),
        },
        keywords: service.keywords.join(", "),
      },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <ServiceDetailsView service={service} />
    </>
  );
}
