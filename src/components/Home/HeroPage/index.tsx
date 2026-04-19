"use client";
import { motion } from "framer-motion";
import { Chip } from "@/components/ui/Chip";
import { useRouter } from "next/navigation";

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
    <section className="w-full md:min-h-[90vh] md:py-10 py-10 flex items-center justify-center px-4 relative overflow-hidden">
      <div
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
      </div>
      <div className="md:mt-0 mt-16 mb-8 flex items-center relative text-center flex-col z-10">
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
          {/* <div>
            <Image
              src="/logo.svg"
              alt="Frontail Logo"
              width={300}
              height={300}
              className="inline md:h-[150px] h-[96px]"
            />
          </div> */}
        </motion.div>

        {/* CTA */}
        <div className="flex items-center mt-4 gap-4">
          <button
            onClick={() => router.push("/contact")}
            className="py-3 font-bold px-6 bg-primary text-white rounded-full"
          >
            Get a qoute
          </button>
          {/* <button className="bg-white flex gap-2 items-center border py-3 px-6 rounded-full">
            <span>View portfolio</span> <ArrowRight />
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
