"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  FileBadge,
  FileCheck,
  Globe,
  Layers,
  LayoutDashboard,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";

const floatTransition = {
  duration: 3.8,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

const whatWeBuild = [
  {
    icon: Globe,
    title: "SaaS Platforms",
    description: "Multi-tenant products, dashboards, subscriptions, and APIs.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "React Native and Flutter apps for Android and iOS launches.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards",
    description: "Admin panels, CRMs, reporting tools, and internal workflows.",
  },
  {
    icon: BrainCircuit,
    title: "Automation",
    description: "AI tools and workflow automation for growing operations.",
  },
];

const reasons = [
  { icon: Zap, title: "Fast MVP delivery", detail: "Focused launch scope" },
  { icon: Layers, title: "Scalable architecture", detail: "Built to grow" },
  { icon: Rocket, title: "Product-first build", detail: "Not just code" },
  { icon: MessageCircle, title: "Founder communication", detail: "Direct updates" },
];

const trustBadges = [
  {
    icon: FileBadge,
    title: "Udyam Registered",
    subtitle: "Govt. of India Certified",
  },
  {
    icon: FileCheck,
    title: "GST Verified Business",
    subtitle: "Regular taxpayer",
  },
  {
    icon: ShieldCheck,
    title: "India-Based Studio",
    subtitle: "Remote worldwide delivery",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

const FounderVisual = () => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="show"
    className="relative"
  >
    <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-primary/15 blur-3xl" />
    <div className="absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-sky-300/20 blur-3xl" />

    <div className="relative overflow-hidden rounded-md border border-gray-300 bg-white p-3 shadow-sm">
      <div className="relative overflow-hidden rounded-md bg-[#fff7ef]">
        <Image
          src="/founder-2.jpeg"
          alt="Mohammed Arbaz, founder of Frontail Technology"
          width={720}
          height={860}
          priority
          sizes="(min-width: 1024px) 420px, 100vw"
          className="h-[360px] w-full object-cover object-top md:h-[430px]"
        />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={floatTransition}
          className="absolute left-4 top-4 rounded-md border border-white/70 bg-white/90 px-3 py-2 shadow-sm backdrop-blur"
        >
          <p className="text-xs font-bold text-gray-900">
            Founder-led delivery
          </p>
          <p className="mt-0.5 text-[11px] text-gray-500">
            Reviewed in-house
          </p>
        </motion.div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ ...floatTransition, delay: 0.25 }}
          className="absolute bottom-4 right-4 rounded-md border border-primary/20 bg-white/90 px-3 py-2 text-xs font-bold text-primary shadow-sm backdrop-blur"
        >
          Full-stack product builder
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const BuildVisual = () => (
  <div className="flex h-full min-h-[300px] items-center justify-center">
    <Image
      src="/mockup/about.png"
      alt="Frontail software product mockup"
      width={820}
      height={620}
      sizes="(min-width: 1024px) 400px, 100vw"
      className="w-full max-w-[500px] object-contain"
    />
  </div>
);

export default function AboutContent() {
  return (
    <main className="bg-[#f7f3eb] text-gray-900 antialiased">
      <section className="relative overflow-hidden px-4 pb-10 pt-28 md:pb-12 md:pt-32">
        <div className="absolute inset-0 bg-grid-black/[0.035]" />
        <div className="absolute left-1/2 top-12 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#f7f3eb]" />

        <div className="relative z-10 mx-auto grid max-w-screen-xl items-center gap-8 lg:grid-cols-[1fr_0.86fr]">
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-xs font-bold uppercase tracking-widest text-primary"
            >
              About Frontail Technology
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="show"
              className="mt-3 font-anton text-4xl font-extrabold leading-tight tracking-normal text-gray-900 md:text-5xl"
            >
              Software built by a developer who thinks like a product founder.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="show"
              className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600"
            >
              Frontail Technology is led by Mohammed Arbaz (ABR), a full-stack
              developer who has worked on real-world ed-tech, B2B, B2C, and
              multi-tenant platforms.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="show"
              className="mt-6 flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="btn-3d inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-white"
              >
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-900 hover:text-primary"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate="show"
              className="mt-7 grid grid-cols-3 gap-3"
            >
              {["MVPs", "SaaS", "Mobile Apps"].map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-gray-300 bg-white/80 px-3 py-3 text-center text-xs font-bold text-gray-700 shadow-sm backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          <FounderVisual />
        </div>
      </section>

      <section className="px-4 py-10 md:py-12">
        <div className="mx-auto grid max-w-screen-xl gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <BuildVisual />

          <div className="rounded-md border border-gray-300 bg-white p-5 shadow-sm md:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              What we build
            </p>
            <h2 className="mt-2 font-anton text-3xl font-extrabold tracking-normal text-gray-900 md:text-4xl">
              Systems, not just screens.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
              We focus on products that can actually operate after launch:
              dashboards, mobile apps, SaaS platforms, APIs, and automation
              tools.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {whatWeBuild.map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="rounded-md border border-gray-200 bg-[#f7f3eb] p-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/20 bg-white text-primary">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-gray-900">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-gray-600">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-10 md:py-12">
        <div className="absolute inset-0 bg-dot-black/[0.05]" />
        <div className="relative z-10 mx-auto grid max-w-screen-xl gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-md border border-gray-300 bg-white/85 p-5 shadow-sm backdrop-blur md:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Our story
            </p>
            <h2 className="mt-2 font-anton text-3xl font-extrabold tracking-normal text-gray-900">
              Frontail started with one clear belief.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
              Many teams get beautiful pages but weak product foundations. We
              build with architecture, workflows, performance, and real users in
              mind from the first version.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, detail }, index) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-md border border-gray-300 bg-white p-4 shadow-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-bold text-gray-900">{title}</p>
                <p className="mt-1 text-xs font-semibold text-primary">
                  {detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:py-12">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-5 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" strokeWidth={1.75} />
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-700">
              Trust & Compliance
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {trustBadges.map(({ icon: Icon, title, subtitle }, index) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-4 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{title}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
