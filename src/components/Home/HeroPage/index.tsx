"use client";
import { motion } from "framer-motion";
import { CiLock, CiMobile1, CiSearch } from "react-icons/ci";
import { IoIosTrendingUp } from "react-icons/io";
import { Chip } from "@/components/ui/Chip";
import AnimatedTooltip from "@/components/ui/AnimatedTooltip";
import GradientButton from "@/components/ui/GradientButton";
import { ArrowRight } from "lucide-react";
import { logoImages } from "@/utils/imageOptimization";
import Image from "next/image";
import { useRouter } from "next/navigation";

const features = [
  { icon: <IoIosTrendingUp />, text: "Scalable Solutions" },
  { icon: <CiSearch />, text: "Modern Tech Stack" },
  { icon: <CiMobile1 />, text: "Full-Stack Development" },
  { icon: <CiLock />, text: "Secure & Reliable" },
];

const people = [
  { id: 1, name: "Digir Innovations", image: logoImages.digir },
  { id: 2, name: "KiraGame Store", image: logoImages.kira },
  { id: 3, name: "Inspired Events And Tours", image: logoImages.travel },
  { id: 4, name: "Oh Shakes", image: logoImages.ohshakes },
  { id: 5, name: "Geto Topup", image: logoImages.geto },
  { id: 6, name: "Zoland", image: logoImages.zoland },
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
    <section className=" md:min-h-[60vh]  md:py-6 py-10  flex items-center justify-center px-4 relative">
      <div className="md:mt-0 mt-4 mb-8 flex items-center relative text-center flex-col">
        {/* Tagline */}
        <motion.div
          custom={0}
          variants={heroVariants}
          initial="closed"
          animate="open"
          className="w-fit"
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

        {/* Features */}
        {/* <motion.div
          custom={2}
          variants={heroVariants}
          initial="closed"
          animate="open"
          className="flex items-center flex-wrap md:justify-start justify-center gap-4 mt-6"
        >
          {features.map((feature, index) => (
            <Chip key={index} {...feature} />
          ))}
        </motion.div> */}

        {/* Logos */}
        {/* <motion.div
          custom={3}
          variants={heroVariants}
          initial="closed"
          animate="open"
          className="flex items-center w-full justify-center gap-4 mt-6"
        >
          <AnimatedTooltip items={people} />
        </motion.div> */}

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
