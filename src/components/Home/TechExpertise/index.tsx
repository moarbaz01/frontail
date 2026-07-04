"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiFlutter,
  SiMongodb,
  SiTailwindcss,
  SiShopify,
  SiStripe,
  SiTypescript,
} from "react-icons/si";
import GradientButton from "@/components/ui/GradientButton";

const col1 = [
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
];

const col2 = [
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Stripe", icon: SiStripe, color: "#008CDD" },
];

const col3 = [
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Shopify", icon: SiShopify, color: "#95BF47" },
];

const TechExpertise = () => {
  return (
    <section className="px-4 py-20 md:py-32">
      <div className="mx-auto max-w-5xl grid items-center gap-12 lg:gap-20 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left Side: Icons Grid */}
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="flex gap-4 md:gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 md:gap-6 mt-12 md:mt-16">
              {col1.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    className="group flex h-24 w-24 md:h-[110px] md:w-[110px] cursor-default flex-col items-center justify-center rounded-2xl md:rounded-[24px] bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Icon className="h-8 w-8 md:h-10 md:w-10 transition-transform duration-300 group-hover:scale-110" style={{ color: tech.color }} />
                    <span className="mt-3 text-xs md:text-[13px] font-semibold text-gray-800">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 md:gap-6">
              {col2.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    className="group flex h-24 w-24 md:h-[110px] md:w-[110px] cursor-default flex-col items-center justify-center rounded-2xl md:rounded-[24px] bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <Icon className="h-8 w-8 md:h-10 md:w-10 transition-transform duration-300 group-hover:scale-110" style={{ color: tech.color }} />
                    <span className="mt-3 text-xs md:text-[13px] font-semibold text-gray-800">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 md:gap-6 mt-12 md:mt-16">
              {col3.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    className="group flex h-24 w-24 md:h-[110px] md:w-[110px] cursor-default flex-col items-center justify-center rounded-2xl md:rounded-[24px] bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <Icon className="h-8 w-8 md:h-10 md:w-10 transition-transform duration-300 group-hover:scale-110" style={{ color: tech.color }} />
                    <span className="mt-3 text-xs md:text-[13px] font-semibold text-gray-800">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="order-1 lg:order-2 mx-auto max-w-md text-center lg:mx-0 lg:text-left">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Frontail Technologies
          </p>
          <h2 className="mt-3 text-4xl md:text-[42px] font-extrabold leading-tight tracking-tight text-gray-900">
            Our Tech Expertise
          </h2>
          <p className="mt-5 text-base md:text-[15px] leading-relaxed text-gray-500">
            Driven by Expertise, Powered by Passion: With our deep technical expertise and a heartfelt commitment to your success, we build tech solutions that truly make a difference across Web, App, and E-commerce.
          </p>

        </div>
      </div>
    </section>
  );
};

export default TechExpertise;
