"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Database, Lock, Rocket, Server, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { services } from "@/data";

const floatTransition = {
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export const ServiceVisual = ({
  id,
  icon,
}: {
  id: number;
  icon: React.ReactNode;
}) => {
  if (id === 1) {
    return (
      <div className="relative h-44 overflow-hidden rounded-t-md bg-primary/5">
        <div className="absolute left-8 right-8 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={floatTransition}
          className="absolute left-1/2 top-9 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-md border border-primary/30 bg-white text-primary shadow-sm"
        >
          <Rocket className="h-8 w-8 stroke-[1.5]" />
        </motion.div>
        <div className="absolute bottom-8 left-1/2 grid w-44 -translate-x-1/2 grid-cols-3 gap-2">
          {["Idea", "MVP", "Live"].map((item, index) => (
            <motion.div
              key={item}
              animate={{ y: [0, index === 1 ? -5 : 5, 0] }}
              transition={{ ...floatTransition, delay: index * 0.14 }}
              className="rounded-md border border-gray-300 bg-white px-2 py-2 text-center text-xs font-semibold text-gray-700 shadow-sm"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (id === 2) {
    return (
      <div className="relative h-44 overflow-hidden rounded-t-md bg-primary/5">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={floatTransition}
          className="absolute left-[calc(50%-6.5rem)] top-8 w-52 rounded-md border border-gray-300 bg-white shadow-sm"
        >
          <div className="flex items-center gap-1 border-b border-gray-200 bg-gray-50 px-4 py-3">
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </div>
          <div className="grid grid-cols-2 gap-2 p-4">
            <div className="h-12 rounded-md bg-primary/10" />
            <div className="h-12 rounded-md bg-gray-100" />
            <div className="col-span-2 h-8 rounded-md bg-gray-100" />
          </div>
        </motion.div>
        <motion.div
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={floatTransition}
          className="absolute bottom-8 left-8 flex items-center gap-1 rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-700 shadow-sm"
        >
          <Server className="h-3.5 w-3.5 text-primary" />
          API
        </motion.div>
        <motion.div
          animate={{ opacity: [1, 0.45, 1] }}
          transition={{ ...floatTransition, delay: 0.25 }}
          className="absolute bottom-8 right-8 flex items-center gap-1 rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-700 shadow-sm"
        >
          <Database className="h-3.5 w-3.5 text-primary" />
          Data
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative h-44 overflow-hidden rounded-t-md bg-primary/5">
      <div className="absolute left-8 right-8 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={floatTransition}
        className="absolute left-1/2 top-9 h-28 w-40 -translate-x-1/2 rounded-md border border-gray-300 bg-white p-3 shadow-sm"
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="h-2 w-12 rounded-full bg-primary" />
          <span className="h-6 w-6 rounded-md bg-primary/10" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-12 rounded-md bg-primary/10" />
          <div className="space-y-2">
            <div className="h-2 rounded-full bg-gray-200" />
            <div className="h-2 w-10 rounded-full bg-gray-200" />
            <div className="h-6 rounded-md bg-gray-100" />
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ ...floatTransition, delay: 0.15 }}
        className="absolute left-12 bottom-9 h-16 w-24 rounded-md border border-gray-300 bg-white p-2 shadow-sm"
      >
        <div className="mb-2 h-2 w-10 rounded-full bg-primary/70" />
        <div className="h-8 rounded-md bg-gray-100" />
      </motion.div>
      <motion.div
        animate={{ x: [-8, 8, -8] }}
        transition={floatTransition}
        className="absolute right-12 bottom-10 flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-700 shadow-sm"
      >
        <Lock className="h-4 w-4" />
        Store Ready
      </motion.div>
    </div>
  );
};

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
      <div className="max-w-screen-lg mx-auto">
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
            className="text-3xl md:text-5xl font-bold mb-4 text-gray-800"
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 max-w-screen-lg mx-auto">
          {displayedServices?.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-md overflow-hidden border border-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              <ServiceVisual id={service.id} icon={service.icon} />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 md:text-sm text-xs">
                  {service.description}
                </p>

                <button
                  onClick={() => router.push(`/services/${service.id}`)}
                  className="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm"
                >
                  Learn More
                  <CheckCircle className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {/* <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/services')}
            className="btn-3d bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-dark"
          >
            View All Services
          </motion.button>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
