"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Globe, Sparkles, Users } from "lucide-react";

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
    <section id="achievements" className="px-4 py-12 md:py-16">
      <div className="relative mx-auto max-w-screen-xl overflow-hidden rounded-md border border-gray-300 bg-white shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-dot-black/[0.035]" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-[90px]" />
        <div className="relative grid grid-cols-1 gap-0 lg:grid-cols-[0.72fr_1.28fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-b border-gray-200 p-6 md:p-8 lg:border-b-0 lg:border-r"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Proof
            </div>
            <h2 className="mt-4 font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
              Small team, focused results
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
              We keep the process lean, ship polished products, and stay close
              to the business goal behind every build.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-px bg-gray-200 md:grid-cols-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative min-h-48 bg-white p-5 transition hover:bg-[#fff8f1] md:p-6"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-primary/15 bg-primary/10 text-primary transition group-hover:scale-105">
                  {achievement.icon}
                </div>
                <div className="font-anton text-4xl font-extrabold tracking-normal text-gray-900">
                  {achievement.value}
                </div>
                <h3 className="mt-2 text-sm font-extrabold text-gray-900">
                  {achievement.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600">
                  {achievement.description}
                </p>
                <span className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
