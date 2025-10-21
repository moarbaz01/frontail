"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IntersectionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const IntersectionWrapper = ({ 
  children, 
  className = "", 
  delay = 0 
}: IntersectionWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{
        duration: 0.2,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default IntersectionWrapper;