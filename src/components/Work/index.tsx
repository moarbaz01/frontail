"use client";

import React from "react";
import ProjectCard from "../ui/ProjectCard";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { projectsData } from "@/data";
import { containerVariants } from "@/varients";

const Work = () => {
  return (
    <section className="min-h-screen py-12 md:px-6 px-4">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="inline-block relative mb-2"
          >
            <Sparkles
              className="text-gray-600 absolute -top-6 -left-6"
              size={24}
            />
            <span className="text-sm uppercase tracking-widest text-gray-800 font-mono">
              Our Work
            </span>
            <Sparkles
              className="text-gray-600 absolute -top-6 -right-6"
              size={24}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 tracking-tight"
          >
            How We Work
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-primary mx-auto mb-6"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto font-light"
          >
            We follow a structured approach to ensure your project&apos;s
            success. From discovery to launch, we provide end-to-end solutions.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectsData.map((project, index) => (
            <ProjectCard project={{ ...project, index }} key={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
