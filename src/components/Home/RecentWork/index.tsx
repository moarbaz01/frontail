"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Digir Innovations",
    description: "A web application for a company that provides various services related to the field of technology and innovation.",
    image: "/digir.png",
    link: "https://digirinnovations.com",
  },
  {
    id: 2,
    title: "Zoland Store",
    description: "A gaming top-up Web Application, where you can purchase diamonds and coins of your favourite online games in discount",
    image: "/zoland_store_project.png",
    link: "https://zoland.in",
  },
  {
    id: 3,
    title: "Oh Shakes : Cafe",
    description: "Oh shakes is a cafe website where customers can explore the features of Oh Shakes",
    image: "/oh-shakes.png",
    link: "https://ohshakes.vercel.app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block relative mb-2"
          >
            <Sparkles className="text-gray-600 absolute -top-6 -left-6" size={24} />
            <span className="text-sm uppercase tracking-widest text-gray-800 font-mono">
              Recent Work
            </span>
            <Sparkles className="text-gray-600 absolute -top-6 -right-6" size={24} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-bold mb-4 text-gray-800"
          >
            Our Recent Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explore our portfolio to see the projects we&apos;ve worked on.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden border border-gray-300 hover:border-gray-400 transition-colors"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  View Project
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/work"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors"
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