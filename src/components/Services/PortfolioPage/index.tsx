// components/PortfolioWebsitePage.js
import ServiceCard from "@/components/ui/ServiceCard";
import React from "react";

const features = [
  {
    title: "Custom Layouts",
    description: "Unique designs that reflect your personal style.",
  },
  {
    title: "Image Galleries",
    description: "Showcase your work with stunning galleries.",
  },
  {
    title: "Client Testimonials",
    description: "Build trust with real feedback from your clients.",
  },
  {
    title: "Blog Integration",
    description: "Share your thoughts and insights through a blog.",
  },
  {
    title: "SEO-Optimized",
    description: "Get found easily with our SEO best practices.",
  },
];

const PortfolioPage = () => {
  return (
    <section className="py-12 lg:min-h-screen">
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="md:text-4xl text-2xl font-bold text-center text-primary mb-2">
          Portfolio Website Development
        </h1>
        <p className="text-lg text-gray-400 mb-8 text-center">
          Showcase your work with a stunning portfolio website that highlights
          your skills and projects effectively.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ServiceCard
              key={index}
              title={feature.title}
              desc={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
