import React from "react";
import Image from "next/image";
import {
  Sparkles,
  Crown,
  UserCheck,
  Users,
  ShieldAlert,
  CheckCircle2,
  Server,
  Database,
  Monitor,
  ArrowRight,
  Zap,
  Layers,
  Activity,
  Globe,
  Lock,
} from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";
import RelatedServices from "./RelatedServices";
import RelatedCaseStudies from "./RelatedCaseStudies";

interface CDR912CaseStudyProps {
  caseStudy: CaseStudy;
}

export const CDR912CaseStudy: React.FC<CDR912CaseStudyProps> = ({
  caseStudy,
}) => {
  return (
    <div className="w-full">
      {/* ===================================================
          1. HERO SECTION (Unwrapped Showcase Visual)
          =================================================== */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 border-b border-gray-300 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-primary border border-primary/20 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>Case Study / Gaming Platform</span>
              </span>
              <span className="text-xs font-semibold text-gray-700 bg-gray-100/90 px-3 py-1 rounded-md border border-gray-200">
                Multi-Level Role Architecture
              </span>
            </div>

            <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-normal mb-4">
              {caseStudy.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              A multi-level sports and gaming management platform built around distinct Master, Agent and Customer experiences.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {["Next.js", "React", "TypeScript", "Elysia.js", "Bun", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800 shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Top Platform Showcase Visual (Unwrapped with Clean Drop Shadow) */}
          <div className="relative mx-auto max-w-4xl flex items-center justify-center pt-2 pb-4">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full flex items-center justify-center">
              <Image
                src={caseStudy.heroImage}
                alt={`${caseStudy.title} Multi-Level Platform Interface`}
                fill
                priority
                unoptimized
                className="object-contain drop-shadow-2xl rounded-xl"
                sizes="(min-width: 1280px) 1000px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          2. COMPACT PROJECT SNAPSHOT (4 Attributes Maximum)
          =================================================== */}
      <section className="py-6 bg-white/70 border-b border-gray-300">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-lg bg-[#f7f3eb]/60 border border-gray-200 text-center">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                Industry
              </span>
              <span className="font-anton text-base md:text-lg text-gray-900 tracking-normal">
                Sports / Gaming
              </span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f7f3eb]/60 border border-gray-200 text-center">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                Platform
              </span>
              <span className="font-anton text-base md:text-lg text-gray-900 tracking-normal">
                Web Platform
              </span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f7f3eb]/60 border border-gray-200 text-center">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                Architecture
              </span>
              <span className="font-anton text-base md:text-lg text-gray-900 tracking-normal">
                Multi-Level Role System
              </span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f7f3eb]/60 border border-gray-200 text-center">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                Core Stack
              </span>
              <span className="font-anton text-base md:text-lg text-gray-900 tracking-normal">
                Next.js + Elysia + Bun
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          3. CHALLENGE & WHAT WE BUILT (2 Editorial Cards)
          =================================================== */}
      <section className="py-14 md:py-20 border-b border-gray-300">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* The Challenge Card */}
            <div className="bg-white/90 backdrop-blur-xs p-6 md:p-8 rounded-xl border border-gray-300 shadow-xs flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  The Problem
                </span>
                <h2 className="font-anton text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-normal mb-4">
                  The Challenge
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-prose">
                  The product needed to support multiple operational levels while giving each user type a clear, role-appropriate interface and controlled access to relevant platform functions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Isolating master-level platform oversight from intermediate agent workflows and customer experiences.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Delivering low-latency dashboard interfaces across distinct operational tiers with real-time state updates.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Handling high-volume concurrent user requests with an optimized, lightweight backend API architecture.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What We Built Card */}
            <div className="bg-white/90 backdrop-blur-xs p-6 md:p-8 rounded-xl border border-gray-300 shadow-xs flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  The Solution
                </span>
                <h2 className="font-anton text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-normal mb-4">
                  What We Built
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-prose">
                  Frontail engineered a unified multi-role web platform pairing Next.js frontends with a high-performance Elysia.js and Bun backend, establishing clear boundaries between management, distribution, and player workflows.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Multi-level role system separating Master, Agent, and Customer workflows with role-aware views.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>High-throughput Bun & Elysia.js API layer providing fast JSON execution and low server overhead.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Responsive dashboard components delivering synchronized platform updates across tiers.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          4. REAL PRODUCT VISUAL COMPOSITION
             (Desktop 3D Skew, Flat on Mobile)
          =================================================== */}
      <section className="py-14 md:py-20 border-b border-gray-300 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Platform Composition
            </span>
            <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal">
              Tiered Multi-Role Architecture
            </h2>
          </div>

          {/* Plain Screenshot / SVG Showcase: Flat on Mobile, 3D Skew on Desktop */}
          <div className="relative mb-14 md:perspective-[1400px]">
            <div className="relative mx-auto max-w-4xl rounded-xl border border-gray-300 shadow-xl overflow-hidden transition-all duration-500 transform-none md:[transform:perspective(1400px)_rotateX(5deg)_skewX(-2deg)] md:hover:[transform:perspective(1400px)_rotateX(0deg)_skewX(0deg)] bg-white p-4">
              <Image
                src="/projects/cdr.svg"
                alt="CDR912 Multi-Level Platform Interface"
                width={1200}
                height={580}
                unoptimized
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* 3 Small Callouts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-xl border border-gray-300 shadow-2xs">
              <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Crown className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 tracking-normal mb-1">
                Master Administration
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-prose">
                High-level operational oversight across agent networks, user distribution, and platform health.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-xl border border-gray-300 shadow-2xs">
              <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <UserCheck className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 tracking-normal mb-1">
                Agent Workflows
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-prose">
                Dedicated operational tools for regional distribution, player account setups, and activity tracking.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-xl border border-gray-300 shadow-2xs">
              <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 tracking-normal mb-1">
                Customer Experience
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-prose">
                Streamlined player interfaces with low-latency navigation, live feeds, and responsive controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          5. PRODUCT EXPERIENCE: 3 LARGE VISUAL MODULES
          =================================================== */}
      <section className="py-14 md:py-20 border-b border-gray-300 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Product Deep Dive
            </span>
            <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal">
              Core Engineering Modules
            </h2>
          </div>

          <div className="space-y-20 md:space-y-28">
            {/* MODULE 1: Multi-Level Platform Structure */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
              <div className="lg:col-span-6">
                {/* Visual Flow Abstraction: Master -> Agent -> Customer */}
                <div className="max-w-xl mx-auto rounded-xl border border-gray-300 bg-white/90 p-6 shadow-lg">
                  <div className="flex flex-col gap-3">
                    <div className="p-4 rounded-lg bg-[#f7f3eb]/80 border border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center">
                          <Crown className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-anton text-sm text-gray-900">Master Level</div>
                          <div className="text-[11px] text-gray-500">System oversight & governance</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-white border border-gray-300 text-gray-700">Tier 1</span>
                    </div>

                    <div className="flex justify-center text-primary py-0.5">
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>

                    <div className="p-4 rounded-lg bg-[#f7f3eb]/80 border border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center">
                          <UserCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-anton text-sm text-gray-900">Agent Level</div>
                          <div className="text-[11px] text-gray-500">Distribution & management tools</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-white border border-gray-300 text-gray-700">Tier 2</span>
                    </div>

                    <div className="flex justify-center text-primary py-0.5">
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>

                    <div className="p-4 rounded-lg bg-[#f7f3eb]/80 border border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center">
                          <Users className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-anton text-sm text-gray-900">Customer Level</div>
                          <div className="text-[11px] text-gray-500">Live gaming & dashboard interface</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-white border border-gray-300 text-gray-700">Tier 3</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <span className="text-xs font-bold font-mono text-primary uppercase tracking-wider mb-2 block">
                  Module 01
                </span>
                <h3 className="font-anton text-2xl md:text-3xl font-extrabold text-gray-900 tracking-normal mb-3">
                  Multi-Level Structure
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-prose">
                  A hierarchical system establishing clear operational separation between Master operators, regional Agents, and Customers with appropriate visibility and security boundaries at every level.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Master Tier
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Agent Operations
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Customer Experience
                  </span>
                </div>
              </div>
            </div>

            {/* MODULE 2: Role-Based Dashboards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center lg:grid-flow-dense">
              <div className="lg:col-span-6 lg:col-start-7">
                <div className="max-w-xl mx-auto rounded-xl border border-gray-300 shadow-xl overflow-hidden transition-all duration-500 transform-none md:[transform:perspective(1200px)_rotateX(4deg)_rotateY(5deg)_skewX(2.5deg)] md:hover:[transform:perspective(1200px)_rotateX(0deg)_rotateY(0deg)_skewX(0deg)] bg-white p-4">
                  <Image
                    src="/projects/cdr.svg"
                    alt="Role-Based Dashboard Suite"
                    width={1100}
                    height={540}
                    unoptimized
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 lg:col-start-1">
                <span className="text-xs font-bold font-mono text-primary uppercase tracking-wider mb-2 block">
                  Module 02
                </span>
                <h3 className="font-anton text-2xl md:text-3xl font-extrabold text-gray-900 tracking-normal mb-3">
                  Role-Based Dashboards
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-prose">
                  Dedicated interface suites providing administrative tools for platform leaders, distribution controls for agents, and fast, responsive interfaces for active gaming participants.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Management
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Agent Operations
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Customer Experience
                  </span>
                </div>
              </div>
            </div>

            {/* MODULE 3: Backend & Platform Engineering */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
              <div className="lg:col-span-6">
                {/* High-Level Flow: Web Apps -> App API -> Data Layer -> Platform Services */}
                <div className="max-w-xl mx-auto rounded-xl border border-gray-300 bg-white/90 p-5 md:p-6 shadow-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 items-center text-center">
                    <div className="p-3 rounded-lg bg-[#f7f3eb]/70 border border-gray-200">
                      <Monitor className="w-5 h-5 mx-auto text-primary mb-1" />
                      <div className="font-anton text-xs text-gray-900">Web Apps</div>
                      <div className="text-[10px] text-gray-500 font-mono">Next.js</div>
                    </div>
                    <div className="flex justify-center text-gray-400 rotate-90 sm:rotate-0">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                    <div className="p-3 rounded-lg bg-[#f7f3eb]/70 border border-gray-200">
                      <Server className="w-5 h-5 mx-auto text-primary mb-1" />
                      <div className="font-anton text-xs text-gray-900">App API</div>
                      <div className="text-[10px] text-gray-500 font-mono">Elysia + Bun</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#f7f3eb]/70 border border-gray-200">
                      <Database className="w-5 h-5 mx-auto text-primary mb-1" />
                      <div className="font-anton text-xs text-gray-900">Data Layer</div>
                      <div className="text-[10px] text-gray-500 font-mono">Relational DB</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <span className="text-xs font-bold font-mono text-primary uppercase tracking-wider mb-2 block">
                  Module 03
                </span>
                <h3 className="font-anton text-2xl md:text-3xl font-extrabold text-gray-900 tracking-normal mb-3">
                  Backend & Platform Engineering
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-prose">
                  A high-throughput API architecture powered by Elysia.js on the Bun runtime, optimized to serve concurrent user sessions with ultra-low latency and predictable response cycles.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Low-Overhead HTTP
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    High Concurrency
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Centralized API
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          6. KEY FEATURES (6 Concise Cards)
          =================================================== */}
      <section className="py-14 md:py-20 border-b border-gray-300 bg-white/40">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Capabilities
            </span>
            <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal">
              Key Product Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Crown className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Multi-Level User Hierarchy
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Logical tiered architecture connecting Master, Agent, and Customer accounts.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Separate Role Experiences
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Dedicated interfaces tailored specifically to administrative, agent, and user workflows.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <UserCheck className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Role-Aware Management
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Centralized oversight tools providing macro platform visibility for master operators.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Activity className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Real-Time Platform Data
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Responsive state updates reflecting dynamic platform activities across tiers.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Globe className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Responsive Web Experience
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Fast, mobile-ready web interfaces optimized for smooth interactions across devices.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Server className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Centralized Backend
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Unified API service built on Elysia.js and Bun handling platform requests efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          7. HIGH-LEVEL TECHNICAL ARCHITECTURE
          =================================================== */}
      <section className="py-14 md:py-20 border-b border-gray-300">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              System Architecture
            </span>
            <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal">
              Technical Architecture
            </h2>
          </div>

          {/* Clean High-Level Architecture Flow */}
          <div className="bg-white/90 backdrop-blur-xs p-6 md:p-8 rounded-xl border border-gray-300 shadow-xs mb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              <div className="p-4 rounded-lg bg-[#f7f3eb]/70 border border-gray-200 text-center">
                <div className="w-7 h-7 mx-auto mb-2 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <Monitor className="w-4 h-4" />
                </div>
                <div className="font-anton text-xs sm:text-sm text-gray-900">Web Applications</div>
                <div className="text-[11px] text-gray-500 font-mono mt-0.5">Next.js / TypeScript</div>
              </div>

              <div className="flex justify-center text-gray-400 rotate-90 md:rotate-0">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>

              <div className="p-4 rounded-lg bg-[#f7f3eb]/70 border border-gray-200 text-center">
                <div className="w-7 h-7 mx-auto mb-2 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="font-anton text-xs sm:text-sm text-gray-900">Application API</div>
                <div className="text-[11px] text-gray-500 font-mono mt-0.5">Elysia.js / Bun</div>
              </div>

              <div className="flex justify-center text-gray-400 rotate-90 md:rotate-0">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>

              <div className="p-4 rounded-lg bg-[#f7f3eb]/70 border border-gray-200 text-center">
                <div className="w-7 h-7 mx-auto mb-2 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <Database className="w-4 h-4" />
                </div>
                <div className="font-anton text-xs sm:text-sm text-gray-900">Data Layer</div>
                <div className="text-[11px] text-gray-500 font-mono mt-0.5">Relational DB</div>
              </div>
            </div>
          </div>

          {/* 3 Compact High-Level Supporting Capability Notes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-lg bg-white/70 border border-gray-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                Role-Based Routing
              </span>
              <p className="text-xs text-gray-600 leading-relaxed">
                Enforces strict access control routing Master, Agent, and Customer users to dedicated workspaces.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white/70 border border-gray-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                High-Throughput Execution
              </span>
              <p className="text-xs text-gray-600 leading-relaxed">
                Powered by Bun runtime and Elysia.js for rapid JSON serialization and high request concurrency.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white/70 border border-gray-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                Centralized State Layer
              </span>
              <p className="text-xs text-gray-600 leading-relaxed">
                Maintains clean, synchronized platform records while keeping user tier workflows strictly isolated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          8. HIGH-LEVEL TECHNICAL CHALLENGES (3 Cards)
          =================================================== */}
      <section className="py-14 md:py-20 border-b border-gray-300 bg-white/40">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Engineering Depth
            </span>
            <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal">
              Technical Challenges
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                  Challenge
                </span>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  Role Separation & Isolation
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Different user tiers required strictly partitioned views without leaking administrative capabilities.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  Solution
                </span>
                <p className="text-xs text-gray-800 font-medium leading-relaxed">
                  Enforced architectural tier separation ensuring each user group only accesses role-appropriate views.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                  Challenge
                </span>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  Consistent Multi-Tier Data
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Platform state changes needed to propagate reliably across Master, Agent, and Customer dashboards.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  Solution
                </span>
                <p className="text-xs text-gray-800 font-medium leading-relaxed">
                  Structured efficient API synchronization to reflect updates consistently across all operational tiers.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                  Challenge
                </span>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  Scalable Request Handling
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Active user sessions demanded low latency and high concurrency during peak activity windows.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  Solution
                </span>
                <p className="text-xs text-gray-800 font-medium leading-relaxed">
                  Leveraged Bun runtime and Elysia.js for lightweight HTTP execution and high-concurrency request handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          9. COMPACT TECH STACK SECTION
          =================================================== */}
      <section className="py-14 md:py-20 border-b border-gray-300">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Technologies
            </span>
            <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal">
              Tech Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-xl border border-gray-300 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-3">
                Frontend Web Platform
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#f7f3eb]/60 border border-gray-200 text-gray-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-xl border border-gray-300 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-3">
                Backend & Runtime
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Elysia.js", "Bun Runtime", "REST APIs"].map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#f7f3eb]/60 border border-gray-200 text-gray-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-xl border border-gray-300 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-3">
                Architecture & Roles
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Role-Based Access", "Reverse Proxy Layer", "Session Management"].map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#f7f3eb]/60 border border-gray-200 text-gray-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-xl border border-gray-300 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-3">
                Database & Storage
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["PostgreSQL", "Relational Schema"].map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#f7f3eb]/60 border border-gray-200 text-gray-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          10. WHAT WE DELIVERED (4 Concise Cards)
          =================================================== */}
      <section className="py-14 md:py-20 border-b border-gray-300 bg-white/40">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Deliverables
            </span>
            <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal">
              What We Delivered
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">01</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  Multi-Level Web Platform
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Unified web architecture supporting Master, Agent, and Customer interfaces.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">02</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  Role-Based Dashboards
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Specialized control panels designed for operational management and distribution.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">03</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  Backend / API Platform
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  High-throughput API layer powered by Bun and Elysia.js for fast execution.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">04</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  Responsive Product Experience
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Mobile-friendly web layouts maintaining visual clarity and speed across devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          11. RELATED SERVICES (Canonical Links)
          =================================================== */}
      <RelatedServices caseStudy={caseStudy} />

      {/* ===================================================
          12. RELATED CASE STUDIES (Next.js Crawlable Links)
          =================================================== */}
      <RelatedCaseStudies
        currentSlug={caseStudy.slug}
        relatedSlugs={caseStudy.relatedSlugs}
      />
    </div>
  );
};

export default CDR912CaseStudy;
