"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ProjectRow from "@/components/ui/ProjectRow";
import { projectsData } from "@/data";

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full py-12 md:py-16 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-anton text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-normal"
          >
            Our Recent <span className="text-primary">Work</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            A quick look at products we have designed and built.
          </motion.p>
        </div>

        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 2).map((project, index) => (
            <ProjectRow project={project} index={index} key={project.title} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="/projects"
            className="btn-3d inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90"
          >
            View All Projects
            <ExternalLink size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
