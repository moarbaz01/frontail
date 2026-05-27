"use client";

import React from "react";
import ProjectRow from "../ui/ProjectRow";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { projectsData } from "@/data";
import { containerVariants } from "@/varients";

const Work = () => {
  return (
    <section className="min-h-screen pt-28 pb-16 md:px-6 px-4 bg-grid-black/5 relative overflow-hidden">
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
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
            className="text-4xl md:text-5xl font-anton font-bold mb-4 text-gray-900 tracking-normal"
          >
            Our <span className="text-primary">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-4"
          >
            Explore some of our recent work. We build scalable, beautiful, and
            high-performance digital products for startups and enterprises.
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-6 pb-10">
          {projectsData.map((project, index) => (
            <ProjectRow project={project} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
