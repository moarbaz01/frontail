"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Bug,
  CalendarDays,
  CheckCircle,
  Code,
  Headphones,
  Mail,
  MessageCircle,
  Palette,
  Truck,
  Video,
} from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Discovery Call",
    description: "We learn your vision and define a clear project strategy.",
    visual: "discovery",
  },
  {
    id: 2,
    title: "Design",
    description: "We shape clean screens and flows around your users.",
    visual: "design",
  },
  {
    id: 3,
    title: "Development",
    description: "We turn the design into clean, scalable code.",
    visual: "development",
  },
  {
    id: 4,
    title: "Testing",
    description: "We test for speed, bugs, responsiveness, and polish.",
    visual: "testing",
  },
  {
    id: 5,
    title: "Deployment",
    description: "We launch your product and keep the rollout smooth.",
    visual: "deployment",
  },
  {
    id: 6,
    title: "Post Support",
    description: "We monitor, support, and improve after launch.",
    visual: "support",
  },
];

const floatTransition = {
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

const ProcessVisual = ({ type }: { type: string }) => {
  if (type === "discovery") {
    const icons = [CalendarDays, Video, MessageCircle, Mail];

    return (
      <div className="relative h-44 overflow-hidden rounded-md bg-primary/5">
        <div className="absolute left-7 right-7 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute left-1/2 top-7 h-28 w-28 -translate-x-1/2 rounded-full border border-primary/10" />
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, index % 2 ? 5 : -5, 0] }}
              transition={{ ...floatTransition, delay: index * 0.15 }}
              className={`flex h-12 w-12 items-center justify-center rounded-md border bg-white shadow-sm ${
                index === 1
                  ? "border-primary text-primary"
                  : "border-gray-300 text-gray-500"
              }`}
            >
              <Icon className="h-5 w-5" />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "design") {
    return (
      <div className="relative h-44 overflow-hidden rounded-md bg-primary/5">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={floatTransition}
          className="absolute left-[calc(50%-6rem)] top-7 h-32 w-48 rounded-md border border-gray-300 bg-white p-4 shadow-sm"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="h-2 w-16 rounded-full bg-gray-200" />
            <Palette className="h-4 w-4 text-primary" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[0, 1, 2, 3].map((item) => (
              <motion.div
                key={item}
                animate={{ opacity: [0.55, 1, 0.55] }}
                transition={{ ...floatTransition, delay: item * 0.12 }}
                className={`h-8 rounded-md border ${
                  item === 1
                    ? "border-primary bg-primary/10"
                    : "border-gray-200 bg-gray-50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  if (type === "development") {
    return (
      <div className="relative h-44 overflow-hidden rounded-md bg-primary/5">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={floatTransition}
          className="absolute left-[calc(50%-6.5rem)] top-8 w-52 rounded-md border border-gray-300 bg-white shadow-sm"
        >
          <div className="flex gap-1 border-b border-dashed border-gray-300 bg-gray-100 px-4 py-3">
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-gray-600" />
          </div>
          <div className="space-y-2 p-5 font-mono text-[10px] text-gray-700">
            <p>
              function <span className="text-primary">buildApp</span>() {"{"}
            </p>
            <p className="pl-4">const ui = design;</p>
            <p className="pl-4">return cleanCode;</p>
            <p>{"}"}</p>
          </div>
        </motion.div>
      </div>
    );
  }

  if (type === "testing") {
    return (
      <div className="relative h-44 overflow-hidden rounded-md bg-primary/5">
        <div className="absolute left-1/2 top-20 h-24 w-48 -translate-x-1/2 rounded-t-full border border-b-0 border-dashed border-gray-300" />
        <div className="absolute left-1/2 top-[104px] h-12 w-24 -translate-x-1/2 rounded-t-full bg-gray-100" />
        {[...Array(20)].map((_, index) => (
          <span
            key={index}
            className="absolute left-1/2 top-20 h-4 w-px origin-bottom bg-primary/60"
            style={{
              transform: `rotate(${-80 + index * 8}deg) translateY(-70px)`,
            }}
          />
        ))}
        <motion.div
          animate={{ rotate: [-28, 18, -28] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[102px] h-20 w-0.5 origin-bottom bg-primary"
        />
        <div className="absolute left-1/2 top-[118px] flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-primary bg-white text-primary">
          <Bug className="h-3.5 w-3.5" />
        </div>
      </div>
    );
  }

  if (type === "deployment") {
    return (
      <div className="relative h-44 overflow-hidden rounded-md bg-primary/5">
        <div className="absolute inset-x-8 bottom-12 border-t border-dashed border-gray-300" />
        <motion.div
          animate={{ x: [-34, 34, -34] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-16 -translate-x-1/2 text-primary"
        >
          <Truck className="h-16 w-16 stroke-[1.5]" />
        </motion.div>
        <motion.div
          animate={{ opacity: [0.2, 0.65, 0.2], width: [34, 58, 34] }}
          transition={floatTransition}
          className="absolute left-1/2 top-[116px] h-2 -translate-x-1/2 rounded-full bg-primary/20"
        />
        <div className="absolute bottom-7 left-1/2 flex h-8 w-40 -translate-x-1/2 items-center justify-center rounded-md border border-gray-300 bg-white text-xs font-semibold text-gray-600">
          Production
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-44 overflow-hidden rounded-md bg-primary/5">
      <div className="absolute left-8 right-8 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-12 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-md border border-primary/30 bg-white text-primary shadow-sm"
      >
        <Headphones className="h-8 w-8 stroke-[1.5]" />
      </motion.div>
      <motion.div
        animate={{ opacity: [0.45, 1, 0.45] }}
        transition={floatTransition}
        className="absolute left-10 top-16 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm"
      >
        Fixes
      </motion.div>
      <motion.div
        animate={{ opacity: [1, 0.45, 1] }}
        transition={{ ...floatTransition, delay: 0.3 }}
        className="absolute right-10 top-24 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm"
      >
        Updates
      </motion.div>
      <div className="absolute bottom-7 left-1/2 flex h-8 w-40 -translate-x-1/2 items-center justify-center rounded-md border border-gray-300 bg-white text-xs font-semibold text-gray-600">
        Support Desk
      </div>
    </div>
  );
};

const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="px-4 py-12 md:py-16 lg:py-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-anton text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-normal"
          >
            How We <span className="text-primary">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            A simple, focused process from first call to post-launch support.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group bg-white rounded-md border border-gray-300 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                Step {String(step.id).padStart(2, "0")}
              </p>
              <ProcessVisual type={step.visual} />
              <div className="mt-6">
                <h3 className="font-anton text-lg font-bold uppercase text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
