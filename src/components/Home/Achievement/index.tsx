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
    value: "50+",
    description: "Completed projects with clients worldwide.",
  },
  {
    id: 2,
    icon: <Users size={24} />,
    title: "Happy Clients",
    value: "50+",
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
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-8 flex flex-col gap-5  items-center justify-center ">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mt-4 font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-5xl">
              Small team, <span className="text-primary">focused results</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="max-w-2xl text-sm leading-relaxed text-center text-gray-600 md:text-base"
          >
            We keep the process lean, ship polished products, and stay close to
            the business goal behind every build.
          </motion.p>
        </div>

        <div className="relative overflow-hidden ">
          <div className="pointer-events-none absolute inset-0 bg-dot-black/[0.035]" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-24 left-8 h-52 w-52 rounded-full bg-primary/5 blur-[80px]" />

          <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-md border border-gray-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/35 hover:bg-[#fff8f1] hover:shadow-md"
              >
                <span className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-anton text-4xl font-extrabold tracking-normal text-gray-900">
                      {achievement.value}
                    </div>
                    <h3 className="mt-2 text-sm font-extrabold text-gray-900">
                      {achievement.title}
                    </h3>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-primary/15 bg-primary/10 text-primary transition group-hover:scale-105">
                    {achievement.icon}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
