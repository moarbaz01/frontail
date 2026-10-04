import React from "react";
import Image from "next/image";
import {
  Sparkles,
  LineChart,
  BarChart3,
  Search,
  Gauge,
  LayoutDashboard,
  CheckCircle2,
  Database,
  Server,
  Monitor,
  Zap,
  ArrowRight,
  Cpu,
  Layers,
} from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";
import RelatedServices from "./RelatedServices";
import RelatedCaseStudies from "./RelatedCaseStudies";

interface StockHarvestingCaseStudyProps {
  caseStudy: CaseStudy;
}

export const StockHarvestingCaseStudy: React.FC<StockHarvestingCaseStudyProps> = ({
  caseStudy,
}) => {

  return (
    <div className="w-full">
      {/* ===================================================
          1. HERO SECTION (Unwrapped Project Image)
          =================================================== */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 border-b border-gray-300 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-white text-primary border border-primary/20 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>{caseStudy.category}</span>
              </span>
              <span className="text-xs font-semibold text-gray-700 bg-gray-100/90 px-3 py-1 rounded-md border border-gray-200">
                {caseStudy.industry}
              </span>
            </div>

            <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-normal mb-4">
              {caseStudy.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              High-performance market analytics and sector backtesting platform engineered for rapid candlestick visualization and quantitative trade research.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {["Next.js", "TypeScript", "TimescaleDB", "TradingView Charts"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800 shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Top Project Showcase Image (Plain / Unwrapped) */}
          <div className="relative mx-auto max-w-4xl flex items-center justify-center pt-2 pb-4">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full flex items-center justify-center">
              <Image
                src={caseStudy.heroImage}
                alt={`${caseStudy.title} Project Showcase`}
                fill
                priority
                unoptimized
                className="object-contain drop-shadow-2xl"
                sizes="(min-width: 1280px) 1000px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          2. COMPACT PROJECT SNAPSHOT (4 Attributes Only)
          =================================================== */}
      <section className="py-6 bg-white/70 border-b border-gray-300">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-lg bg-[#f7f3eb]/60 border border-gray-200 text-center">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                Focus
              </span>
              <span className="font-anton text-base md:text-lg text-gray-900 tracking-normal">
                Market Analytics
              </span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f7f3eb]/60 border border-gray-200 text-center">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                Format
              </span>
              <span className="font-anton text-base md:text-lg text-gray-900 tracking-normal">
                Web & Tablet Platform
              </span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f7f3eb]/60 border border-gray-200 text-center">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                Core Engine
              </span>
              <span className="font-anton text-base md:text-lg text-gray-900 tracking-normal">
                Sector Backtesting
              </span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f7f3eb]/60 border border-gray-200 text-center">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                Stack
              </span>
              <span className="font-anton text-base md:text-lg text-gray-900 tracking-normal">
                Next.js + TimescaleDB
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          3. CHALLENGE & WHAT WE BUILT (Clean Editorial Cards)
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
                  Financial data interfaces often suffer from UI degradation when rendering dense historical candlestick records, real-time indicators, and multi-sector aggregates on standard viewports.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Rendering dense time-series histories smoothly without frame drops or browser latency.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Visualizing historical sector performance distributions across multi-year date horizons.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Providing responsive keyboard navigation (Ctrl+K) and fast timeframe switching.</span>
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
                  Frontail engineered a full-stack market platform pairing canvas-based charting with a sector backtesting visualizer and structured time-series data pipelines.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Interactive candlestick charting engine with dynamic timeframes (1D, 1W, 1M) and quantitative HUD.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Harvest Backtest dashboard supporting historical performance evaluation across 18 industry sectors.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Reliable market-data synchronization layer delivering pre-indexed data payloads with low latency.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          4. PLAIN SCREENSHOT (Skew on Desktop, Flat on Mobile)
          =================================================== */}
      <section className="py-14 md:py-20 border-b border-gray-300 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Interface Overview
            </span>
            <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal">
              Built for Speed & Clarity
            </h2>
          </div>

          {/* Plain Screenshot: Flat on Mobile, Skew on Desktop */}
          <div className="relative mb-14 md:perspective-[1400px]">
            <div className="relative mx-auto max-w-4xl rounded-xl border border-gray-300 shadow-xl overflow-hidden transition-all duration-500 transform-none md:[transform:perspective(1400px)_rotateX(5deg)_skewX(-2deg)] md:hover:[transform:perspective(1400px)_rotateX(0deg)_skewX(0deg)]">
              <Image
                src="/case-studies/stock-harvesting/chart.png"
                alt="Stock Harvesting Candlestick Chart UI"
                width={1200}
                height={580}
                unoptimized
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* 3 Small Visual Callouts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-xl border border-gray-300 shadow-2xs">
              <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <LineChart className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 tracking-normal mb-1">
                Historical Candles
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-prose">
                High-performance canvas charting with multi-timeframe OHLCV inspection (1D, 1W, 1M).
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-xl border border-gray-300 shadow-2xs">
              <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 tracking-normal mb-1">
                Signal Analysis
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-prose">
                Direct visual trade signals with entry markers and dynamic indicator overlays.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-5 rounded-xl border border-gray-300 shadow-2xs">
              <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Gauge className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 tracking-normal mb-1">
                Performance Statistics
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-prose">
                Real-time HUD computing hit ratio, total return, profit factor, and max drawdown.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          5. THREE LARGE VISUAL PRODUCT MODULES
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
            {/* MODULE 1: Trading & Charting */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
              <div className="lg:col-span-6">
                <div className="max-w-xl mx-auto rounded-xl border border-gray-300 shadow-lg overflow-hidden transition-all duration-500 transform-none md:[transform:perspective(1200px)_rotateX(4deg)_rotateY(-5deg)_skewX(-2.5deg)] md:hover:[transform:perspective(1200px)_rotateX(0deg)_rotateY(0deg)_skewX(0deg)]">
                  <Image
                    src="/case-studies/stock-harvesting/chart.png"
                    alt="Interactive Candlestick Charting Module"
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
                  Trading & Charting
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-prose">
                  Canvas-powered financial charting built for active traders, supporting multi-timeframe candle toggles, dynamic cursor crosshairs, synchronized volume sub-charts, and instant keyboard navigation across BSE/NSE instruments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Canvas Rendering
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Multi-Timeframe (1D/1W/1M)
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Live Trade HUD
                  </span>
                </div>
              </div>
            </div>

            {/* MODULE 2: Backtesting & Sector Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center lg:grid-flow-dense">
              <div className="lg:col-span-6 lg:col-start-7">
                <div className="max-w-xl mx-auto rounded-xl border border-gray-300 shadow-lg overflow-hidden transition-all duration-500 transform-none md:[transform:perspective(1200px)_rotateX(4deg)_rotateY(5deg)_skewX(2.5deg)] md:hover:[transform:perspective(1200px)_rotateX(0deg)_rotateY(0deg)_skewX(0deg)]">
                  <Image
                    src="/case-studies/stock-harvesting/backtest.png"
                    alt="Harvest Backtest 18-Sector Visualizer"
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
                  Backtesting & Sector Analytics
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-prose">
                  A historical analytics engine that allows users to evaluate market signals and review performance distributions categorized across 18 distinct industry sectors over custom date horizons.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    18 Industry Sectors
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Historical Analytics
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Custom Date Horizons
                  </span>
                </div>
              </div>
            </div>

            {/* MODULE 3: Market Data Engineering */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
              <div className="lg:col-span-6">
                <div className="max-w-xl mx-auto rounded-xl border border-gray-300 shadow-lg overflow-hidden transition-all duration-500 transform-none md:[transform:perspective(1200px)_rotateX(4deg)_rotateY(-5deg)_skewX(-2.5deg)] md:hover:[transform:perspective(1200px)_rotateX(0deg)_rotateY(0deg)_skewX(0deg)]">
                  <Image
                    src="/case-studies/stock-harvesting/widgets.png"
                    alt="Stock Harvesting Segment Ranking and Widgets Dashboard"
                    width={1100}
                    height={540}
                    unoptimized
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-6">
                <span className="text-xs font-bold font-mono text-primary uppercase tracking-wider mb-2 block">
                  Module 03
                </span>
                <h3 className="font-anton text-2xl md:text-3xl font-extrabold text-gray-900 tracking-normal mb-3">
                  Market Data Engineering
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-prose">
                  Structured data pipelines normalize historical price data and deliver organized sector datasets to client dashboards with rapid response times.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Time-Series Indexing
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Ranked Segments
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white border border-gray-300 text-gray-800">
                    Ctrl+K Instant Search
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          6. KEY FEATURES (6 Concise Cards, No Heavy Copy)
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
                <LineChart className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Interactive Candlestick Engine
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Low-latency OHLCV charts with volume overlays, crosshairs, and multi-timeframe controls.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <BarChart3 className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Harvest Backtest Dashboard
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Visual stacked bar charts analyzing signal outcomes grouped across 18 industry sectors.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <LayoutDashboard className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Curated Index Watchlists
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Segment-ranked market boards for BSE 100, SmallCap, MicroCap, and AllCap equities.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Search className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Global Keyboard Search
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Rapid modal lookup (Ctrl+K) for instant instrument discovery across listed equities.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Gauge className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Quantitative Metric HUD
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Real-time stats computing hit ratio, total return %, max drawdown, and trade counts.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                <Monitor className="w-4 h-4" />
              </div>
              <h3 className="font-anton text-lg font-bold text-gray-900 mb-2">
                Responsive Multi-Pane UI
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Tailored analytical layout optimized for widescreen monitors and tablet viewports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          7. HIGH-LEVEL ABSTRACTED ARCHITECTURE SYSTEM DIAGRAM
          =================================================== */}
      <section className="py-14 md:py-20 border-b border-gray-300">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              System Design
            </span>
            <h2 className="font-anton text-3xl md:text-4xl font-extrabold text-gray-900 tracking-normal">
              Technical Architecture
            </h2>
          </div>

          {/* Clean High-Level Abstraction Flow */}
          <div className="bg-white/90 backdrop-blur-xs p-6 md:p-8 rounded-xl border border-gray-300 shadow-xs mb-8">
            <div className="grid grid-cols-1 md:grid-cols-9 gap-3 items-center">
              {/* Step 1: Market Data Sources */}
              <div className="p-4 rounded-lg bg-[#f7f3eb]/70 border border-gray-200 text-center">
                <div className="w-7 h-7 mx-auto mb-2 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <Server className="w-4 h-4" />
                </div>
                <div className="font-anton text-xs sm:text-sm text-gray-900">Data Sources</div>
                <div className="text-[11px] text-gray-500 font-mono mt-0.5">Market Feeds</div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-gray-400 rotate-90 md:rotate-0">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>

              {/* Step 2: Data Processing */}
              <div className="p-4 rounded-lg bg-[#f7f3eb]/70 border border-gray-200 text-center">
                <div className="w-7 h-7 mx-auto mb-2 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="font-anton text-xs sm:text-sm text-gray-900">Data Processing</div>
                <div className="text-[11px] text-gray-500 font-mono mt-0.5">Normalization</div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-gray-400 rotate-90 md:rotate-0">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>

              {/* Step 3: Time-Series Storage */}
              <div className="p-4 rounded-lg bg-[#f7f3eb]/70 border border-gray-200 text-center">
                <div className="w-7 h-7 mx-auto mb-2 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <Database className="w-4 h-4" />
                </div>
                <div className="font-anton text-xs sm:text-sm text-gray-900">Time-Series Storage</div>
                <div className="text-[11px] text-gray-500 font-mono mt-0.5">Optimized Indices</div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-gray-400 rotate-90 md:rotate-0">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>

              {/* Step 4: Analytics Layer */}
              <div className="p-4 rounded-lg bg-[#f7f3eb]/70 border border-gray-200 text-center">
                <div className="w-7 h-7 mx-auto mb-2 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="font-anton text-xs sm:text-sm text-gray-900">Analytics Layer</div>
                <div className="text-[11px] text-gray-500 font-mono mt-0.5">Sector Aggregates</div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-gray-400 rotate-90 md:rotate-0">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>

              {/* Step 5: Interactive UI */}
              <div className="p-4 rounded-lg bg-[#f7f3eb]/70 border border-gray-200 text-center">
                <div className="w-7 h-7 mx-auto mb-2 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <Monitor className="w-4 h-4" />
                </div>
                <div className="font-anton text-xs sm:text-sm text-gray-900">Interactive UI</div>
                <div className="text-[11px] text-gray-500 font-mono mt-0.5">Charting & Backtest</div>
              </div>
            </div>
          </div>

          {/* 3 Compact High-Level Technical Notes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-lg bg-white/70 border border-gray-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                Time-Series Storage
              </span>
              <p className="text-xs text-gray-600 leading-relaxed">
                Optimized time-series storage architecture engineered to support rapid query speeds across multi-year historical datasets.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white/70 border border-gray-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                Data Freshness
              </span>
              <p className="text-xs text-gray-600 leading-relaxed">
                Built a reliable market-data synchronization layer designed to keep analytical datasets consistent and current.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white/70 border border-gray-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                Frontend Visualization
              </span>
              <p className="text-xs text-gray-600 leading-relaxed">
                High-performance canvas rendering pipeline designed to deliver smooth 60 FPS interactions on desktop and tablet viewports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          8. HIGH-LEVEL TECHNICAL CHALLENGES & SOLUTIONS
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
                  High-Density Chart Rendering
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Rendering dense multi-year candlestick datasets alongside active indicators without browser frame drops.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  Solution
                </span>
                <p className="text-xs text-gray-800 font-medium leading-relaxed">
                  Engineered canvas-based rendering with viewport slicing for seamless 60 FPS user interaction.
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
                  Multi-Sector Historical Analytics
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Visualizing aggregate performance distributions across 18 industry sectors over custom date horizons.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  Solution
                </span>
                <p className="text-xs text-gray-800 font-medium leading-relaxed">
                  Built an analytical processing pipeline that delivers organized historical datasets directly to visualizers.
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
                  Market-Data Synchronization
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Keeping analytical datasets consistent and current without disrupting active user charting sessions.
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  Solution
                </span>
                <p className="text-xs text-gray-800 font-medium leading-relaxed">
                  Implemented non-intrusive background synchronization that updates underlying data while preserving UI state.
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
                Frontend & UI
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
                Visualization
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["TradingView Charts", "HTML5 Canvas", "Lucide Icons"].map((item) => (
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
                Backend & Ingestion
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Node.js", "REST APIs", "Sync Pipelines"].map((item) => (
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
                {["PostgreSQL", "TimescaleDB", "Time-Series Indices"].map((item) => (
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
          10. WHAT WE DELIVERED (4 Concise Outcome Cards)
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
                  Interactive Market Analysis
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Smooth canvas charting with multi-timeframe toggles and quantitative performance HUD.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">02</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  Historical Backtesting
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  18-sector visual backtesting dashboard evaluating historical market signals across custom date ranges.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">03</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  Segment Watchlists
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Ranked market boards for BSE indices paired with global keyboard shortcuts (Ctrl+K).
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-gray-300 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">04</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  Automated Data Refresh
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Reliable market-data synchronization pipelines keeping analytical charts current.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          11. RELATED SERVICES
          =================================================== */}
      <RelatedServices caseStudy={caseStudy} />

      {/* ===================================================
          12. RELATED CASE STUDIES
          =================================================== */}
      <RelatedCaseStudies
        currentSlug={caseStudy.slug}
        relatedSlugs={caseStudy.relatedSlugs}
      />
    </div>
  );
};

export default StockHarvestingCaseStudy;
