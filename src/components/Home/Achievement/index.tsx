"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Globe, Briefcase, Sparkles } from "lucide-react";

interface Achievement {
  id: number;
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    icon: <Award size={24} />,
    title: "Projects Completed",
    value: "20+",
    description: "Completed projects with clients worldwide.",
  },
  {
    id: 2,
    icon: <Users size={24} />,
    title: "Happy Clients",
    value: "20+",
    description: "Satisfied clients worldwide.",
  },
  {
    id: 3,
    icon: <Globe size={24} />,
    title: "Countries",
    value: "4+",
    description: "Countries with clients.",
  },
  {
    id: 4,
    icon: <Briefcase size={24} />,
    title: "Years of Experience",
    value: "3+",
    description: "Years of experience in the industry.",
  },
];

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-12">
      <div className="max-w-screen-lg mx-auto px-4">
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
              Our Impact
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
            className="text-3xl md:text-5xl font-bold mb-4 text-gray-800"
          >
            Our Achievements
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Delivering exceptional digital experiences with cutting-edge
            technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-md p-6 border border-gray-300 text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-primary">{achievement.icon}</div>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2">
                {achievement.value}
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-sm hidden md:block">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
