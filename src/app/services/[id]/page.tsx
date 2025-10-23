import React from "react";
import { detailedServices } from "@/data";

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
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Service not found
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Page Meta (optional in app router via generateMetadata) */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h1>

      {/* Overview */}
      <p className="text-gray-700 leading-relaxed text-lg mb-10">
        {service.overview}
      </p>

      {/* What We Offer */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          What We Offer
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {service.whatWeOffer.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Our Process */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Our Process
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          {service.process.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Why Choose Us
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {service.whyChooseUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </section>

      {/* Technologies */}
      {service.technologies && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech, index) => (
              <span key={index} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}