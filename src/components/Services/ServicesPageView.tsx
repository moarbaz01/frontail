"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/data";
import { CheckCircle } from "lucide-react";
import { ServiceVisual } from "@/components/Home/Services";

const ServicesPageView = () => {
  return (
    <div className="min-h-screen px-4 pt-28 pb-16 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-anton text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-normal"
          >
            Engineering & Product <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Founder-led product development services for MVPs, SaaS platforms, AI systems, mobile applications, and custom business software.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-screen-xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group bg-white rounded-md overflow-hidden border border-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 flex flex-col justify-between"
            >
              <div>
                <ServiceVisual id={service.id} icon={service.icon} />
                <div className="p-5">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 md:text-sm text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm"
                >
                  Explore {service.title}
                  <CheckCircle className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPageView;
