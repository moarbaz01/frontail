"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  FileCheck,
  FileBadge,
  Zap,
  Layers,
  MessageCircle,
  Rocket,
  LayoutDashboard,
  Smartphone,
  BrainCircuit,
  Globe,
} from "lucide-react";

const whatWeBuild = [
  {
    icon: Globe,
    title: "SaaS Platforms",
    description: "End-to-end multi-tenant platforms built to scale from day one.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Cross-platform mobile apps with React Native & Flutter.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    description: "Operator-facing dashboards with clean data architecture.",
  },
  {
    icon: BrainCircuit,
    title: "Automation Systems",
    description: "Business workflows automated to save hours every week.",
  },
];

const whyFrontail = [
  { icon: Zap, title: "Fast MVP delivery", detail: "15–45 days" },
  { icon: Layers, title: "Clean scalable architecture", detail: "Built to grow" },
  { icon: Rocket, title: "Product-first mindset", detail: "Not just code" },
  { icon: MessageCircle, title: "Direct founder communication", detail: "No middlemen" },
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
    subtitle: "Regular Taxpayer",
  },
  {
    icon: ShieldCheck,
    title: "India-Based Digital Agency",
    subtitle: "Founded & operated in India",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" },
  }),
};

export default function AboutContent() {
  return (
    <main className="text-gray-900 antialiased">

      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="relative overflow-hidden border-b border-gray-200 px-4 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-dot-black/[0.06]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#f7f3eb]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-500 backdrop-blur-sm"
          >
            About Frontail Technologies
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="font-anton text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 md:text-6xl"
          >
            A serious product studio built for{" "}
            <span className="text-primary">scalable digital systems.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500"
          >
            We help startups and businesses turn ideas into SaaS platforms,
            mobile apps, and automation systems — with speed, clarity, and
            strong architecture.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/contact"
              className="btn-3d inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold text-white"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────── FOUNDER ─────────────────────────── */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-md border border-gray-300 shadow-sm"
            >
              <Image
                src="/founder-2.jpeg"
                alt="Arbaz Khan – founder of Frontail Technology"
                width={720}
                height={860}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full min-h-[420px] w-full object-cover object-top"
              />
              <div className="absolute left-4 top-4 rounded-lg border border-white/60 bg-white/90 px-3 py-2 shadow backdrop-blur-sm">
                <p className="text-xs font-bold text-gray-900">Founder-led delivery</p>
                <p className="mt-0.5 text-[11px] text-gray-500">Every project reviewed in-house</p>
              </div>
            </motion.div>

            {/* Text */}
            <div>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-widest text-primary"
              >
                Meet the founder
              </motion.p>

              <motion.h2
                variants={fadeUp}
                custom={1}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-3 font-anton text-3xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-4xl"
              >
                Built by a Developer Who Thinks Like a{" "}
                <span className="text-primary">Product Founder</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                custom={2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-5 text-base leading-relaxed text-gray-600"
              >
                Mohammed Arbaz is the founder of Frontail Technologies. He
                specializes in SaaS platforms, mobile applications, and
                business automation systems.
              </motion.p>

              <motion.p
                variants={fadeUp}
                custom={3}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-3 text-base leading-relaxed text-gray-600"
              >
                He is actively involved in architecture, UI/UX direction, and
                full-stack development — ensuring every product ships with
                performance and scalability built in.
              </motion.p>

              <motion.blockquote
                variants={fadeUp}
                custom={4}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-7 border-l-[3px] border-primary pl-5"
              >
                <p className="text-base font-semibold italic text-gray-800">
                  &ldquo;We don&apos;t outsource thinking. Everything is built
                  and reviewed in-house.&rdquo;
                </p>
                <footer className="mt-2 text-sm font-bold text-primary">
                  — Mohammed Arbaz, Founder
                </footer>
              </motion.blockquote>

              <motion.div
                variants={fadeUp}
                custom={5}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="btn-3d inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-white"
                >
                  Start a Conversation <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── STORY ─────────────────────────── */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-dot-black/[0.05]" />
        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.45fr] lg:gap-20">
          <div className="text-center lg:text-left">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-primary"
          >
            Our Story
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-3 font-anton text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl"
          >
            How Frontail Started
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 text-lg leading-relaxed text-gray-600"
          >
            Frontail was created to solve a major gap — most agencies build
            websites, not real scalable products.
          </motion.p>
          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-4 text-base leading-relaxed text-gray-500"
          >
            We saw founders paying for pixel-perfect landing pages while their
            actual product had no architecture. We focus on building systems,
            not just UI pages — products that can handle growth, team expansion,
            and real business pressure from day one.
          </motion.p>
          </div>

          {/* Logo side */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="flex h-44 w-44 md:h-56 md:w-56 items-center justify-center rounded-2xl border border-gray-300 bg-white shadow-md p-6">
              <Image
                src="/logo.png"
                alt="Frontail Technologies logo"
                width={160}
                height={160}
                className="h-auto w-full object-contain"
              />
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* ────────────────────────── MISSION ─────────────────────────── */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-widest text-primary"
              >
                Our Mission
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-3 font-anton text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl"
              >
                Build fast. Build right. Build to last.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-5 text-base leading-relaxed text-gray-600"
              >
                To help startups and businesses launch scalable digital products
                with speed, clarity, and strong architecture. No bloat. No
                generic output. Just products that work.
              </motion.p>
            </div>

            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "15–45", label: "Days to MVP launch" },
                { value: "100%", label: "In-house development" },
                { value: "0", label: "Outsourced thinking" },
                { value: "∞", label: "Scalability mindset" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-md border border-gray-300 bg-white p-6 text-center shadow-sm"
                >
                  <p className="font-anton text-4xl font-extrabold text-primary">{s.value}</p>
                  <p className="mt-1.5 text-xs font-semibold text-gray-500">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────── WHAT WE BUILD ──────────────────────── */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-12 text-center">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest text-primary"
            >
              What We Build
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-3 font-anton text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl"
            >
              Systems, not just screens.
            </motion.h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeBuild.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={i * 0.5}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group rounded-md border border-gray-300 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── WHY FRONTAIL ─────────────────────── */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-12 text-center">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest text-primary"
            >
              Why Frontail
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-3 font-anton text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl"
            >
              Not like the rest.
            </motion.h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyFrontail.map(({ icon: Icon, title, detail }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={i * 0.5}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group rounded-md border border-gray-300 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div className="mt-5">
                  <p className="text-base font-bold text-gray-900">{title}</p>
                  <p className="mt-1 text-sm font-semibold text-primary">{detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── TRUST BADGES ─────────────────────── */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-8 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" strokeWidth={1.75} />
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-700">
              Trust & Compliance
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {trustBadges.map(({ icon: Icon, title, subtitle }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={i * 0.5}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center gap-4 rounded-md border border-gray-300 bg-white px-5 py-4 shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900">{title}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{subtitle}</p>
                </div>
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
