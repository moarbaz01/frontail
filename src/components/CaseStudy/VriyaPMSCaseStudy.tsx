import React from "react";
import Image from "next/image";
import {
  Sparkles,
  Building,
  Users2,
  Receipt,
  Building2,
  CheckCircle2,
  Database,
  Server,
  Monitor,
  ArrowRight,
  Zap,
  Layers,
  ShieldCheck,
  CalendarCheck,
  CreditCard,
} from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";
import RelatedServices from "./RelatedServices";
import RelatedCaseStudies from "./RelatedCaseStudies";

interface VriyaPMSCaseStudyProps {
  caseStudy: CaseStudy;
}

export const VriyaPMSCaseStudy: React.FC<VriyaPMSCaseStudyProps> = ({
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
                <span>Case Study / Multi-Tenant SaaS</span>
              </span>
              <span className="text-xs font-semibold text-gray-700 bg-gray-100/90 px-3 py-1 rounded-md border border-gray-200">
                Property + HRM + Accounting
              </span>
            </div>

            <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-normal mb-4">
              {caseStudy.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              A multi-tenant business platform bringing property operations, HR management and accounting into one connected SaaS product.
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
                alt={`${caseStudy.title} Multi-Tenant SaaS Interface`}
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
                PropTech / HR / Finance
              </span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f7f3eb]/60 border border-gray-200 text-center">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                Platform
              </span>
              <span className="font-anton text-base md:text-lg text-gray-900 tracking-normal">
                Multi-Tenant SaaS
              </span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f7f3eb]/60 border border-gray-200 text-center">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                Core Modules
              </span>
              <span className="font-anton text-base md:text-lg text-gray-900 tracking-normal">
                Property + HR + Accounts
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
                  The product needed to unify multiple operational domains inside one platform while keeping organizations, users, financial activity and property workflows logically separated.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Eliminating fragmented tools by connecting apartment management, staff administration, and financial ledgers.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Enforcing strict data isolation between multiple client organizations using a shared application codebase.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Managing complex recurring billing lifecycles with dynamic statuses across units and tenants.</span>
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
                  Frontail architected a unified multi-tenant SaaS application that gives property managers, accountants, and HR leads dedicated workspace modules backed by centralized data models.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Unified 3-in-1 multi-module SaaS uniting Property Operations, HRM, and Accounting ledgers.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Tenant-aware request pipeline enforcing secure organizational isolation across databases.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Role-based dashboard suite with automated recurring billing and invoice lifecycle tracking.</span>
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
              Platform Overview
            </span>
            <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal">
              Unified 3-in-1 SaaS Architecture
            </h2>
          </div>

          {/* Plain Screenshot / SVG Showcase: Flat on Mobile, 3D Skew on Desktop */}
          <div className="relative mb-14 md:perspective-[1400px]">
            <div className="relative mx-auto max-w-4xl rounded-xl border border-gray-300 shadow-xl overflow-hidden transition-all duration-500 transform-none md:[transform:perspective(1400px)_rotateX(5deg)_skewX(-2deg)] md:hover:[transform:perspective(1400px)_rotateX(0deg)_skewX(0deg)] bg-white p-4">
              <Image
                src="/projects/vriya-pms.svg"
                alt="Vriya PMS Multi-Tenant Dashboard Interface"
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
                <Building className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 tracking-normal mb-1">
                Property Management
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-prose">
                Room inventory, lease reservations, monthly rent cycles, and utility fee tracking.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-xl border border-gray-300 shadow-2xs">
              <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Users2 className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 tracking-normal mb-1">
                HR & Workforce
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-prose">
                Staff directories, attendance logging, role permissions, and operational records.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-xl border border-gray-300 shadow-2xs">
              <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Receipt className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 tracking-normal mb-1">
                Accounting & Billing
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-prose">
                Automated invoice cycles, payment status tracking, and account receivables.
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
              Core SaaS Modules
            </h2>
          </div>

          <div className="space-y-20 md:space-y-28">
            {/* MODULE 1: Property Management */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
              <div className="lg:col-span-6">
                <div className="max-w-xl mx-auto rounded-xl border border-gray-300 shadow-xl overflow-hidden transition-all duration-500 transform-none md:[transform:perspective(1200px)_rotateX(4deg)_rotateY(-5deg)_skewX(-2.5deg)] md:hover:[transform:perspective(1200px)_rotateX(0deg)_rotateY(0deg)_skewX(0deg)] bg-white p-4">
                  <Image
                    src="/projects/vriya-pms.svg"
                    alt="Property Management Module Interface"
                    width={1100}
                    height={540}
                    unoptimized
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="lg:col-span-6">
                <span className="text-xs font-bold font-mono text-primary uppercase tracking-wider mb-2 block">
                  Module 01
                </span>
                <h3 className="font-anton text-2xl md:text-3xl font-extrabold text-gray-900 tracking-normal mb-3">
                  Property Management
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-prose">
                  A centralized property operations system allowing managers to oversee room inventories, tenant reservations, unit occupancy timelines, and recurring utility bills seamlessly.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Rooms
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Reservations
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Billing
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Utilities
                  </span>
                </div>
              </div>
            </div>

            {/* MODULE 2: HR & Workforce */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center lg:grid-flow-dense">
              <div className="lg:col-span-6 lg:col-start-7">
                <div className="max-w-xl mx-auto rounded-xl border border-gray-300 shadow-xl overflow-hidden transition-all duration-500 transform-none md:[transform:perspective(1200px)_rotateX(4deg)_rotateY(5deg)_skewX(2.5deg)] md:hover:[transform:perspective(1200px)_rotateX(0deg)_rotateY(0deg)_skewX(0deg)] bg-white p-4">
                  <Image
                    src="/projects/vriya-pms.svg"
                    alt="HRM and Staff Administration Suite"
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
                  HR & Workforce
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-prose">
                  An integrated human resources suite managing employee records, attendance logging, departmental roles, and workforce assignments without external spreadsheet handoffs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Employees
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Attendance
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Roles
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Workforce Records
                  </span>
                </div>
              </div>
            </div>

            {/* MODULE 3: Accounting & Billing */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
              <div className="lg:col-span-6">
                {/* High-Level Status Flow Card */}
                <div className="max-w-xl mx-auto rounded-xl border border-gray-300 bg-white/90 p-5 md:p-6 shadow-lg">
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block text-center">
                      Invoice Status Lifecycle
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                      <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
                        <span className="font-anton text-xs text-amber-900 block">Pending</span>
                        <span className="text-[10px] text-amber-700">Generated</span>
                      </div>
                      <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                        <span className="font-anton text-xs text-blue-900 block">Partial</span>
                        <span className="text-[10px] text-blue-700">Installment</span>
                      </div>
                      <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                        <span className="font-anton text-xs text-emerald-900 block">Paid</span>
                        <span className="text-[10px] text-emerald-700">Settled</span>
                      </div>
                      <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                        <span className="font-anton text-xs text-red-900 block">Overdue</span>
                        <span className="text-[10px] text-red-700">Past Due</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <span className="text-xs font-bold font-mono text-primary uppercase tracking-wider mb-2 block">
                  Module 03
                </span>
                <h3 className="font-anton text-2xl md:text-3xl font-extrabold text-gray-900 tracking-normal mb-3">
                  Accounting & Billing
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-prose">
                  A structured accounting engine automating monthly rent generation, payment tracking, balance calculations, and clear billing status monitoring across client organizations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Invoices
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Payments
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Billing Cycles
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Due Tracking
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
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Multi-Tenant Workspace Model
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Isolated organizational environments ensuring complete operational and financial privacy.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Building className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Property & Room Management
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Visual room inventory, reservation timelines, and occupancy tracking across units.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <CalendarCheck className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Recurring Billing Cycles
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Automated monthly rent generation and customizable billing intervals.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <CreditCard className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Utility & Payment Tracking
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Multi-category utility tracking, partial payment receipts, and balance logging.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Users2 className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                HR Management
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Centralized employee profiles, attendance logs, and staff role assignments.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Receipt className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Integrated Accounting
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Real-time receivables tracking with clear Pending, Partial, Paid, and Overdue states.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          7. MULTI-TENANT SAAS ARCHITECTURE
          =================================================== */}
      <section className="py-14 md:py-20 border-b border-gray-300">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              System Architecture
            </span>
            <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal">
              Multi-Tenant SaaS Architecture
            </h2>
          </div>

          {/* Clean High-Level Architecture Flow */}
          <div className="bg-white/90 backdrop-blur-xs p-6 md:p-8 rounded-xl border border-gray-300 shadow-xs mb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              {/* Organization / Tenant Tier */}
              <div className="p-4 rounded-lg bg-[#f7f3eb]/70 border border-gray-200 text-center">
                <div className="w-7 h-7 mx-auto mb-2 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="font-anton text-xs sm:text-sm text-gray-900">Tenant Workspaces</div>
                <div className="text-[11px] text-gray-500 font-mono mt-0.5">Org A • Org B • Org C</div>
              </div>

              <div className="flex justify-center text-gray-400 rotate-90 md:rotate-0">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>

              {/* Shared Application Platform */}
              <div className="p-4 rounded-lg bg-[#f7f3eb]/70 border border-gray-200 text-center">
                <div className="w-7 h-7 mx-auto mb-2 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <Server className="w-4 h-4" />
                </div>
                <div className="font-anton text-xs sm:text-sm text-gray-900">Application Platform</div>
                <div className="text-[11px] text-gray-500 font-mono mt-0.5">Next.js + Elysia + Bun</div>
              </div>

              <div className="flex justify-center text-gray-400 rotate-90 md:rotate-0">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>

              {/* Tenant-Aware Data Layer */}
              <div className="p-4 rounded-lg bg-[#f7f3eb]/70 border border-gray-200 text-center">
                <div className="w-7 h-7 mx-auto mb-2 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <Database className="w-4 h-4" />
                </div>
                <div className="font-anton text-xs sm:text-sm text-gray-900">Tenant Data Layer</div>
                <div className="text-[11px] text-gray-500 font-mono mt-0.5">Isolated Relational DB</div>
              </div>
            </div>
          </div>

          {/* 3 Compact High-Level Supporting Capability Notes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-lg bg-white/70 border border-gray-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                Logical Workspace Isolation
              </span>
              <p className="text-xs text-gray-600 leading-relaxed">
                Multiple organizations share one application layer while operational and financial data remains isolated.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white/70 border border-gray-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                High-Speed Bun & Elysia Core
              </span>
              <p className="text-xs text-gray-600 leading-relaxed">
                High-throughput backend routing powering real-time requests across property, HR, and accounting modules.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white/70 border border-gray-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                Relational Data Integrity
              </span>
              <p className="text-xs text-gray-600 leading-relaxed">
                Seamless relational links connecting tenant leases directly to monthly invoices and staff rosters.
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
                  Multi-Tenant Product Structure
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  The SaaS platform required strict organizational boundaries without creating redundant codebase deployments.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  Solution
                </span>
                <p className="text-xs text-gray-800 font-medium leading-relaxed">
                  Designed a tenant-aware request pipeline ensuring multi-organization usage with total data isolation.
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
                  Cross-Module Data Consistency
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Property, HR, and accounting data needed to operate coherently without data duplication or sync errors.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  Solution
                </span>
                <p className="text-xs text-gray-800 font-medium leading-relaxed">
                  Structured relational schemas linking property leases directly to accounting invoices and staff assignments.
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
                  Billing State Management
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Managing multiple billing states (Pending, Partial, Paid, Overdue) across recurring rent cycles.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  Solution
                </span>
                <p className="text-xs text-gray-800 font-medium leading-relaxed">
                  Engineered resilient payment status transitions supporting partial payments, pending dues, and overdue flags.
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
                Frontend Web SaaS
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
                Database & Tenancy
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["PostgreSQL", "Relational Schema", "Tenant Isolation"].map((item) => (
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
                UI & Modules
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Lucide React", "Data Tables", "Billing Matrices"].map((item) => (
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
                  Multi-Tenant SaaS Platform
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Scalable 3-in-1 web application with logical organization workspace isolation.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">02</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  Property Management Module
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Unit inventory, reservation workflows, and occupancy monitoring dashboard.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">03</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  HRM Module
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Staff directory, attendance tracking, and internal role permission management.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">04</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  Accounting & Billing Module
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Recurring invoice engine, payment recording, and balance due tracking.
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

export default VriyaPMSCaseStudy;
