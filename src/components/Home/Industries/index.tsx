"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Landmark,
  Stethoscope,
  ShoppingCart,
  Building,
  GraduationCap,
  Gamepad2,
  Cloud,
  Truck,
} from "lucide-react";

const industries = [
  {
    name: "FinTech & Banking",
    icon: Landmark,
    iconColor: "#02569B",
  },
  {
    name: "Healthcare & MedTech",
    icon: Stethoscope,
    iconColor: "#E11D48",
  },
  {
    name: "E-commerce & Retail",
    icon: ShoppingCart,
    iconColor: "#16A34A",
  },
  {
    name: "Real Estate",
    icon: Building,
    iconColor: "#7C3AED",
  },
  {
    name: "Ed-Tech & E-learning",
    icon: GraduationCap,
    iconColor: "#EA580C",
  },
  {
    name: "Gaming & Entertainment",
    icon: Gamepad2,
    iconColor: "#C026D3",
  },
  {
    name: "SaaS & Cloud",
    icon: Cloud,
    iconColor: "#0D9488",
  },
  {
    name: "Logistics & Supply",
    icon: Truck,
    iconColor: "#475569",
  },
];

const Industries = () => {
  return (
    <section className="px-4 py-12 md:py-16 lg:py-20 ">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-anton text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-normal"
          >
            Industries We <span className="text-primary">Serve</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Crossing Industry Boundaries with Tailored Tech Solutions: Every industry is unique, and so are our solutions.
          </motion.p>
        </div>

        {/* Carousel / Grid Container */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4 lg:gap-5">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                className="group bg-white rounded-md overflow-hidden border border-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 flex flex-col items-center justify-center p-4 py-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Icon Container */}
                <div className="flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-full bg-primary/5 transition-transform duration-300 group-hover:scale-110 mb-4 md:mb-6">
                  <Icon
                    className="h-7 w-7 md:h-10 md:w-10 transition-colors duration-300 text-primary"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-sm md:text-lg font-bold text-gray-800 text-center">
                  {industry.name}
                </h3>
              </motion.div>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="btn-3d inline-block bg-primary text-white px-8 py-3 rounded-md font-semibold transition-transform hover:scale-105"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Industries;
