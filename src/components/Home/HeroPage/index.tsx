"use client";
import { motion } from "framer-motion";
import { Chip } from "@/components/ui/Chip";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import AnimatedTooltip from "@/components/ui/AnimatedTooltip";
import Image from "next/image";

const partners = [
  {
    id: 1,
    name: "CDR912",
    designation: "Service platform",
    image: "/partners/cdr912.webp",
  },
  {
    id: 2,
    name: "Master Topik",
    designation: "Learning app",
    image: "/partners/mastertopic.png",
  },
  {
    id: 3,
    name: "Vriya PMS",
    designation: "Property software",
    image: "/partners/vriyapms.png",
  },
  {
    id: 4,
    name: "Oh Shakes",
    designation: "Food business",
    image: "/partners/ohshakeslogo.png",
  },
  {
    id: 5,
    name: "Kirastore",
    designation: "Commerce brand",
    image: "/partners/kirastorelogo.png",
  },
];

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
    <section className="w-full md:min-h-screen  lg:pt-44   md:pb-16 pt-32 pb-32 flex items-start justify-center px-4 relative overflow-hidden">
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        priority
        quality={45}
        sizes="100vw"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 object-cover object-center opacity-45"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#f7f3eb]/78" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#f7f3eb]/45 via-[#f7f3eb]/80 to-[#f7f3eb]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-b from-transparent via-[#f7f3eb]/90 to-[#f7f3eb]" />
      <div className="pointer-events-none absolute   left-1/2 top-24 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

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
          className="max-w-screen-xl mx-4 md:mx-0"
        >
          <h1 className="lg:text-7xl   text-center text-gray-800 text-4xl mt-4 md:text-5xl font-extrabold leading-snug tracking-normal lg:leading-tight">
            Launch Your App <span className="text-primary">Faster</span>
            <br />
            Than You <span className="text-primary">Think</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-600 md:text-lg">
            We help founders and small teams turn ideas into polished MVPs, web
            apps, and mobile-ready products.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={2}
          variants={heroVariants}
          initial="closed"
          animate="open"
          className="flex  items-center mt-6 gap-4"
        >
          <button
            onClick={() => router.push("/start-project")}
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
          className="mt-12 flex flex-col items-center gap-3"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Trusted by growing teams
          </p>
          <div className="flex items-center justify-center pl-4">
            <AnimatedTooltip items={partners} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroPage;
