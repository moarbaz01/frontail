"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, FileBadge, Award } from "lucide-react";

const badges = [

  {
    title: "Udyam Registered",
    subtitle: "Govt. of India",
    icon: FileBadge,
  },
  {
    title: "GST Approved",
    subtitle: "Regular Taxpayer",
    icon: FileCheck,
  },

];

const TrustBadges = () => {
  return (
    <section className="py-8 border-b border-gray-100">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-2 gap-x-2 gap-y-8 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-8 md:gap-16 lg:gap-32">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex items-center gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900">
                    {badge.title}
                  </span>
                  <span className="text-xs text-gray-500 font-medium mt-0.5">
                    {badge.subtitle}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
