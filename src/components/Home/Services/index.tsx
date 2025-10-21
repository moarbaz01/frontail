"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, ShoppingCart, Globe, Sparkles } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites built with modern technologies for optimal performance.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Beautiful, user-friendly designs that convert visitors into customers.",
    icon: <Palette className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "E-Commerce Solutions",
    description: "Complete online stores with secure payment processing and inventory management.",
    icon: <ShoppingCart className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs and requirements.",
    icon: <Globe className="w-8 h-8" />,
  },
];

const Services = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block relative mb-2"
          >
            <Sparkles className="text-gray-600 absolute -top-6 -left-6" size={24} />
            <span className="text-sm uppercase tracking-widest text-gray-800 font-mono">
              Our Services
            </span>
            <Sparkles className="text-gray-600 absolute -top-6 -right-6" size={24} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-bold mb-4 text-gray-800"
          >
            What We Offer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We provide comprehensive digital solutions to help your business grow online.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-300 hover:border-gray-400 transition-colors text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-primary">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;