"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { services } from "@/data";

const Services = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayedServices = isMobile ? services.slice(0, 4) : services.slice(0, 8);
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
            <Sparkles
              className="text-gray-600 absolute -top-6 -left-6"
              size={24}
            />
            <span className="text-sm uppercase tracking-widest text-gray-800 font-mono">
              Our Services
            </span>
            <Sparkles
              className="text-gray-600 absolute -top-6 -right-6"
              size={24}
            />
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
            We provide comprehensive digital solutions to help your business
            grow online.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
          {displayedServices?.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-300 hover:border-gray-400 transition-colors text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-primary">{service.icon}</div>
              </div>
              <h3 className="md:text-xl text-md font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 md:text-sm text-xs">
                {service.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(`/services/${service.id}`)}
                className="mt-6 text-primary font-medium hover:underline text-sm"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/services')}
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
          >
            View All Services
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services;
