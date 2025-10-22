"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Palette,
  Code,
  CheckCircle,
  Rocket,
  Sparkles,
} from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "We understand your business goals and requirements.",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Design",
    description: "We create beautiful and user-friendly designs.",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Development",
    description: "We build your project with clean, efficient code.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Launch",
    description: "We launch your project and provide ongoing support.",
    icon: <Rocket className="w-6 h-6" />,
  },
];

const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="py-12 px-4">
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
              Our Process
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
            How We Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We follow a structured approach to ensure your project&apos;s
            success.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-xl p-6 border border-gray-300 mb-4 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="text-primary">{step.icon}</div>
                  </div>
                  <div className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    Step {step.id}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
