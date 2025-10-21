// components/LandingPage.js
import ServiceCard from "@/components/ui/ServiceCard";
import React from "react";

const features = [
  {
    title: "Compelling Headlines",
    description: "Attract visitors with captivating and clear messaging.",
  },
  {
    title: "Call-to-Action Buttons",
    description: "Encourage conversions with strategic CTA placement.",
  },
  {
    title: "A/B Testing",
    description: "Optimize performance by testing different page variations.",
  },
  {
    title: "Analytics Integration",
    description: "Track user behavior to make data-driven decisions.",
  },
  {
    title: "Mobile-Friendly Design",
    description: "Ensure a seamless experience for all users on any device.",
  },
];

const LandingPage = () => {

  return (
    <section className="py-12 lg:min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="md:text-4xl text-2xl font-bold text-center text-primary mb-2">
          Landing Page Design
        </h1>
        <p className="text-lg text-gray-400 mb-8 text-center">
          Create impactful landing pages that drive conversions and engage your
          audience, optimized for your marketing goals.
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

export default LandingPage;
