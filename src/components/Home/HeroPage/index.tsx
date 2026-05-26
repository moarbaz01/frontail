"use client";
import { motion } from "framer-motion";
import { Chip } from "@/components/ui/Chip";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

// Variants for hero section animations
const heroVariants = {
  closed: { opacity: 0, y: 20 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" },
  }),
};

const HeroPage = () => {
  const router = useRouter();
  return (
    <section className="w-full md:min-h-[86vh] bg-grid-black/5 md:pt-28 md:pb-16 pt-24 pb-12 flex items-center justify-center px-4 relative overflow-hidden">
      {/* <div
        className="absolute inset-0 -z-10"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 60%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full opacity-80 object-cover"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
      </div> */}
      <div className="mb-8 flex items-center relative text-center flex-col z-10">
        {/* Tagline */}
        <motion.div
          custom={0}
          variants={heroVariants}
          initial="closed"
          animate="open"
          className="w-fit rounded-full bg-white "
        >
          <Chip text="✨ For Startups & SMEs. Fast, Scalable, AI-Ready." />
        </motion.div>

        {/* Heading */}
        <motion.div
          custom={1}
          variants={heroVariants}
          initial="closed"
          animate="open"
          className="max-w-7xl mx-4 md:mx-0"
        >
          <h1 className="lg:text-8xl font-anton   text-center text-gray-800 text-4xl mt-4 md:text-5xl font-extrabold leading-snug tracking-normal lg:leading-tight">
            Launch Your App <span className="text-primary">Faster</span>
            <br />
            Than You <span className="text-primary">Think</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-600 md:text-lg">
            We help founders and small teams turn ideas into polished MVPs,
            web apps, and mobile-ready products.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={2}
          variants={heroVariants}
          initial="closed"
          animate="open"
          className="flex flex-col sm:flex-row items-center mt-6 gap-4"
        >
          <button
            onClick={() => router.push("/contact")}
            className="btn-3d py-3 font-bold px-6 bg-primary text-white rounded-md inline-flex items-center gap-2"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => router.push("#process")}
            className="rounded-md border border-gray-300 bg-white px-6 py-3 font-bold text-gray-800 transition-colors hover:border-primary/40 hover:text-primary"
          >
            See Process
          </button>
        </motion.div>

        <motion.div
          custom={3}
          variants={heroVariants}
          initial="closed"
          animate="open"
          className="mt-8 grid grid-cols-3 gap-3 text-center"
        >
          {["20+ Projects", "4+ Countries", "Fast MVPs"].map((item) => (
            <div
              key={item}
              className="rounded-md border border-gray-300 bg-white/70 px-4 py-3 text-xs font-bold text-gray-800 backdrop-blur"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroPage;
