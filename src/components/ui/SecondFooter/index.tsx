"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";

const SecondFooter = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, amount: 0.1 }}
      className="relative mx-4 mb-4 overflow-hidden rounded-md border border-gray-300 bg-[#f7f3eb] bg-dot-black/[0.12] py-16 md:max-w-screen-lg md:mx-auto"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7f3eb] via-[#f7f3eb]/90 to-primary/15" />
      <div className="absolute -left-20 top-8 h-56 w-56 rounded-full border border-primary/20" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-screen-lg px-5 text-center md:px-10">
        <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-primary/20 bg-white/70 px-3 py-2 text-xs font-bold uppercase tracking-widest text-primary">
          <Sparkles className="h-4 w-4" />
          Build With Frontail
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="font-anton text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl"
        >
          Ready to Build
          <br />
          Your MVP?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto mt-5 max-w-xl text-center text-sm text-gray-600 md:text-lg"
        >
          Share your idea and we&apos;ll help you map the fastest path to
          launch.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          onClick={() =>
            window.open(
              "https://wa.me/918741035190",
              "_blank",
              "width=800,height=600",
            )
          }
          className="btn-3d mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 font-bold text-white hover:bg-primary/80"
        >
          <Code2 className="h-5 w-5" />
          Start Your Project
        </motion.button>
      </div>
    </motion.section>
  );
};

export default SecondFooter;
