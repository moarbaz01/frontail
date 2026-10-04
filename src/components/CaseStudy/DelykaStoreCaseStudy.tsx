import React from "react";
import Image from "next/image";
import {
  Sparkles,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  UserCheck,
  CheckCircle2,
  Database,
  Server,
  Monitor,
  ArrowRight,
  Zap,
  Layers,
  ShieldCheck,
  Receipt,
  Package,
} from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";
import RelatedServices from "./RelatedServices";
import RelatedCaseStudies from "./RelatedCaseStudies";

interface DelykaStoreCaseStudyProps {
  caseStudy: CaseStudy;
}

export const DelykaStoreCaseStudy: React.FC<DelykaStoreCaseStudyProps> = ({
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
                <span>Case Study / Digital Commerce</span>
              </span>
              <span className="text-xs font-semibold text-gray-700 bg-gray-100/90 px-3 py-1 rounded-md border border-gray-200">
                Gaming Top-Up Storefront
              </span>
            </div>

            <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-normal mb-4">
              {caseStudy.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              A responsive digital gaming storefront designed for fast product discovery, top-up purchases and streamlined checkout.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Custom Auth"].map((tech) => (
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
                alt={`${caseStudy.title} Digital Storefront Interface`}
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
                Gaming / Commerce
              </span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f7f3eb]/60 border border-gray-200 text-center">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                Platform
              </span>
              <span className="font-anton text-base md:text-lg text-gray-900 tracking-normal">
                Web Storefront
              </span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f7f3eb]/60 border border-gray-200 text-center">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                Product Type
              </span>
              <span className="font-anton text-base md:text-lg text-gray-900 tracking-normal">
                Digital Top-Up Store
              </span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f7f3eb]/60 border border-gray-200 text-center">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                Core Stack
              </span>
              <span className="font-anton text-base md:text-lg text-gray-900 tracking-normal">
                Next.js + MongoDB
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
                  Digital top-up purchases require a fast, clear journey from selecting a product to completing a transaction. The product needed to organize digital products cleanly while supporting secure account and payment workflows.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Designing an intuitive product catalog that makes browsing titles and selecting denominations instantaneous.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Streamlining digital purchase flows to minimize checkout drop-offs across mobile and desktop devices.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Integrating secure payment workflows with automated order confirmation and status tracking.</span>
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
                  Frontail developed a modern, mobile-first digital storefront featuring a catalog of gaming products, quick-select top-up denominations, custom user accounts, and integrated payment processing.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Structured digital catalog with responsive product cards, category navigation, and search.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Rapid top-up configuration view enabling instantaneous SKU selection and account inputs.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Integrated payment gateway pipelines providing automated confirmation and order history.</span>
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
              Storefront Experience
            </span>
            <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal">
              Designed for Speed and Conversion
            </h2>
          </div>

          {/* Plain Screenshot: Flat on Mobile, 3D Skew on Desktop */}
          <div className="relative mb-14 md:perspective-[1400px]">
            <div className="relative mx-auto max-w-4xl rounded-xl border border-gray-300 shadow-xl overflow-hidden transition-all duration-500 transform-none md:[transform:perspective(1400px)_rotateX(5deg)_skewX(-2deg)] md:hover:[transform:perspective(1400px)_rotateX(0deg)_skewX(0deg)]">
              <Image
                src="/projects/delykastore.png"
                alt="Delyka Store Digital Commerce Interface"
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
                <Gamepad2 className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 tracking-normal mb-1">
                Digital Catalog
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-prose">
                Clean visual catalog showcasing popular game titles and digital voucher packages.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-xl border border-gray-300 shadow-2xs">
              <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <ShoppingCart className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 tracking-normal mb-1">
                Quick SKU Selection
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-prose">
                Direct denomination picker with instant price calculation and validation.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-xl border border-gray-300 shadow-2xs">
              <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <CreditCard className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 tracking-normal mb-1">
                Frictionless Checkout
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-prose">
                Streamlined payment steps designed for rapid completion on mobile devices.
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
              Core Commerce Modules
            </h2>
          </div>

          <div className="space-y-20 md:space-y-28">
            {/* MODULE 1: Digital Storefront */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
              <div className="lg:col-span-6">
                <div className="max-w-xl mx-auto rounded-xl border border-gray-300 shadow-xl overflow-hidden transition-all duration-500 transform-none md:[transform:perspective(1200px)_rotateX(4deg)_rotateY(-5deg)_skewX(-2.5deg)] md:hover:[transform:perspective(1200px)_rotateX(0deg)_rotateY(0deg)_skewX(0deg)]">
                  <Image
                    src="/projects/delykastore.png"
                    alt="Digital Storefront Catalog View"
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
                  Digital Storefront
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-prose">
                  A high-speed storefront interface designed for responsive browsing across gaming titles, enabling players to discover packages, compare options, and initiate purchases with zero lag.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Browse
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Select
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Purchase
                  </span>
                </div>
              </div>
            </div>

            {/* MODULE 2: Top-Up Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center lg:grid-flow-dense">
              <div className="lg:col-span-6 lg:col-start-7">
                <div className="max-w-xl mx-auto rounded-xl border border-gray-300 shadow-xl overflow-hidden transition-all duration-500 transform-none md:[transform:perspective(1200px)_rotateX(4deg)_rotateY(5deg)_skewX(2.5deg)] md:hover:[transform:perspective(1200px)_rotateX(0deg)_rotateY(0deg)_skewX(0deg)]">
                  <Image
                    src="/projects/delykastore.png"
                    alt="Top-Up SKU Selection View"
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
                  Top-Up Experience
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-prose">
                  Friction-free SKU configuration allowing players to input game IDs and pick credit tiers with instant validation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Direct SKU Selection
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Player ID Verification
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Instant Cart Trigger
                  </span>
                </div>
              </div>
            </div>

            {/* MODULE 3: Transaction Flow */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
              <div className="lg:col-span-6">
                {/* High-Level Flow: Customer -> Product Selection -> Checkout -> Payment -> Confirmation */}
                <div className="max-w-xl mx-auto rounded-xl border border-gray-300 bg-white/90 p-5 md:p-6 shadow-lg">
                  <div className="flex flex-col gap-2">
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-1.5 items-center text-center">
                      <div className="p-2.5 rounded bg-[#f7f3eb]/70 border border-gray-200">
                        <UserCheck className="w-4 h-4 mx-auto text-primary mb-0.5" />
                        <div className="font-anton text-[11px] text-gray-900">Customer</div>
                      </div>
                      <div className="flex justify-center text-primary rotate-90 sm:rotate-0">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                      <div className="p-2.5 rounded bg-[#f7f3eb]/70 border border-gray-200">
                        <Package className="w-4 h-4 mx-auto text-primary mb-0.5" />
                        <div className="font-anton text-[11px] text-gray-900">Selection</div>
                      </div>
                      <div className="flex justify-center text-primary rotate-90 sm:rotate-0">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                      <div className="p-2.5 rounded bg-[#f7f3eb]/70 border border-gray-200">
                        <CreditCard className="w-4 h-4 mx-auto text-primary mb-0.5" />
                        <div className="font-anton text-[11px] text-gray-900">Payment</div>
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
                  Transaction Flow
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-prose">
                  A seamless transaction pipeline transitioning customers from package choice through secure checkout and automated order receipting without unnecessary redirects.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Streamlined Steps
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Payment Gateway
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Instant Receipts
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
                <Gamepad2 className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Digital Product Catalog
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Structured catalog showcasing popular gaming titles and digital top-up services.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Package className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Fast Product Selection
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Instant denomination selection with dynamic pricing and clear package breakdowns.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Secure User Accounts
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Custom authentication allowing users to manage saved details and review past orders.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <CreditCard className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Payment Integration
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Reliable gateway connections facilitating secure online transaction processing.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <ShoppingCart className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Responsive Checkout
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Mobile-optimized checkout steps designed for rapid completion on any screen.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Receipt className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Order Tracking
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Real-time order confirmation and transaction receipts accessible directly in-app.
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
            <div className="grid grid-cols-1 md:grid-cols-7 gap-3 items-center">
              <div className="p-4 rounded-lg bg-[#f7f3eb]/70 border border-gray-200 text-center">
                <div className="w-7 h-7 mx-auto mb-2 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <Monitor className="w-4 h-4" />
                </div>
                <div className="font-anton text-xs sm:text-sm text-gray-900">Storefront UI</div>
                <div className="text-[11px] text-gray-500 font-mono mt-0.5">Next.js / React</div>
              </div>

              <div className="flex justify-center text-gray-400 rotate-90 md:rotate-0">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>

              <div className="p-4 rounded-lg bg-[#f7f3eb]/70 border border-gray-200 text-center">
                <div className="w-7 h-7 mx-auto mb-2 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <Server className="w-4 h-4" />
                </div>
                <div className="font-anton text-xs sm:text-sm text-gray-900">Application Layer</div>
                <div className="text-[11px] text-gray-500 font-mono mt-0.5">Custom Auth & API</div>
              </div>

              <div className="flex justify-center text-gray-400 rotate-90 md:rotate-0">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>

              <div className="p-4 rounded-lg bg-[#f7f3eb]/70 border border-gray-200 text-center">
                <div className="w-7 h-7 mx-auto mb-2 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <Database className="w-4 h-4" />
                </div>
                <div className="font-anton text-xs sm:text-sm text-gray-900">Commerce Data</div>
                <div className="text-[11px] text-gray-500 font-mono mt-0.5">MongoDB</div>
              </div>

              <div className="flex justify-center text-gray-400 rotate-90 md:rotate-0">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>

              <div className="p-4 rounded-lg bg-[#f7f3eb]/70 border border-gray-200 text-center">
                <div className="w-7 h-7 mx-auto mb-2 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div className="font-anton text-xs sm:text-sm text-gray-900">Payment Gateway</div>
                <div className="text-[11px] text-gray-500 font-mono mt-0.5">Secure Webhooks</div>
              </div>
            </div>
          </div>

          {/* 3 Compact High-Level Supporting Capability Notes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-lg bg-white/70 border border-gray-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                Optimized Next.js Frontend
              </span>
              <p className="text-xs text-gray-600 leading-relaxed">
                Static and server-rendered components providing rapid catalog rendering and search indexing.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white/70 border border-gray-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                Flexible Document Schema
              </span>
              <p className="text-xs text-gray-600 leading-relaxed">
                MongoDB database structure supporting diverse digital SKU attributes and player account fields.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white/70 border border-gray-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                Secure Webhook Processing
              </span>
              <p className="text-xs text-gray-600 leading-relaxed">
                Asynchronous payment webhook listeners ensuring instant transaction confirmations.
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
                  Fast Product Discovery on Mobile
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Mobile users require snappy transitions across catalogs without laggy page reloads.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  Solution
                </span>
                <p className="text-xs text-gray-800 font-medium leading-relaxed">
                  Engineered lightweight catalog components with optimized image delivery and instant client-side state.
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
                  Frictionless Checkout Journey
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Complex multi-step checkout flows cause drop-offs in fast-moving digital purchases.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  Solution
                </span>
                <p className="text-xs text-gray-800 font-medium leading-relaxed">
                  Consolidated SKU selection and payment triggering into a focused, single-screen configuration workflow.
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
                  Payment Status Synchronization
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Transactions need immediate confirmation receipts without requiring customer page refreshes.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  Solution
                </span>
                <p className="text-xs text-gray-800 font-medium leading-relaxed">
                  Implemented resilient webhook listeners and real-time order status updates for instant confirmation.
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
                Frontend Storefront
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
                Database & Storage
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["MongoDB", "Mongoose ODM", "JSON Datastores"].map((item) => (
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
                Auth & Security
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Custom Auth", "Session Tokens", "Secure Storage"].map((item) => (
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
                Payments & Integrations
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Payment Gateways", "Webhook Pipelines", "REST APIs"].map((item) => (
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
                  Responsive Gaming Storefront
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Mobile-first digital commerce interface for game top-ups and vouchers.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">02</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  Digital Purchase Flow
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Streamlined denomination selection and fast checkout experience.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">03</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  Account & Auth Experience
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Secure customer authentication and order history dashboard.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">04</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  Integrated Payment Workflow
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Automated payment verification and instant transaction receipt delivery.
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

export default DelykaStoreCaseStudy;
