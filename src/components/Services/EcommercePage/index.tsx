// components/EcommercePage.js
import ServiceCard from "@/components/ui/ServiceCard";
import React from "react";

const services = [
  {
    title: "Custom Shopping Cart Solutions",
    description:
      "We design intuitive shopping cart experiences that enhance customer satisfaction and increase conversions.",
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Securely process payments with popular gateways to ensure a seamless transaction experience for your customers.",
  },
  {
    title: "User-Friendly Product Catalog",
    description:
      "Create an engaging product catalog that is easy to navigate, making it simple for customers to find what they need.",
  },
  {
    title: "Responsive Design",
    description:
      "Our e-commerce platforms are fully responsive, ensuring a great user experience across all devices.",
  },
  {
    title: "SEO Optimization",
    description:
      "Optimize your e-commerce site for search engines to attract more organic traffic and increase visibility.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Utilize data analytics to track performance and make informed business decisions.",
  },
  {
    title: "Admin Panel Development",
    description:
      "We provide a robust admin panel that allows you to manage products, orders, and customer data efficiently. Gain complete control over your e-commerce platform with user roles and permissions.",
  },
];

const EcommercePage = () => {
  return (
    <section className="lg:min-h-screen py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Title Section */}
        <h1 className="md:text-4xl text-2xl font-bold text-center text-primary mb-2">
          E-commerce Development
        </h1>
        <p className="text-lg text-gray-400 text-center mb-12">
          Building robust and scalable e-commerce platforms tailored to your
          business needs.
        </p>

        {/* Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default EcommercePage;
