import React from "react";
import { detailedServices } from "@/data";
import ServiceDetailsView from "@/components/Services/ServiceDetailsView";

interface ServiceDetailsProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const service = detailedServices.find((s) => s.id === parseInt(params.id));
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords.join(", "),
  };
}

export default function ServiceDetails({ params }: ServiceDetailsProps) {
  const service = detailedServices.find((s) => s.id === parseInt(params.id));

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Service Not Found
        </h1>
        <p className="text-gray-600">
          The service you are looking for does not exist or has been moved.
        </p>
      </div>
    );
  }

  return <ServiceDetailsView service={service} />;
}