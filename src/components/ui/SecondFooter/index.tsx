"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { NoiseTexture } from "../noise-texture";
import { useEffect } from "react";

const SecondFooter = () => {
  const router = useRouter();
  const pathname = usePathname();

  if (
    [
      "/small-business-website-global",
      "/small-business-website-india",
    ].includes(pathname)
  )
    return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, amount: 0.1 }}
      className="relative mx-4 mb-4 overflow-hidden rounded-md border border-gray-300 bg-[#f7f3eb] bg-dot-black/[0.12] py-10 md:py-16 md:max-w-screen-lg md:mx-auto"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7f3eb] via-[#f7f3eb]/90 to-primary/15" />
      <NoiseTexture
        frequency={0.7}
        octaves={4}
        slope={0.12}
        noiseOpacity={0.45}
        className="opacity-[0.16] mix-blend-multiply"
      />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-screen-lg px-5 text-center md:px-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-primary/20 bg-white/70 px-3 py-2 text-xs font-bold uppercase tracking-widest text-primary md:mb-5">
          <Sparkles className="h-4 w-4" />
          Build With Frontail
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="font-anton text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl"
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
          className="mx-auto mt-3 max-w-xl text-center text-sm text-gray-600 md:mt-5 md:text-lg"
        >
          Share your idea and we&apos;ll help you map the fastest path to
          launch.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          onClick={() => router.push("/start-project")}
          className="btn-3d mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-primary/80 md:mt-8 md:px-8 md:text-base"
        >
          <Code2 className="h-5 w-5" />
          Start Your Project
        </motion.button>
      </div>
    </motion.section>
  );
};

export default SecondFooter;
