"use client";
import { TextHoverEffect } from "@/components/ui/TextHoverEffect";
import { motion } from "framer-motion";

const BigText = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className=" max-w-screen-2xl w-full mx-auto"
    >
      <TextHoverEffect automatic duration={1000} text="Frontail" />
    </motion.div>
  );
};

export default BigText;
