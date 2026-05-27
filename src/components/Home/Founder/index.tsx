"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Twitter, Mail, Zap } from "lucide-react";
import Image from "next/image";

const FounderSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const skillVariants = {
    hidden: { scaleX: 0 },
    visible: (i: number) => ({
      scaleX: 1,
      transition: {
        duration: 0.8,
        delay: 0.3 + i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const skills = [
    { name: "UI/UX Design", level: 95 },
    { name: "Frontend Development", level: 90 },
    { name: "Backend Development", level: 85 },
    { name: "Project Management", level: 88 },
    { name: "Client Communication", level: 92 },
  ];

  return (
    <section id="founder" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0  opacity-80"></div>
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="1"
              ></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
        </svg>
      </div>

      <div className="max-w-screen-lg mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Image and decorative elements */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10 overflow-hidden rounded-md">
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                // className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-indigo-600 to-primary rounded-md overflow-hidden"
              >
                <Image
                  src="/founder/pic1.jpeg"
                  width={600}
                  height={800}
                  alt="Alex Morgan - Founder of Frontail"
                  className="object-cover w-full mix-blend-overlay opacity-90"
                />
              </motion.div>
            </div>

            {/* Decorative elements
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -left-6 top-1/4 w-12 h-12 rounded-full bg-primary bg-opacity-20 backdrop-blur-sm border border-indigo-500 border-opacity-30 z-0"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -bottom-8 left-1/4 w-20 h-20 rounded-full bg-primary bg-opacity-10 backdrop-blur-sm border border-purple-500 border-opacity-20 z-0"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute right-0 top-1/3 w-16 h-16 rounded-full bg-primary bg-opacity-10 backdrop-blur-sm border border-pink-500 border-opacity-20 z-0"
            ></motion.div> */}
          </motion.div>

          {/* Content */}
          <div>
            <motion.div variants={itemVariants} className="mb-2">
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary bg-opacity-20 text-white border border-gray-400 border-opacity-30">
                Meet Our Founder
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white"
            >
              Mohammed Arbaz
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4 mb-6"
            >
              <span className="text-lg text-white/80 font-light">
                Founder & Creative Director
              </span>
              <span className="flex items-center text-primary text-sm">
                <Zap size={16} className="mr-1" />
                Available for projects
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 mb-6 leading-relaxed"
            >
              <b> With 3+ years of hands-on experience</b> in digital design and
              full-stack development, Arbaz has been the driving force behind
              Frontail’s rise as a trusted agency for crafting outstanding
              digital experiences. His unique blend of technical skill and
              creative vision has helped businesses across diverse industries
              build impactful online presences.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 mb-8 leading-relaxed"
            >
              Driven by a passion for user-centric design and clean code, Arbaz
              believes digital products should do more than just look good —
              they should deliver real results. His commitment to quality and
              innovation has earned Frontail a strong reputation and glowing
              client reviews.
            </motion.p>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Expertise
              </h3>
              <div className="space-y-4 mb-8">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        custom={index}
                        variants={skillVariants}
                        className="h-full bg-gradient-to-r from-primary to-blue rounded-full"
                        style={{
                          originX: 0,
                          width: `${skill.level}%`,
                        }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-4 text-white">Connect</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/moarbaz01"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <Github size={18} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mohammed-arbaz-75998a268"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <Linkedin size={18} />
                </motion.a>

                <motion.a
                  href="mailto:uiforward8@gmail.com"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <Mail size={18} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
