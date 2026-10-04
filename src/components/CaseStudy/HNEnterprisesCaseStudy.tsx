import React from "react";
import Image from "next/image";
import {
  Sparkles,
  LayoutDashboard,
  MapPin,
  FileSpreadsheet,
  Users,
  Receipt,
  AlertTriangle,
  CheckCircle2,
  Database,
  Server,
  Monitor,
  ArrowRight,
  HardHat,
  Building2,
  Table,
  UploadCloud,
  Layers,
} from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";
import RelatedServices from "./RelatedServices";
import RelatedCaseStudies from "./RelatedCaseStudies";

interface HNEnterprisesCaseStudyProps {
  caseStudy: CaseStudy;
}

export const HNEnterprisesCaseStudy: React.FC<HNEnterprisesCaseStudyProps> = ({
  caseStudy,
}) => {
  return (
    <div className="w-full">
      {/* ===================================================
          1. HERO SECTION (Unwrapped Dashboard Mockup)
          =================================================== */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 border-b border-gray-300 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-primary border border-primary/20 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>Case Study / Field Operations</span>
              </span>
              <span className="text-xs font-semibold text-gray-700 bg-gray-100/90 px-3 py-1 rounded-md border border-gray-200">
                CGD & Infrastructure Operations
              </span>
            </div>

            <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-normal mb-4">
              {caseStudy.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              An operations platform connecting field teams, project workflows, and centralized ERP management.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800 shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Top Dashboard Showcase (Unwrapped with Clean Drop Shadow) */}
          <div className="relative mx-auto max-w-4xl flex items-center justify-center pt-2 pb-4">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full flex items-center justify-center">
              <Image
                src="/case-studies/hn-enterprises/erp-dashboard.png"
                alt={`${caseStudy.title} Web Operations ERP Dashboard`}
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
                CGD / Operations
              </span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f7f3eb]/60 border border-gray-200 text-center">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                Platform
              </span>
              <span className="font-anton text-base md:text-lg text-gray-900 tracking-normal">
                Web Operations ERP
              </span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f7f3eb]/60 border border-gray-200 text-center">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                Primary Use
              </span>
              <span className="font-anton text-base md:text-lg text-gray-900 tracking-normal">
                Field Operations & ERP
              </span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f7f3eb]/60 border border-gray-200 text-center">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                Frontend Stack
              </span>
              <span className="font-anton text-base md:text-lg text-gray-900 tracking-normal">
                Next.js / TypeScript
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
                  Field operations generate scattered updates across attendance, work progress, customers, complaints, planning, and expenses. Operational teams need one structured system that connects field activity with centralized management.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Eliminating fragmented reporting between on-site supervisors and office administrators.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Capturing reliable attendance check-ins and structured daily progress reports (DPR).</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Providing real-time operational visibility across active projects, resources, and billing.</span>
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
                  A centralized web operations platform where field activity is recorded systematically while management gets unified real-time visibility across projects, staff, and workflows.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Centralized operations dashboard tracking projects, customers, inventory, and staff.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Data pipelines for customer imports, attendance records, and DPR milestone updates.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Role-based access delivering tailored operational views for admins and supervisors.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          4. REAL PRODUCT VISUAL COMPOSITION (Dashboard View)
          =================================================== */}
      <section className="py-14 md:py-20 border-b border-gray-300 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Platform Overview
            </span>
            <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal">
              Centralized Operational Dashboard
            </h2>
          </div>

          {/* Plain Screenshot: Flat on Mobile, 3D Skew on Desktop */}
          <div className="relative mb-14 md:perspective-[1400px]">
            <div className="relative mx-auto max-w-4xl rounded-xl border border-gray-300 shadow-xl overflow-hidden transition-all duration-500 transform-none md:[transform:perspective(1400px)_rotateX(5deg)_skewX(-2deg)] md:hover:[transform:perspective(1400px)_rotateX(0deg)_skewX(0deg)]">
              <Image
                src="/case-studies/hn-enterprises/erp-dashboard.png"
                alt="HN Enterprises Operations Dashboard Interface"
                width={1200}
                height={580}
                unoptimized
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* 3 Small Callouts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-xl border border-gray-300 shadow-2xs">
              <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <LayoutDashboard className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 tracking-normal mb-1">
                Field Operations
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-prose">
                Centralized workflows connecting on-ground logs, DPR submissions, and site updates.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-xl border border-gray-300 shadow-2xs">
              <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Building2 className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 tracking-normal mb-1">
                Project Visibility
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-prose">
                Executive oversight across active infrastructure sites, customer accounts, and milestones.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-xl border border-gray-300 shadow-2xs">
              <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 tracking-normal mb-1">
                Attendance & Work Tracking
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-prose">
                Workforce presence summaries and real-time operational milestone progression.
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
              Core Operational Modules
            </h2>
          </div>

          <div className="space-y-20 md:space-y-28">
            {/* MODULE 1: Operations Progress Matrix (Dashboard View) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
              <div className="lg:col-span-6">
                <div className="max-w-xl mx-auto rounded-xl border border-gray-300 shadow-xl overflow-hidden transition-all duration-500 transform-none md:[transform:perspective(1200px)_rotateX(4deg)_rotateY(-5deg)_skewX(-2.5deg)] md:hover:[transform:perspective(1200px)_rotateX(0deg)_rotateY(0deg)_skewX(0deg)]">
                  <Image
                    src="/case-studies/hn-enterprises/erp-dashboard.png"
                    alt="Operations Dashboard Progress Matrix"
                    width={1100}
                    height={540}
                    unoptimized
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-6">
                <span className="text-xs font-bold font-mono text-primary uppercase tracking-wider mb-2 block">
                  Module 01
                </span>
                <h3 className="font-anton text-2xl md:text-3xl font-extrabold text-gray-900 tracking-normal mb-3">
                  Field Operations & Tracking
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-prose">
                  A unified operations cockpit tracking location attendance, DPR submissions, site progress, customer complaints, and work stages across active infrastructure zones in real time.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Attendance
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    DPR
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Expenses
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Work Progress
                  </span>
                </div>
              </div>
            </div>

            {/* MODULE 2: Centralized Customer Management (Dashboard View) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center lg:grid-flow-dense">
              <div className="lg:col-span-6 lg:col-start-7">
                <div className="max-w-xl mx-auto rounded-xl border border-gray-300 shadow-xl overflow-hidden transition-all duration-500 transform-none md:[transform:perspective(1200px)_rotateX(4deg)_rotateY(5deg)_skewX(2.5deg)] md:hover:[transform:perspective(1200px)_rotateX(0deg)_rotateY(0deg)_skewX(0deg)]">
                  <Image
                    src="/case-studies/hn-enterprises/erp-customers.png"
                    alt="Centralized Customers Master Management Table"
                    width={1100}
                    height={540}
                    unoptimized
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 lg:col-start-1">
                <span className="text-xs font-bold font-mono text-primary uppercase tracking-wider mb-2 block">
                  Module 02
                </span>
                <h3 className="font-anton text-2xl md:text-3xl font-extrabold text-gray-900 tracking-normal mb-3">
                  Centralized Operations ERP
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-prose">
                  A centralized management dashboard providing comprehensive visibility across active infrastructure projects, customer accounts, resource allocation, and operational oversight.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Projects
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Customers
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Resources
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Operations
                  </span>
                </div>
              </div>
            </div>

            {/* MODULE 3: Connected Field-to-Office Workflow */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
              <div className="lg:col-span-6">
                {/* High-Level Abstracted Flow */}
                <div className="max-w-xl mx-auto rounded-xl border border-gray-300 bg-white/90 p-5 md:p-6 shadow-lg">
                  <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 items-center text-center">
                      <div className="p-3 rounded-lg bg-[#f7f3eb]/70 border border-gray-200">
                        <HardHat className="w-5 h-5 mx-auto text-primary mb-1" />
                        <div className="font-anton text-xs text-gray-900">Field Team</div>
                      </div>
                      <div className="flex justify-center text-gray-400 rotate-90 sm:rotate-0">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                      <div className="p-3 rounded-lg bg-[#f7f3eb]/70 border border-gray-200">
                        <Server className="w-5 h-5 mx-auto text-primary mb-1" />
                        <div className="font-anton text-xs text-gray-900">Data Layer</div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#f7f3eb]/70 border border-gray-200">
                        <LayoutDashboard className="w-5 h-5 mx-auto text-primary mb-1" />
                        <div className="font-anton text-xs text-gray-900">Web ERP</div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-200">
                      <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-2 text-center">
                        Synchronized Workflows
                      </span>
                      <div className="flex flex-wrap justify-center gap-1.5">
                        {["Attendance", "DPR", "Customers", "Expenses", "Complaints", "Work Progress"].map((label) => (
                          <span
                            key={label}
                            className="text-[11px] font-medium px-2 py-0.5 rounded bg-white border border-gray-300 text-gray-700"
                          >
                            {label}
                          </span>
                        ))}
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
                  Connected Workflow
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-prose">
                  A structured operational workflow connecting on-ground data collection directly to centralized administrative reviews, ensuring management has immediate visibility without manual handoffs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Data Ingestion
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Workflow Pipeline
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Central Oversight
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          6. KEY PRODUCT FEATURES (6 Concise Cards)
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
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Location-Aware Attendance
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Fast presence logging enabling field staff to verify daily presence on site.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                DPR & Site Planning
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Structured progress reporting connecting daily field milestones to project timelines.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Building2 className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Customer Management
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Centralized records tracking customer accounts, site installations, and history.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Receipt className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Expense Tracking
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                On-ground operational expense reporting paired with centralized management tracking.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Complaint Management
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Incident and maintenance issue logging with site zone attribution and status tracking.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Work Progress Tracking
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Real-time milestone counters monitoring project completion from survey to execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          7. DEDICATED DASHBOARD WORKFLOW VIEWS (Only Dashboard Views)
          =================================================== */}
      <section className="py-14 md:py-20 border-b border-gray-300 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Operations Interface
            </span>
            <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal mb-3">
              Web ERP Interface & Management Views
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed max-w-2xl">
              Engineered with Next.js and TypeScript to deliver rapid data tables, flexible multi-parameter filters, and intuitive administrative oversight across all operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* View 1: Customer Management Table */}
            <div className="flex flex-col">
              <div className="rounded-xl border border-gray-300 shadow-xl overflow-hidden bg-white">
                <Image
                  src="/case-studies/hn-enterprises/erp-customers.png"
                  alt="Customer Master Directory and Filtering View"
                  width={650}
                  height={380}
                  unoptimized
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-1">
                  <Table className="w-4 h-4 text-primary" />
                  <h3 className="font-anton text-base text-gray-900">Customer Master Directory</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  High-speed data grid with column filtering, quick search, and Excel export integration.
                </p>
              </div>
            </div>

            {/* View 2: Customer Import Workflow */}
            <div className="flex flex-col">
              <div className="rounded-xl border border-gray-300 shadow-xl overflow-hidden bg-white">
                <Image
                  src="/case-studies/hn-enterprises/erp-customer-import.png"
                  alt="Customer Master Batch Import and Validation"
                  width={650}
                  height={380}
                  unoptimized
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-1">
                  <UploadCloud className="w-4 h-4 text-primary" />
                  <h3 className="font-anton text-base text-gray-900">Batch Import & Validation</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Bulk template ingestion supporting `.xlsx` and `.csv` sheets with instant row revalidation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          8. WEB ERP EXPERIENCE (Large High-Resolution View)
          =================================================== */}
      <section className="py-14 md:py-20 border-b border-gray-300 bg-white/40 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Management Portal
            </span>
            <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal mb-3">
              Centralized Web ERP Suite
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed max-w-2xl">
              A comprehensive administrative web dashboard built with Next.js and TypeScript, giving operations managers complete control over project workflows, workforce allocations, and inventory.
            </p>
          </div>

          {/* High-Level Capability Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Projects", "Customers", "Operations", "Resources", "Attendance", "Finance / Expenses"].map((cat) => (
              <span
                key={cat}
                className="text-xs font-bold font-mono px-3 py-1.5 rounded-lg bg-white border border-gray-300 text-gray-800 shadow-2xs"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Large Dashboard Screenshot (Skewed on Desktop, Flat on Mobile) */}
          <div className="relative md:perspective-[1400px] mb-8">
            <div className="relative mx-auto rounded-xl border border-gray-300 shadow-2xl overflow-hidden transition-all duration-500 transform-none md:[transform:perspective(1400px)_rotateX(4deg)_skewX(-1.5deg)] md:hover:[transform:perspective(1400px)_rotateX(0deg)_skewX(0deg)]">
              <Image
                src="/case-studies/hn-enterprises/erp-dashboard.png"
                alt="HN Enterprises Centralized ERP Operations Dashboard"
                width={1300}
                height={650}
                unoptimized
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          9. HIGH-LEVEL ABSTRACTED ARCHITECTURE DIAGRAM
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

          {/* Clean High-Level Abstraction Flow */}
          <div className="bg-white/90 backdrop-blur-xs p-6 md:p-8 rounded-xl border border-gray-300 shadow-xs mb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              {/* Step 1: Web Client */}
              <div className="p-4 rounded-lg bg-[#f7f3eb]/70 border border-gray-200 text-center">
                <div className="w-7 h-7 mx-auto mb-2 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <Monitor className="w-4 h-4" />
                </div>
                <div className="font-anton text-xs sm:text-sm text-gray-900">Operations Web ERP</div>
                <div className="text-[11px] text-gray-500 font-mono mt-0.5">Next.js / React</div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-gray-400 rotate-90 md:rotate-0">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>

              {/* Step 2: Application / Data Layer */}
              <div className="p-4 rounded-lg bg-[#f7f3eb]/70 border border-gray-200 text-center">
                <div className="w-7 h-7 mx-auto mb-2 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <Server className="w-4 h-4" />
                </div>
                <div className="font-anton text-xs sm:text-sm text-gray-900">Application Layer</div>
                <div className="text-[11px] text-gray-500 font-mono mt-0.5">REST APIs & Auth</div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-gray-400 rotate-90 md:rotate-0">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>

              {/* Step 3: Central Relational Database */}
              <div className="p-4 rounded-lg bg-[#f7f3eb]/70 border border-gray-200 text-center">
                <div className="w-7 h-7 mx-auto mb-2 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <Database className="w-4 h-4" />
                </div>
                <div className="font-anton text-xs sm:text-sm text-gray-900">Relational Database</div>
                <div className="text-[11px] text-gray-500 font-mono mt-0.5">PostgreSQL</div>
              </div>
            </div>
          </div>

          {/* 3 Compact High-Level Supporting Capability Notes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-lg bg-white/70 border border-gray-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                Responsive ERP Interface
              </span>
              <p className="text-xs text-gray-600 leading-relaxed">
                Built with Next.js and Tailwind CSS for rapid performance across desktop monitors and tablet displays.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white/70 border border-gray-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                Centralized Data Layer
              </span>
              <p className="text-xs text-gray-600 leading-relaxed">
                Structured relational architecture connecting on-ground data entries with management dashboards.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white/70 border border-gray-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                Real-Time Data Sync
              </span>
              <p className="text-xs text-gray-600 leading-relaxed">
                Reliable API pipelines ensure site progress, attendance, and customer records reflect instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          10. HIGH-LEVEL TECHNICAL CHALLENGES (3 Cards)
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
                  High-Density Data Rendering
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Management dashboards required rendering hundreds of active customer and project records without UI stutter.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  Solution
                </span>
                <p className="text-xs text-gray-800 font-medium leading-relaxed">
                  Implemented optimized pagination, multi-column search indexing, and lightweight client state management.
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
                  Responsive Multi-Device Layouts
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  The dashboard required seamless adaptability across desktop monitors, laptops, and field tablets.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  Solution
                </span>
                <p className="text-xs text-gray-800 font-medium leading-relaxed">
                  Designed fluid grid structures and collapsible sidebar navigation ensuring comfortable operational usage.
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
                  Batch Ingestion & Validation
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Importing customer master sheets needed fast schema validation without corrupting existing records.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  Solution
                </span>
                <p className="text-xs text-gray-800 font-medium leading-relaxed">
                  Built client-side sheet parsing paired with row-by-row revalidation before database persistence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          11. COMPACT TECH STACK SECTION
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
                Web ERP Dashboard
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
                UI & Data Visualization
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Lucide React", "Responsive Grids", "Data Tables", "Custom Filters"].map((item) => (
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
                Backend & API
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Node.js", "REST APIs", "Auth Services"].map((item) => (
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
          12. WHAT WE DELIVERED (4 Concise Outcome Cards)
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
                  Centralized Operations Web ERP
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Full-featured administrative dashboard for project oversight, customer directory, and staff management.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">02</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  Customer Master & Filtering System
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Multi-parameter customer search, column filtering, and bulk spreadsheet import workflow.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">03</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  Operational Tracking Workflows
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Structured data pipelines linking site progress milestones directly to executive reports.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">04</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  Management Visibility
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Real-time operational KPI visibility replacing fragmented updates with single-source clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          13. RELATED SERVICES (Canonical Links)
          =================================================== */}
      <RelatedServices caseStudy={caseStudy} />

      {/* ===================================================
          14. RELATED CASE STUDIES (Next.js Crawlable Links)
          =================================================== */}
      <RelatedCaseStudies
        currentSlug={caseStudy.slug}
        relatedSlugs={caseStudy.relatedSlugs}
      />
    </div>
  );
};

export default HNEnterprisesCaseStudy;
