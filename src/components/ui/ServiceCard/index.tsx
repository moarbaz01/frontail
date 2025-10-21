"use client";
import { motion } from "framer-motion";
import SpotlightCard from "../SpotLightCard";
const ServiceCard = ({
  index,
  desc,
  title,
}: {
  index?: number;
  desc: string;
  title: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: (index || 0) * 0.3 }}
      className="backdrop-blur-lg  "
    >
      <SpotlightCard
        className="flex flex-col gap-2 bg-dot-white/20 p-6 rounded-lg border border-primary/10  min-h-[180px] "
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <p className="text-lg font-bold leading-relaxed">{title}</p>
        <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
          {desc}
        </p>
      </SpotlightCard>
    </motion.div>
  );
};

export default ServiceCard;
