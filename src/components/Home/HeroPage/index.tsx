"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Chip } from "@/components/ui/Chip";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import AnimatedTooltip from "@/components/ui/AnimatedTooltip";

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

const gridTiles = [
  { left: "12%", top: "58%", size: "3.4rem", delay: 0 },
  { left: "25%", top: "31%", size: "2rem", delay: 0.25 },
  { left: "37%", top: "49%", size: "2.6rem", delay: 0.5 },
  { left: "51%", top: "68%", size: "3rem", delay: 0.15 },
  { left: "63%", top: "37%", size: "2.2rem", delay: 0.4 },
  { left: "77%", top: "55%", size: "3.3rem", delay: 0.65 },
  { left: "88%", top: "72%", size: "2.7rem", delay: 0.3 },
];

const AnimatedHeroBackground = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#f7f3eb]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(254,125,2,0.14),transparent_32%),linear-gradient(to_bottom,#f7f3eb_0%,rgba(247,243,235,0.5)_56%,#f7f3eb_100%)]" />
      <div className="absolute left-1/2 top-28 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#f7f3eb]/95 via-[#f7f3eb]/55 to-transparent" />

      <motion.div
        className="absolute inset-x-[-18%] bottom-[-31%] h-[70%] origin-bottom [transform:perspective(820px)_rotateX(58deg)]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -8, 0],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-85 [mask-image:linear-gradient(to_top,black_0%,black_72%,transparent_100%)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(82, 72, 124, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(82, 72, 124, 0.2) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  backgroundPosition: ["0px 0px", "64px 64px"],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {gridTiles.map((tile, index) => (
          <motion.span
            key={`${tile.left}-${tile.top}`}
            className="absolute rounded-sm bg-primary shadow-[0_0_34px_rgba(254,125,2,0.28)]"
            style={{
              left: tile.left,
              top: tile.top,
              width: tile.size,
              height: tile.size,
              opacity: 0.7,
            }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.24, 0.62, 0.28],
                    y: [0, index % 2 === 0 ? -14 : 12, 0],
                  }
            }
            transition={{
              duration: 4.5,
              delay: tile.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent via-[#f7f3eb]/55 to-[#f7f3eb]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_62%,#f7f3eb_100%)]" />
    </div>
  );
};

const HeroPage = () => {
  const router = useRouter();
  return (
    <section className="w-full md:min-h-screen  lg:pt-44   md:pb-16 pt-32 pb-32 flex items-start justify-center px-4 relative overflow-hidden">
      <AnimatedHeroBackground />

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
