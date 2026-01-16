"use client";
import { Marquee } from "@/components/ui/Marque";
import Image from "next/image";
import { motion } from "framer-motion";

import { projectImages } from "@/utils/imageOptimization";

const projects = Array.from(Object.entries(projectImages)).map(([key, value]) => ({
  image: value,
}));

// Variants for each project card
const cardVariants = {
  closed: { opacity: 0, y: 20 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" },
  }),
};

const ProjectShowcase = () => {
  return (
    <div className="relative">
      {/* Gradient overlays */}
      {/* <div className="pointer-events-none absolute z-[50] inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/70"></div> */}
      {/* <div className="pointer-events-none absolute inset-y-0 z-[50] right-0 w-1/4 bg-gradient-to-l from-black/70"></div> */}

      <Marquee
        reverse
        pauseOnHover
        className="[--duration:30s] md:[--duration:50s]"
        repeat={2}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-md relative border-[5px] border-gray-300 shadow-sm"
            custom={index}
            variants={cardVariants}
            initial="closed"
            animate="open"
          >
            <Image
              src={project.image}
              alt={`Project ${index + 1}`}
              width={400}
              height={500}
              loading="lazy"
              quality={80}
              sizes="(max-width: 768px) 100vw, 400px"
              className="h-[280px] w-full object-cover md:h-[500px] md:w-full will-change-transform"
            />
          </motion.div>
        ))}
      </Marquee>
    </div>
  );
};

export default ProjectShowcase;
