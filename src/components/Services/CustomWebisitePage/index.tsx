// components/CustomWebsiteServices.js
import ServiceCard from "@/components/ui/ServiceCard";
import React from "react";

const services = [
  {
    title: "Personalized Design",
    description:
      "We create unique and visually appealing designs tailored to your brand identity, ensuring a memorable user experience.",
  },
  {
    title: "Feature-Rich Functionality",
    description:
      "From custom plugins to advanced integrations, we provide features that enhance user engagement and meet specific business needs.",
  },
  {
    title: "Content Management System (CMS)",
    description:
      "Easily manage your content with a user-friendly CMS that allows you to update your website without technical expertise.",
  },
  {
    title: "E-commerce Capabilities",
    description:
      "Build a fully functional online store with payment gateway integration, inventory management, and user-friendly shopping experiences.",
  },
  {
    title: "Performance Optimization",
    description:
      "We ensure your website is fast, responsive, and optimized for all devices, leading to better user satisfaction and SEO rankings.",
  },
  {
    title: "Analytics and Reporting",
    description:
      "Get insights into user behavior and site performance with integrated analytics tools, enabling data-driven decisions for your business.",
  },
];

const CustomWebsitePage = () => {
  return (
    <section className="py-12  lg:min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="md:text-4xl text-2xl font-bold text-center text-primary mb-2">
          Custom Website Services
        </h1>
        <p className="text-lg text-gray-400 text-center mb-8">
          Our custom website services offer tailored solutions to elevate your
          online presence and meet your business goals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              desc={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomWebsitePage;
